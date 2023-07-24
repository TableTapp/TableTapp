import React, { useRef } from 'react';
import {
    Image,
    Heading,
    Text,
    Stack,
    Button,
    Flex,
    Spacer,
    ScaleFade
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useInViewport } from 'react-in-viewport';

interface BackgroundProps {
    Description: string;
    Title: string;
    ButtonLabel: string;
    ImgSrc: string;
    reverse: boolean;
}

export const Background: React.FC<BackgroundProps> = (props: BackgroundProps) => {
    const { Title, Description, ButtonLabel, reverse } = props;
    const ref = useRef(null);
    // eslint-disable-next-line no-empty-pattern
    const { inViewport } = useInViewport(
        ref, 
        { rootMargin: '-200px' }, 
        { disconnectOnLeave: false}, 
        {}
    );
    console.log(inViewport);
    return (
        <ScaleFade initialScale={0.8} in={inViewport} transition={{ enter: { duration: 0.3 } }}>
            <Flex paddingX={40} paddingY={10} ref={ref}>
                    {!reverse ? <Image borderRadius={30} width={'40%'} height={'300'} aria-label='logo' src={'https://via.placeholder.com/1000'} alt='Graphic'/> : <Stack direction={'column'} gap={5} width={'40%'}>
                        <Heading color={'#2D3748'}>{Title}</Heading>
                        <Text color={'#2D3748'}>{Description}</Text>
                        <Button width={'-moz-fit-content'} rightIcon={<ArrowForwardIcon />} variant={'solid'} bg={'red.400'} color={'whiteAlpha.900'}>{ButtonLabel}</Button>
                    </Stack>}
                    <Spacer />
                    {!reverse ? <Stack direction={'column'} gap={5} width={'40%'}>
                        <Heading color={'#2D3748'}>{Title}</Heading>
                        <Text color={'#2D3748'}>{Description}</Text>
                        <Button width={'-moz-fit-content'} rightIcon={<ArrowForwardIcon />} variant={'solid'} bg={'red.400'} color={'whiteAlpha.900'}>{ButtonLabel}</Button>
                    </Stack> :
                    <Image borderRadius={30} width={'40%'} height={'300'} aria-label='logo' src={'https://via.placeholder.com/1000'} alt='Graphic'/>}
            </Flex>
        </ScaleFade>
    );
}