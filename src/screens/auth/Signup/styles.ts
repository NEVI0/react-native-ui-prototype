import { StatusBar, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Container = styled(KeyboardAvoidingView)`
	flex: 1;
	justify-content: flex-start;
	background-color: ${props => props.theme.colors.background};
`;

export const NavigationBar = styled(View)`
	padding: 42px 24px;
	margin-top: ${StatusBar.currentHeight};
`;

export const Header = styled(View)`
	padding:  0 24px 12px 24px;
`;

export const Title = styled(Text)`
	font-size: 32px;
	font-family: ${props => props.theme.fonts.default.extraBold};
	color: ${props => props.theme.colors.text};
	text-align: center;
`;

export const SubTitle = styled(Text)`
	font-size: 18px;
	font-family: ${props => props.theme.fonts.default.bold};
	color: ${props => props.theme.colors.textLight};
	text-align: center;
`;

export const Section = styled(View)`
	padding: 42px 24px;
`;
