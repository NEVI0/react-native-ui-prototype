import { View, TouchableOpacity, Text as RNText } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';

export const Container = styled(TouchableOpacity)`
	align-items: center;
`;

export const Box = styled(View)`
	padding: 18px;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	margin-bottom: 4px;
	background-color: ${props => props.theme.colors.backgroundSecondary};
`;

export const Icon = styled(Feather)`
	color: ${props => props.theme.colors.text};
	font-size: 26px;
`;

export const Text = styled(RNText)`
	color: ${props => props.theme.colors.text};
	font-family: ${props => props.theme.fonts.default.bold};
	font-size: 14px;
`;
