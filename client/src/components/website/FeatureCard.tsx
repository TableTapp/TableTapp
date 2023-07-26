import React, { useRef } from 'react';
import {
    Card,
    CardBody,
    Image,
    Heading,
    Text,
    Stack,
    ScaleFade
} from '@chakra-ui/react';
import { useInViewport } from 'react-in-viewport';

interface FeatureCardProps {
    Description: string;
    Title: string;
    ImgSrc: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = (props: FeatureCardProps) => {
    const { Title, Description, ImgSrc } = props;
    const ref = useRef(null);
    // eslint-disable-next-line no-empty-pattern
    const { inViewport } = useInViewport(
        ref, 
        { rootMargin: '-200px' }, 
        { disconnectOnLeave: false}, 
        {}
    );
    return (
        <ScaleFade initialScale={0.8} whileHover={{scale: 1.05}} in={inViewport} transition={{ enter: { duration: 0.3 } }}>
            <Card ref={ref} maxWidth='400' height='450'>
                <Image padding={10} borderRadius={5}  height={{md: '200', sm: '150', lg: '300'}} aria-label='logo' objectFit='cover' src={ImgSrc} alt='Graphic'/>
                <CardBody>
                    <Stack direction={'column'} gap={1}>
                        <Heading size='lg' color={'#2D3748'}>{Title}</Heading>
                        <Text size='md' color={'#2D3748'}>{Description}</Text>
                    </Stack>
                </CardBody>
            </Card>  
        </ScaleFade> 
    );
}