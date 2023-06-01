# TableTapp

## Installation Guide

**Prerequisites:**
- Node.js (v14 or later) and npm (v7 or later) installed on your machine.

**Step 1: Clone the Repository**
1. Open your terminal or command prompt.
2. Navigate to the desired directory where you want to clone the repository.
3. Run the following command to clone the repository:
   ```
   git clone https://github.com/TableTapp/TableTapp.git
   ```
4. Change into the project directory:
   ```
   cd TableTapp
   ```

**Step 2: Install Dependencies**
1. Make sure you are in the root directory of the project.
2. Run the following command to install the backend dependencies:
   ```
   cd server && npm install
   ```
3. After the backend dependencies are installed, navigate to the frontend directory:
   ```
   cd ../client
   ```
4. Run the following command to install the frontend dependencies:
   ```
   npm install
   ```
**Step 3: Setup Cloud database**
1. Go to the mongoDB atlas page for the [project](https://cloud.mongodb.com/v2/646f0efddea5c346583a1919#/clusters)
2. Add your IP address to the Network access tab
3. Go back to the database page and click `connect` then click `mongoDB for VS Code`
4. Note down the username, data base name, and db string for the next step. These can be found in the connection string which look like the line below:
```ts
`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${DATA_BASE_NAME}.${MONGO_DB_STRING}.mongodb.net/`
```
5. Next retrieve the password from the discord 

**Step 4: Configure Environment Variables**
1. In the `server/src` directory, create a new file named `.env` based on the provided `.env.example` file.
2. Configure the necessary environment variables in the `.env` file, such as the database connection string, JWT secret, etc.

Use these as the following credentials from the previous step

```ts
MONGO_USERNAME = <mongoDB admin user name>
MONGO_PASSWORD = <mongoDB admin password>
MONGO_DB_STRING = <mongoDB connection string>
MONGO_DB_NAME = tabletappdevcluster

SERVER_PORT = 9090
```


**Step 5: Start the Frontend**
(not important for development)
1. In the `client` directory, run the following command to start the frontend:
   ```
   npm run dev
   ```
   This will start `vite` and run the webpage on `http://localhost:5174`

**Step 6: Start the Development Server**
1. Open a new terminal or command prompt window.
2. Navigate to the `server` directory.
3. Run the following command to start the backend server:
   ```
   npm run server
   ```
   The backend server should start running on `http://localhost:5000`.

**Step 7: Run the Application**
1. Open a web browser.
2. Visit `http://localhost:5000` to access the application.


That's it! You have successfully installed and set up the MERN TypeScript application using Vite. Now you can start exploring and developing your application.