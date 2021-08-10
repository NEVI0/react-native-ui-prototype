import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components';

const Gradient: React.FC<{ radius?: number; }> = ({ radius, children }) => {

	const theme: any = useTheme();

	return (
		<LinearGradient
			style={{ borderRadius: radius || 0 }}
			colors={[theme.colors.primary, theme.colors.secondary]}
			start={{ x: 1, y: 0 }}
			end={{ x: 0, y: 1 }}
		>
			{ children }
		</LinearGradient>
	);

}

export default Gradient;
