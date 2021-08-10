import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';

export const Container = styled(View)`
	margin-bottom: 18px;
`;

export const InputBox = styled(View)`
	flex-direction: row;
	align-items: center;
	background-color: ${props => props.theme.input.background};
	border-radius: 10px;
`;

export const Icon = styled(Feather)`
	color: ${props => props.theme.colors.primary};
	font-size: 26px;
	padding: 12px;
`;

export const Input = styled(TextInput)`
	flex: 1;
	padding: 12px;
	font-family: ${props => props.theme.fonts.default.bold};
	font-size: 16px;
	color: ${props => props.theme.colors.text};
`;
