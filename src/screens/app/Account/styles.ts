import { ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
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

export const Header = styled(View)`
	padding: 24px;
	flex-direction: row;
	align-items: center;
`;

export const UserImageWrapper = styled(View)`
	width: 100px;
	height: 100px;
	border-radius: 20px;
	background-color: ${props => props.theme.colors.backgroundSecondary};
	align-items: center;
	justify-content: center;
	margin-right: 24px;
`;

export const UserImage = styled(View)`
	width: 95px;
	height: 95px;
	border-radius: 18.5px;
	background-color: ${props => props.theme.colors.background};
	align-items: center;
	justify-content: center;
`;

export const UserName = styled(Text)`
	font-size: 22px;
	font-family: ${props => props.theme.fonts.default.extraBold};
	color: ${props => props.theme.colors.text};
`;

export const UserEmail = styled(Text)`
	font-size: 16px;
	font-family: ${props => props.theme.fonts.default.bold};
	color: ${props => props.theme.colors.textLight};
`;

export const OptionItem = styled(TouchableOpacity)`
	border-radius: 10px;
	margin-bottom: 12px;
	padding: 12px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${props => props.theme.colors.backgroundSecondary};
`;

export const OptionText = styled(Text)`
	font-size: 16px;
	font-family: ${props => props.theme.fonts.default.bold};
	color: ${props => props.theme.colors.text};
`;

export const OptionIcon = styled(Feather)`
	font-size: 20px;
	color: ${props => props.theme.colors.text};
`;
