import { Heading, Square, Stack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,  Flex } from '@chakra-ui/react';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import ReleaseNote from '../../../components/website/ReleaseNote';

const ResultSection: React.FC = () => {
	const releaseNotesRestaurant = [
		{
			feature: 'Table Management',
			featureDescription: 'Embrace a seamless and dynamic approach to managing your restaurant’s seating arrangements.',
			keyFeatures: [
				"Customizable Layouts: Create the perfect layout that matches your unique space and ambiance.",
				"Status Updates: Know when a table is ready for seating, occupies, or reserved, right from your fingertips.",
				"Instant Notifications: Receive instant alerts for new reservation requests, table assignments, and customer requests, so you never miss a beat."
			],
			workingOn: [
				"Table Availability: View the availability of tables in real-time, so you can make the most of your space.",
				"Table Assignments: Assign tables to customers and track their status, so you can provide a seamless dining experience.",
				"Table Reservations: Allow customers to reserve tables in advance, so you can plan ahead and maximize your seating capacity."
			]
		},
		{
			feature: 'Menu Management',
			featureDescription: 'Take your restaurant’s culinary offerings to new heights while simplifying the menu management process.',
			keyFeatures: [
				"Dynamic Menu Creation: Effortlessly craft and customize your restaurant’s menu with our user-friendly interface. Add, edit, or remove dishes with a few taps, keeping your menu fresh and enticing.",
				"Dietary Preferences: Cater to diverse palates by providing clear and detailed descriptions for each dish.",
				"Order Tracking: Keep track of incoming orders and manage them effortlessly with our intuitive order queue.",
				"Order Details: View detailed order summaries with itemized lists of dishes and quantities, providing a clear overview of each order."
			],
			workingOn: []
		},
		{
			feature: 'FoH & BoH Integration',
			featureDescription: 'Integrate your Front-of-House and Back-of-House operations',
			keyFeatures: [
				"Order Organization: Effortlessly view and organize all incoming orders in one centralized dashboard.",
				"Order Summary: Get a comprehensive summary of each order, including the table number, items ordered, and special instructions.",
				"Order Updates: Experience real-time updates as orders progress from preparation to serving, enabling seamless coordination between the kitchen and servers."
			],
			workingOn: []
		},
		{
			feature: 'Customer Analytics',
			featureDescription: 'Gain valuable insights into your customers’ preferences and behaviors.',
			keyFeatures: [
				"Customer Profiles: Access detailed profiles of your valued customers, including contact information, dining preferences, and order history.",
				"Customer Ranking: Reward your most loyal customers by identifying and ranking their patronage. "
			],
			workingOn: []
		}
	];

	const releaseNotesLoginPortal = [
		{
			feature: 'QR Code Scanner',
			featureDescription: 'This is the first view the user is greeted with when entering the app as a customer. After the user allows the app permissions to use their camera, they are able to enter the app where you can login or view the restaurant\'s menu. ',
			keyFeatures: [
				"Scanner ability to detect QR codes for app entry",
				"Ask permission for camera access"
			],
			workingOn: [
				"Scanner’s ability to link specific QR codes with the restaurant’s specific menu"
			]
		}, 
		{
			feature: 'Get Started',
			featureDescription: " After accessing the app though the QR code scanner the user is taken to the get started page. There the user is can view our companies logo and able to click a button to login to their account or view the menu of the restaurant they are at. The user also has the option to create a new account if neither of the other selections apply.",
			keyFeatures: [
				"Routes to login page",
				"Routes to view the restaurant's menu without logging in",
				"Routes to create a new TableTapp account if the user does not have one"
			],
			workingOn: []
		},
		{
			feature: 'Login Page & Password Recovery',
			featureDescription: "Users will be prompted to enter their email they signed up with and their password. If users forget their password they can access the “forgot password” page and enter their email they signed up with to recover their account.",
			keyFeatures: [
				"Ability to login with account email and password",
				"Ability to enter account email"
			],
			workingOn: [
				"Adding support for Facebook/Apple/Google assisted login",
				"Adding support for email recovery link sent to users email"
			]
		},
		{
			feature: 'Create Account',
			featureDescription: "Users are able to create ann account that contains the users: email, first and last name, (optional) phone number, and account password. After creating an account the user will be prompted with a page that asks the user to confirm their account by accessing a link sent to the account’s email. After the link is activated the user can then use their account to login to TableTapp.",
			keyFeatures: [
				"Users data is input and safely stored in our secure backed servers",
				"Users can enter their name, email and password"
			],
			workingOn: [
				"Adding support for email confirmation link to activate account"
			]
		}	
	];

	const releaseNotesSecurity = [
		{
			feature: 'Secure Authentication',
			featureDescription: 'We have implemented a state-of-the-art authentication system using JSON Web Tokens (JWT). This ensures that your credentials are securely transmitted and verified, providing a seamless and safe user experience.',
			keyFeatures: [],
			workingOn: []
		},
		{
			feature: 'Token Expiration and Refresh Tokens',
			featureDescription: 'To enhance security, TableTapp employs token expiration mechanisms. Additionally, we utilize refresh tokens to maintain secure sessions without the need for constant reauthentication, striking a balance between usability and security.',
			keyFeatures: [],
			workingOn: []
		},
		{
			feature: 'Advanced Password Encryption',
			featureDescription: 'Your password security is our priority. We use bcrypt, a powerful encryption algorithm, to store your passwords securely. This ensures that your sensitive information remains safe from unauthorized access.',
			keyFeatures: [],
			workingOn: []
		},
		{
			feature: 'HTTP Cookies for Secure Transfer',
			featureDescription: 'TableTapp employs HTTP cookies for secure transfer, ensuring that your data remains confidential during communication between your device and our servers.',
			keyFeatures: [],
			workingOn: []
		},
		{
			feature: 'Enhanced Cross-Origin Resource Sharing (CORS)',
			featureDescription: 'We implement CORS to enhance the same-origin policy, ensuring that only authorized domains can access our APIs. This helps prevent cross-site request forgery (CSRF) attacks, bolstering our app\'s overall security.',
			keyFeatures: [],
			workingOn: []
		}
	];

	return (
		<>
		<Flex direction={'column'} gap={10} alignItems={'start'} paddingStart={40}>
			<Stack direction={'column'} gap={1}>
				<Stack direction={'row'} alignItems={'center'}>
					<Text fontSize={'2xl'}> 
						<FaRegCalendar />
					</Text>
					<Text fontSize={'2xl'}> 
						July 26th, 2023
					</Text>
				</Stack>
				<Stack direction={'row'} alignItems={'center'}>
					<Heading justifyContent={'start'} alignItems={'start'} fontSize={'6xl'}>Release Notes</Heading>
					<Square borderRadius={10} size='50px' bg={'red.400'}>
						<Text as={'b'} color={'whiteAlpha.900'} fontSize={'xl'}>
							1.0
						</Text>
					</Square>
				</Stack>
				<Text>
					Description of the release notes
				</Text>
			</Stack>
			<Accordion allowMultiple width={'90%'}>
					<AccordionItem >
							<AccordionButton>
								<Flex as="span" flex='1' justifyItems={'left'} alignItems={'center'}>
									<Square borderRadius={10} size='30px' bg={'red.400'}>
										<Text as={'b'} color={'whiteAlpha.900'}>
											1
										</Text>
									</Square>
									<Heading paddingLeft={2} justifyContent={'start'} alignItems={'start'} size={'lg'}>Customer</Heading>
								</Flex>
								<AccordionIcon />
							</AccordionButton>
						<AccordionPanel pb={4}>
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem >
						<AccordionButton>
							<Flex as="span" flex='1' justifyItems={'left'} alignItems={'center'}>
								<Square borderRadius={10} size='30px' bg={'red.400'}>
									<Text as={'b'} color={'whiteAlpha.900'}>
										2
									</Text>
								</Square>
								<Heading paddingLeft={2} justifyContent={'start'} alignItems={'start'} size={'lg'}>Restaurant</Heading>
							</Flex>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							{
								releaseNotesRestaurant.map((feature, index) => {
									return (
										<ReleaseNote key={index} Features={feature}/>
									)
								})
							}
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem >
						<AccordionButton>
							<Flex as="span" flex='1' justifyItems={'left'} alignItems={'center'}>
								<Square borderRadius={10} size='30px' bg={'red.400'}>
									<Text as={'b'} color={'whiteAlpha.900'}>
										3
									</Text>
								</Square>
								<Heading paddingLeft={2} justifyContent={'start'} alignItems={'start'} size={'lg'}>Login Portal</Heading>
							</Flex>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
						{
							releaseNotesLoginPortal.map((feature, index) => {
								return (
									<ReleaseNote key={index} Features={feature}/>
								)
							})
						}
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem >
						<AccordionButton>
							<Flex as="span" flex='1' justifyItems={'left'} alignItems={'center'}>
								<Square borderRadius={10} size='30px' bg={'red.400'}>
									<Text as={'b'} color={'whiteAlpha.900'}>
										4
									</Text>
								</Square>
								<Heading paddingLeft={2} justifyContent={'start'} alignItems={'start'} size={'lg'}>Security</Heading>
							</Flex>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<Text paddingY={3}>TableTapp takes security seriously, implementing robust measures to safeguard your data and privacy.</Text>
							{
								releaseNotesSecurity.map((feature, index) => {
									return (
										<ReleaseNote key={index} Features={feature}/>
									)
								})
							}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
        </Flex>
		</>
	);
};

export default ResultSection;