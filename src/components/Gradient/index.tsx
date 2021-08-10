import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import useAppContext from '../../contexts/AppContext';

const Gradient: React.FC<{ radius?: number; }> = ({ radius, children }) => {

	const { theme } = useAppContext();

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
