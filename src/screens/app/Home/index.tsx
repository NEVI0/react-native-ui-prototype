import React, { useState } from 'react';
import { View, Image, Linking } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Menu from '../../../components/Menu';
import Loading from '../../../components/Loading';
import Section from '../../../components/Section';
import Gradient from '../../../components/Gradient';
import ExpenseItem from '../../../components/ExpenseItem';
import IconWithText from '../../../components/IconWithText';
import NavigationButton from '../../../components/NavigationButton';

import useAppContext from '../../../contexts/AppContext';
import * as mockedData from '../../../utils/mocked';
import * as info from '../../../../app.json';
import * as S from './styles';

const Home: React.FC<StackScreenProps<any>> = () => {

	const { signout, changeTheme } = useAppContext();

	const [ showMenu, setShowMenu ] = useState<boolean>(false);
	const [ showAppLoading, setShowAppLoading ] = useState<boolean>(false);
	const [ showCreditCardInfo, setShowCreditCardInfo ] = useState<boolean>(false);

	const handleSignout = () => {
		setShowAppLoading(true);
		setTimeout(() => signout(), 2000);
	}

	const handleOpenRepository = async () => {
		const supported = await Linking.canOpenURL(mockedData.REPOSITORY_URL);
		if (supported) await Linking.openURL(mockedData.REPOSITORY_URL);
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
			onPress: handleOpenRepository
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

				<IconWithText 
					text={ showCreditCardInfo ? 'Show Info' : 'Hide Info' }
					icon={ showCreditCardInfo ? 'eye-off' : 'eye' }
					direction="row-reverse"
					alignSelf="center"
					onPress={ () => setShowCreditCardInfo(!showCreditCardInfo) }
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
							<S.CreditCardNumber>{ showCreditCardInfo ? '****' : '1029' }</S.CreditCardNumber>
							<S.CreditCardNumber>{ showCreditCardInfo ? '****' : '8372' }</S.CreditCardNumber>
							<S.CreditCardNumber>{ showCreditCardInfo ? '****' : '1955' }</S.CreditCardNumber>
							<S.CreditCardNumber>{ showCreditCardInfo ? '****' : '0936' }</S.CreditCardNumber>
						</S.CardInfo>

						<S.CardInfo>
							<View>
								<S.CreditCardSubText>Onwer</S.CreditCardSubText>
								<S.CreditCardText>{ showCreditCardInfo ? '********' : 'Névio C. Magagnin' }</S.CreditCardText>
							</View>

							<View style={{ alignItems: 'flex-end' }}>
								<S.CreditCardSubText>Expire Date</S.CreditCardSubText>
								<S.CreditCardText>{ showCreditCardInfo ? '**' : '11/28' }</S.CreditCardText>
							</View>
						</S.CardInfo>
					</S.Card>
				</Gradient>
			</Section>

			<Section title="Navigation">
				<S.NavigationRow style={{ marginBottom: 24 }}>
					{
						mockedData.MOCKED_NAV_ITEMS.map(item => (
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
						mockedData.MOCKED_NAV_ITEMS_2.map(item => (
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

			<Section title="Expenses" subtitle={ mockedData.MONTHS[new Date().getMonth()] + ' / ' + new Date().getFullYear() }>
				{
					mockedData.EXPENSES.map(expense => (
						<ExpenseItem key={ expense.id.toString() } expense={ expense } />
					))
				}
			</Section>

			<S.Footer>
				<S.FooterText>Hakai Softwares</S.FooterText>
				<S.FooterText>Version: { info.expo.version }</S.FooterText>
			</S.Footer>

			<Loading visible={ showAppLoading } />
			<Menu visible={ showMenu } options={ MOCKET_MENU_OPTIONS } onClose={ () => setShowMenu(false) } />
		</S.Container>
	);

}

export default Home;
