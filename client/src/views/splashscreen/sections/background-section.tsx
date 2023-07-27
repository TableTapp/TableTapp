import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Background } from '../../../components/website/BackgroundSection';

const BackgroundSection: React.FC = () => {
    const background = [
        {
            Title: 'Lessen the work load on your staff',
            Description: 'The power of efficiency, in the palm of your hands. Experience a seamless workload solution tailored to the needs of your team. Unlock limitless productivity, boost performance, and accelerate your business - all just a tap away!',
            ButtonLabel: 'Learn More',
            ImgSrc: 'assets/lessen-work-load.svg',
            reverse: false
        },
        {
            Title: 'Seamless integration between the front and back of house',
            Description: 'Automate order ticketing, manage your inventory, and seamlessly integrate your front-of-house and back-of-house operations to unleash your staff’s full potential!',
            ButtonLabel: 'Learn More',
            ImgSrc: 'assets/seamless-integration.svg',
            reverse: true
        },
        {
            Title: 'Customer ordering experience that rivals industry leaders',
            Description: 'Revolutionize how customers order! Step into a new era of unparalleled convenience with our cutting-edge order placement application. Grant your customers the freedom to order independently, elevating your business and redefining industry standards.',
            ButtonLabel: 'Learn More',
            ImgSrc: 'assets/kds.svg',
            reverse: false
        },
        {
            Title: 'Ergonomic and intuitive user experience',
            Description: 'Seamless simplicity: navigate effortlessly with our thoughtfully designed interface. Discover user-friendly perfection, where intuition meets precision, making ordering a breeze, even in the messiest of kitchens!',
            ButtonLabel: 'Learn More',
            ImgSrc: 'assets/simple-ui.jpg',
            reverse: true
        }
    ]

	return (
		<Stack direction={'column'}>
            {background.map((item, index) => {
                return (
                    <Background
                        key={index}
                        reverse={item.reverse}
                        Title={item.Title}
                        Description={item.Description}
                        ButtonLabel={item.ButtonLabel}
                        ImgSrc={item.ImgSrc}
                    />
                )
            })}
        </Stack>
	);
};

export default BackgroundSection;