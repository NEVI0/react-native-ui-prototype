import { TouchableOpacity, Text as RNText } from 'react-native';
import styled from 'styled-components';

export const Container = styled(TouchableOpacity)`
	border-radius: 10px;
	width: 100%;
`;

export const Text = styled(RNText)`
	padding: 12px 0;
	font-size: 16px;
	font-family: ${props => props.theme.fonts.default.bold};
	color: ${props => props.theme.colors.btnText};
	text-align: center;
`;
