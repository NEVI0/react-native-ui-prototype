import React from 'react';
import { TextInputProps } from 'react-native';

import useAppContext from '../../contexts/AppContext';
import * as S from './styles';

type InputType = {
	icon: string | any;
}

const Input: React.FC<InputType & TextInputProps> = ({ icon, ...rest }) => {

	const { theme } = useAppContext();

	return (
		<S.Container>
			<S.InputBox>
				<S.Icon name={ icon } />
				<S.Input placeholderTextColor={ theme.input.placeholder } { ...rest } />
			</S.InputBox>
		</S.Container>
	);

}

export default Input;
