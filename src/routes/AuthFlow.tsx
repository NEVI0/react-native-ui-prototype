import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';

const Stack = createStackNavigator();

const AuthFlow: React.FC = () => {
	return (
		<Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Signin" component={ Signin } />
			<Stack.Screen name="Signup" component={ Signup } />
		</Stack.Navigator>
	);
}

export default AuthFlow;
