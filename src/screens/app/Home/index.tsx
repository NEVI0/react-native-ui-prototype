import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Menu from '../../../components/Menu';
import Loading from '../../../components/Loading';
import Section from '../../../components/Section';
import Gradient from '../../../components/Gradient';
import IconWithText from '../../../components/IconWithText';
import NavigationButton from '../../../components/NavigationButton';

import useAppContext from '../../../contexts/AppContext';
import * as S from './styles';

const MOCKED_NAV_ITEMS = [
	{ id: 1, text: 'Account', icon: 'user' },
	{ id: 2, text: 'Balance', icon: 'activity' },
	{ id: 3, text: 'History', icon: 'archive' }
];

const MOCKED_NAV_ITEMS_2 = [
	{ id: 1, text: 'Calendar', icon: 'calendar' },
	{ id: 2, text: 'About', icon: 'info' },
	{ id: 3, text: 'Settings', icon: 'settings' }
];

const Home: React.FC<StackScreenProps<any>> = () => {

	const { signout, changeTheme } = useAppContext();

	const [ showMenu, setShowMenu ] = useState<boolean>(false);
	const [ showAppLoading, setShowAppLoading ] = useState<boolean>(false);

	const handleSignout = () => {
		setShowAppLoading(true);
		setTimeout(() => signout(), 2000);
	}

	const MOCKET_MENU_OPTIONS = [
		{
			text: 'Change Theme',
			icon: 'feather',
			onPress: changeTheme
		},
		{
			text: 'Repository',
			icon: 'github',
			onPress: changeTheme
		},
		{
			text: 'Sign Out',
			icon: 'arrow-left',
			onPress: handleSignout
		}
	];

	return (
		<S.Container>
			<S.ToolBar>
				<IconWithText 
					text="Menu"
					icon="align-left"
					onPress={ () => setShowMenu(true) }
				/>
			</S.ToolBar>

			<Section title="Welcome Névio" subtitle="Home">
				<Gradient radius={ 20 }>
					<S.Card>
						<S.CardInfo>
							<S.CreditCardText>Credit Card</S.CreditCardText>
							<Image source={ require('../../../../assets/images/mastercard-logo.png') } />
						</S.CardInfo>

						<S.CardInfo style={{ paddingVertical: 12 }}>
							<S.CreditCardNumber>1029</S.CreditCardNumber>
							<S.CreditCardNumber>8372</S.CreditCardNumber>
							<S.CreditCardNumber>1955</S.CreditCardNumber>
							<S.CreditCardNumber>0936</S.CreditCardNumber>
						</S.CardInfo>

						<S.CardInfo>
							<View>
								<S.CreditCardSubText>Onwer</S.CreditCardSubText>
								<S.CreditCardText>Névio C. Magagnin</S.CreditCardText>
							</View>

							<View style={{ alignItems: 'flex-end' }}>
								<S.CreditCardSubText>Expire Date</S.CreditCardSubText>
								<S.CreditCardText>11/28</S.CreditCardText>
							</View>
						</S.CardInfo>
					</S.Card>
				</Gradient>
			</Section>

			<Section title="Navigation">
				<S.NavigationRow style={{ marginBottom: 24 }}>
					{
						MOCKED_NAV_ITEMS.map(item => (
							<NavigationButton
								key={ item.id.toString() }
								text={ item.text }
								icon={ item.icon }
								onPress={ () => console.log('Navigation!') }
							/>
						))
					}
				</S.NavigationRow>

				<S.NavigationRow>
					{
						MOCKED_NAV_ITEMS_2.map(item => (
							<NavigationButton
								key={ item.id.toString() }
								text={ item.text }
								icon={ item.icon }
								onPress={ () => console.log('Navigation!') }
							/>
						))
					}
				</S.NavigationRow>
			</Section>

			<Loading visible={ showAppLoading } />
			<Menu visible={ showMenu } options={ MOCKET_MENU_OPTIONS } onClose={ () => setShowMenu(false) } />
		</S.Container>
	);

}

export default Home;
