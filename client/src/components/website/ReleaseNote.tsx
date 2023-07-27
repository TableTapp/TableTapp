import { Text, List, ListItem, ListIcon, Box } from '@chakra-ui/react';
import React from 'react';
import { FiCornerDownRight } from "react-icons/fi";
interface IFeature {
    feature: string;
    featureDescription: string;
    keyFeatures: string[];
    workingOn: string[];
}

interface FeatureCardProps {
    Features: IFeature;
}

const ReleaseNote: React.FC<FeatureCardProps> = (props: FeatureCardProps) => {
    const { Features } = props;
   
	return (
        <>
            <Text fontSize={'large'} > <Box as={'b'}>{Features.feature}</Box> - {Features.featureDescription}</Text>
            <Box padding={3}>
                <Text fontSize={'large'} > Key Features:</Text>
                <List paddingLeft={3}>
                {
                    Features.keyFeatures.map((feature, index) => {
                        return (
                            <ListItem key={index}>
                                <ListIcon as={FiCornerDownRight} fontSize={'large'}/>
                                {feature}
                            </ListItem>
                        )
                    })   
                }
                </List>
            </Box>
            <Box padding={3}>
                <Text fontSize={'large'} > What were working on:</Text>
                <List paddingLeft={3}>
                {
                    Features.workingOn.map((feature, index) => {
                        return (
                            <ListItem key={index}>
                                <ListIcon as={FiCornerDownRight} fontSize={'large'}/>
                                {feature}
                            </ListItem>
                        )
                    })   
                }
                </List>
            </Box>
           
        </>
	);
};

export default ReleaseNote;