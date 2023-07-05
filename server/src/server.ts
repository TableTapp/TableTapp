import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Logging from './library/Logging';
import passport from 'passport';
import session from 'express-session';
import flash from 'express-flash';
import cookieParser from 'cookie-parser';
import { config } from './config/config';

import genericRoutes from './routes/genericRoutes';
import orderRoutes from './routes/orderRoutes';
import tableRoutes from './routes/tableRoutes';
import customerRoutes from './routes/customerRoutes';
import vendorRoutes from './routes/vendorRoutes';
import menuRoutes from './routes/menuRoutes';
import itemRoutes from './routes/itemRoutes';
import orderItemRoutes from './routes/orderItemRoutes';
import cartRoutes from './routes/cartRoutes';
import authRoutes from './routes/authRoutes';
require('./middleware/authMiddleware')(passport);

const app = express();

// Only change the connection String
mongoose.connect(config.mongo.url, { w: 'majority', retryWrites: true })
    .then(() => {
        Logging.info('Connected to database');
        StartServer();
    })
    .catch((error) => {
        Logging.error('Unable to connect:');
        Logging.error(error);
    });

// on startup create a new database only use this database if in local mode. Check if local database and compare with remote. Prompt a upload option.

const StartServer = () => {
    app.use(flash());
    app.use(session({
        secret: "SECRET",
        resave: false,
        saveUninitialized: false
    }));
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {
        /** Log the req */
        Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });

        next();
    });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    /** Rules of our API */
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    app.use('/generic', genericRoutes);
    app.use('/customer', customerRoutes);
    app.use('/vendor', vendorRoutes);
    app.use('/table', tableRoutes);
    app.use('/order', orderRoutes);
    app.use('/item', itemRoutes);
    app.use('/orderItem', orderItemRoutes);
    app.use('/cart', cartRoutes);
    app.use('/menu', menuRoutes);
    app.use('/auth', authRoutes);

    /** Healthcheck */
    app.get('/ping', (req, res, next) => res.status(200).json({ ping: 'pong' }));

    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Not found');

        Logging.error(error);

        res.status(404).json({
            message: error.message
        });
    });

    http.createServer(app).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
};