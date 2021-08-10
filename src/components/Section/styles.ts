import { View, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
	padding: 24px;
`;

export const Title = styled(Text)`
	font-size: 22px;
	font-family: ${props => props.theme.fonts.default.extraBold};
	color: ${props => props.theme.colors.text};
`;

export const SubTitle = styled(Text)`
	font-size: 16px;
	font-family: ${props => props.theme.fonts.default.bold};
	color: ${props => props.theme.colors.textLight};
`;
