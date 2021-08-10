import { StatusBar, View, Text, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';

export const Container = styled(KeyboardAvoidingView)`
	flex: 1;
	justify-content: flex-start;
	background-color: ${props => props.theme.colors.background};
`;

export const Header = styled(View)`
	padding: 42px 24px;
	margin-top: ${StatusBar.currentHeight};
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

export const Link = styled(Text)<{ align: string; }>`
	color: ${props => props.theme.colors.text};
	font-size: 14px;
	font-family: ${props => props.theme.fonts.default.bold};
	text-decoration: underline;
	text-align: ${props => props.align};
`;

export const Or = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 24px 0;
`;

export const OrLine = styled(View)`
	width: 50px;
	height: 1px;
	background-color: ${props => props.theme.colors.textLight};
`;

export const OrText = styled(Text)`
	font-size: 12px;
	font-family: ${props => props.theme.fonts.default.bold};
	color: ${props => props.theme.colors.textLight};
	margin: 0 12px;
`;
