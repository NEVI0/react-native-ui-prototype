import React, { useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import IconWithText from '../../../components/IconWithText';

import useAppContext from '../../../contexts/AppContext';
import { useFormik } from 'formik';
import * as S from './styles';

const Signup: React.FC<StackScreenProps<any>> = ({ navigation }) => {

	const { createGlobalError } = useAppContext();

	const form = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confPassword: ''
		},
		onSubmit: () => {
			try {
				setShowAppLoading(true);
				setTimeout(() => setShowAppLoading(false), 2500);
			} catch (err) {
				createGlobalError(err);
			}
		}
	});

	const [ showAppLoading, setShowAppLoading ] = useState<boolean>(false);

	return (
		<S.Container
			behavior="height"
			enabled={ false }
			keyboardVerticalOffset={ 20 }
		>
			<S.ToolBar>
				<IconWithText
					text="Back"
					icon="arrow-left"
					onPress={ () => navigation.navigate('Signin') }
				/>
			</S.ToolBar>

			<S.Header>
				<S.Title>Create Account</S.Title>
				<S.SubTitle>Complete the entire form</S.SubTitle>
			</S.Header>

			<S.Section>
				<Input
					icon="user"
					placeholder="Name"
					value={ form.values.name }
					onChangeText={ name => form.setValues({ ...form.values, name }) }
				/>

				<Input
					icon="mail"
					placeholder="E-mail"
					value={ form.values.email }
					onChangeText={ email => form.setValues({ ...form.values, email }) }
					autoCapitalize="none"
				/>

				<Input
					icon="lock"
					placeholder="Password"
					secureTextEntry={ true }
					value={ form.values.password }
					onChangeText={ password => form.setValues({ ...form.values, password }) }
				/>

				<Input
					icon="lock"
					placeholder="Confirm Password"
					secureTextEntry={ true }
					value={ form.values.confPassword }
					onChangeText={ confPassword => form.setValues({ ...form.values, confPassword }) }
					onEndEditing={ () => form.handleSubmit() }
				/>
			</S.Section>

			<View style={{ flex: 1 }} />

			<S.Section>
				<Button text="Sign up" onPress={ () => form.submitForm() } />
			</S.Section>
		
			<Loading visible={ showAppLoading } />
		</S.Container>
	);

}

export default Signup;
