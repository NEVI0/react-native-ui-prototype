import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';

import useAppContext from '../../../contexts/AppContext';
import { useFormik } from 'formik';
import * as S from './styles';

const Signin: React.FC<StackScreenProps<any>> = ({ navigation }) => {

	const { signin, createGlobalError } = useAppContext();

	const form = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: () => {
			try {
				setShowAppLoading(true);
				setTimeout(() => signin(), 2500);
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
			<S.Header>
				<S.Title>Welcome Back</S.Title>
				<S.SubTitle>Sign in to continue</S.SubTitle>
			</S.Header>

			<S.Section>
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
					onEndEditing={ () => form.handleSubmit() }
				/>

				<TouchableOpacity>
					<S.Link align="right">Forgot Password</S.Link>
				</TouchableOpacity>
			</S.Section>

			<View style={{ flex: 1 }} />

			<S.Section>
				<Button text="Sign In" onPress={ () => form.submitForm() } />

				<S.Or>
					<S.OrLine />
					<S.OrText>OR</S.OrText>
					<S.OrLine />
				</S.Or>

				<TouchableOpacity onPress={ () => navigation.navigate('Signup') }>
					<S.Link align="center">Register Here</S.Link>
				</TouchableOpacity>
			</S.Section>
		
			<Loading visible={ showAppLoading } />
		</S.Container>
	);

}

export default Signin;
