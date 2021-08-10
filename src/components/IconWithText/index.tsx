import React from 'react';
import * as S from './styles';

type IconWithTextType = {
	text: string;
	icon: string;
	direction?: 'row' | 'row-reverse';
	alignSelf?: 'flex-start' | 'center' | 'flex-end';
	onPress(): void;
}

const IconWithText: React.FC<IconWithTextType> = ({ text, icon, direction = 'row', alignSelf = 'flex-start', onPress }) => {
	return (
		<S.Container 
			direction={ direction } 
			alignSelf={ alignSelf }
			onPress={ onPress }
		>
			<S.Icon name={ icon } />
			<S.Text direction={ direction }>
				{ text }
			</S.Text>
		</S.Container>
	);
}

export default IconWithText;
