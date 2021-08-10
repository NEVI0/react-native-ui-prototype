import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';

export const Container = styled(View)`
	flex: 1;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.25);
`;

export const Box = styled(View)`
	background-color: ${props => props.theme.colors.background};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding: 24px;
`;

export const Header = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled(Text)`
	font-size: 22px;
	font-family: ${props => props.theme.fonts.default.extraBold};
	color: ${props => props.theme.colors.text};
`;

export const CloseButton = styled(TouchableOpacity)<{ isInDarkMode: boolean }>`
	width: 35px;
	height: 35px;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	background-color: ${props => props.isInDarkMode ? '#202226' : '#ebebeb'};
`;

export const CloseButtonIcon = styled(Feather)`
	color: ${props => props.theme.colors.text};
	font-size: 24px;
`;

export const Content = styled(View)`
	margin-top: 12px;
`;

export const MenuItem = styled(TouchableOpacity)`
	padding: 12px 0;
	flex-direction: row;
	align-items: center;
`;

export const MenuItemIcon = styled(Feather)`
	color: ${props => props.theme.colors.primary};
	font-size: 26px;
`;

export const MenuItemText = styled(Text)`
	color: ${props => props.theme.colors.text};
	font-family: ${props => props.theme.fonts.default.bold};
	font-size: 16px;
	margin-left: 16px;
`;
