import { TouchableOpacity, Text as RNText } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';

export const Container = styled(TouchableOpacity)<{ direction: string; alignSelf: string; }>`
	flex-direction: ${props => props.direction};
	align-self: ${props => props.alignSelf};
	align-items: center;
`;

export const Icon = styled(Feather)`
	color: ${props => props.theme.colors.primary};
	font-size: 26px;
`;

export const Text = styled(RNText)<{ direction: string; }>`
	font-size: 14px;
	font-family: ${props => props.theme.fonts.default.normal};
	color: ${props => props.theme.colors.textLight};
	margin-left: ${props => props.direction === 'row' ? '12px' : 0};
	margin-right: ${props => props.direction === 'row-reverse' ? '12px' : 0};
`;
