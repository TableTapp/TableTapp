import React, { useRef } from 'react';
import {
    Card,
    CardBody,
    Image,
    Heading,
    Text,
    Stack,
    IconButton,
    Icon,
    CardFooter,
    ScaleFade
} from '@chakra-ui/react';
import { useInViewport } from 'react-in-viewport';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

interface PersonProps {
    Name: string;
    Title: string;
    ImgSrc: string;
    githubLink: string;
    linkedInLink: string;
}

export const PersonCard: React.FC<PersonProps> = (props: PersonProps) => {
    const { Name, Title, ImgSrc, githubLink, linkedInLink } = props;
    const ref = useRef(null);

    const { inViewport } = useInViewport(
        ref, 
        { rootMargin: '-100px' }, 
        { disconnectOnLeave: false}, 
        {}
    );
    return (
        <ScaleFade initialScale={0.8} whileHover={{scale: 1.05}} in={inViewport} transition={{ enter: { duration: 0.3 } }}>
            <Card maxWidth={300} ref={ref}>
                <Image borderRadius={5}  height={'300'} aria-label='logo' objectFit='cover' src={ImgSrc} alt='Graphic'/>
                <CardBody maxWidth={300} paddingBlockEnd={0}>
                    <Stack direction={'column'} gap={1}>
                        <Heading size='md'>{Name}</Heading>
                        <Text size='sm'>{Title}</Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Stack direction={'row'} gap={2} justifyContent={'right'}>
                        <a target="_blank" href={githubLink}>
                            <IconButton aria-label='github' icon={<Icon as={FiGithub} />} />
                        </a>
                        <a target="_blank" href={linkedInLink}>
                            <IconButton aria-label='github' icon={<Icon as={FiLinkedin} />} />
                        </a>
                    </Stack>
                </CardFooter>
            </Card>
        </ScaleFade>
    );
}