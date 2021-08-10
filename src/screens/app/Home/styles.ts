import { ScrollView, View, Text, StatusBar } from 'react-native';
import styled from 'styled-components';

export const Container = styled(ScrollView)`
	flex: 1;
	background-color: ${props => props.theme.colors.background};
`;

export const ToolBar = styled(View)`
	margin-top: ${StatusBar.currentHeight};
	padding:  24px 24px 0 24px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Card = styled(View)`
	padding: 18px;
`;

export const CardInfo = styled(View)<{ padding?: string; }>`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const CreditCardText = styled(Text)`
	color: #fff;
	font-family: ${props => props.theme.fonts.default.bold};
	font-size: 16px;
`;

export const CreditCardSubText = styled(Text)`
	color: #ebebeb;
	font-family: ${props => props.theme.fonts.default.normal};
	font-size: 12px;
`;

export const CreditCardNumber = styled(Text)`
	color: #fff;
	font-family: ${props => props.theme.fonts.default.extraBold};
	font-size: 24px;
`;

export const NavigationRow = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Footer = styled(View)`
	align-items: center;
	padding-bottom: 24px;
`;

export const FooterText = styled(Text)`
	color: ${props => props.theme.colors.textLight};
	font-family: ${props => props.theme.fonts.default.normal};
	font-size: 12px;
`;
