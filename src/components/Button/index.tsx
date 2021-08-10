import React from 'react';
import Gradient from '../Gradient';

import * as S from './styles';

const Button: React.FC<{ text: string; onPress(): void; }> = ({ text, onPress }) => {
	return (
		<Gradient radius={ 10 }>
			<S.Container onPress={ onPress }>
				<S.Text>
					{ text }
				</S.Text>
			</S.Container>
		</Gradient>
	);
}

export default Button;
