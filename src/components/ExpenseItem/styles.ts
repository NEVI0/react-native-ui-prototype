import { View, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
	flex-direction: row;
	align-items: flex-start;
	margin-bottom: 24px;
`;

export const ImageBox = styled(View)`
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.backgroundSecondary};
	border-radius: 20px;
	width: 70px;
	height: 70px;
	margin-right: 12px;
`;

export const Title = styled(Text)`
	color: ${props => props.theme.colors.text};
	font-family: ${props => props.theme.fonts.default.bold};
	font-size: 20px;
`;

export const SubTitle = styled(Text)`
	color: ${props => props.theme.colors.textLight};
	font-family: ${props => props.theme.fonts.default.normal};
	font-size: 12px;
`;

export const Value = styled(Text)`
	color: ${props => props.theme.colors.secondary};
	font-family: ${props => props.theme.fonts.default.bold};
	font-size: 20px;
`;
