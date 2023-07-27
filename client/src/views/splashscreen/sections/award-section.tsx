import { Heading, Text, Stack, Image, Spacer, ScaleFade } from '@chakra-ui/react';
import React, {useRef} from 'react';
import { useInViewport } from 'react-in-viewport';

const AwardSection: React.FC = () => {
    const pictures = [
        "assets/team-photo.png",
        "assets/award.png"
    ];
    const ref = useRef(null);

    const { inViewport } = useInViewport(
        ref, 
        { rootMargin: '-100px' }, 
        { disconnectOnLeave: false}, 
        {}
    );

	return (
		<Stack direction={'column'} gap={10} paddingX={40} paddingTop={20} width={'100%'}>
            <Heading fontSize='6xl'>ECE 499 Design Project</Heading>
            <Text fontSize='4xl'> The Team was awarded Second place in the Kelly Manning Design project challenge. </Text>
            <Stack direction={'row'} width={'100%'}>
                {pictures.map((picture, index) => {
                    return (
                        <>
                            <ScaleFade initialScale={0.8} in={inViewport} transition={{ enter: { duration: 0.3 } }}>
                                <Image ref={ref} borderRadius={13} height={'400'} aria-label='logo' src={picture} alt='Graphic'/>
                                { index !== 2 ? <Spacer /> : null}
                            </ScaleFade>
                        </>
                    )
                })}
            </Stack>
        </Stack>
	);
};

export default AwardSection;