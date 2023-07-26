import React from 'react';

// UI Components
import { 
VStack, 
Stepper, 
StepIndicator, 
StepStatus, 
StepNumber, 
StepIcon, 
Box, 
Step, 
StepTitle, 
StepSeparator, 
useSteps, 
Center,
Progress,
Flex
} from '@chakra-ui/react';
import Header from '../../components/Header';

interface OrderStatusProps {
	handleBack?: () => void;
}

const steps = [
	{ title: 'Order Placed' },
	{ title: 'Order Confirmed' },
	{ title: 'Order Being made' },
	{ title: 'Order Completed' },
];

function OrderProgress () {
	const { activeStep } = useSteps({
		index: 1,
		count: steps.length,
	});

	const max = steps.length - 1
	const progressPercent = (activeStep / max) * 40

	return (
	<Box position={'relative'}>
		<Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
		{steps.map((step, index) => (
			<Step key={index}>
			<StepIndicator>
				<StepStatus
				complete={<StepIcon />}
				incomplete={<StepNumber />}
				active={<StepNumber />}
				/>
			</StepIndicator>

			<Box flexShrink='0'>
				<StepTitle>{step.title}</StepTitle>
			</Box>

			<StepSeparator />
			</Step>
		))}
		</Stepper>
		<Progress
		value={progressPercent}
		position='absolute'
		height='full'
		width='3px'
		top='10px'
		zIndex={-1}
		/>
	</Box>
	);
}

const OrderStatusView: React.FC<OrderStatusProps> = (props: OrderStatusProps) => {
// make a post request creating a new table session with this customer
	const { handleBack } = props;
	const orderNumber = "1234567890";
	return (
		<VStack gap={2} height={'100vh'}>
			<Header 
				cart 
				headerOptions={{ 
					title: 'Order Status', 
					subtitle: `Order Number: ${orderNumber}`,
					onCartClose: handleBack
				}}
			/>
			<Flex width='100vw' height='50vh' justifyContent='left' alignItems='center'>
				<Center paddingStart={8}>
					<OrderProgress />
				</Center>
			</Flex>
		</VStack>
	);
};

export default OrderStatusView;
