import React from 'react';
import * as S from './styles';

type NavigationButtonType = {
	text: string;
	icon: string | any;
	onPress(): void;
}

const NavigationButton: React.FC<NavigationButtonType> = ({ text, icon, onPress }) => {
	return (
		<S.Container onPress={ onPress }>
			<S.Box>
				<S.Icon name={ icon } />
			</S.Box>

			<S.Text>
				{ text }
			</S.Text>
		</S.Container>
	);
}

export default NavigationButton;
