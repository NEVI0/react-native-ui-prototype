import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import createTheme from '../styles/theme';
import { AppContextType, ThemeType } from '../utils/types';

const AppContext: React.Context<AppContextType> = createContext({} as AppContextType);

export const AppProvider: React.FC = ({ children }) => {
	
	const [ theme, setTheme ] = useState<ThemeType>(createTheme(false));

	const [ isSigned, setIsSigned ] = useState<boolean>(false);
	const [ isInDarkMode, setIsInDarkMode ] = useState<boolean>(false);

	const [ globalError, setGlobalError ] = useState<string>('');

	useEffect(() => {
		const initContext = async () => {
			try {
				
				const isSignedStorage = await AsyncStorage.getItem('@APP:signed');
				const isDarkMode = await AsyncStorage.getItem('@APP:darkmode');

				setIsSigned(isSignedStorage ? true : false);
				setTheme(createTheme(isDarkMode === 'true'));
				setIsInDarkMode(isDarkMode === 'true');

			} catch (err) {
				console.log('Start AppContext.tsx error: ', err);
			}
		}

		initContext();
	}, []);

	const signin = async () => {
		try {
			await AsyncStorage.setItem('@APP:signed', 'true');
			setIsSigned(true);
		} catch (err) {
			createGlobalError(err);
		}
	}

	const signout = async () => {
		try {
			await AsyncStorage.removeItem('@APP:signed');
			setIsSigned(false);
		} catch (err) {
			createGlobalError(err);
		}
	}

	const changeTheme = async () => {
		const isDarkMode = await AsyncStorage.getItem('@APP:darkmode');

		if (isDarkMode === 'true') {
			await AsyncStorage.setItem('@APP:darkmode', 'false');
			setIsInDarkMode(false);
			setTheme(createTheme(false));
		} else {
			await AsyncStorage.setItem('@APP:darkmode', 'true');
			setIsInDarkMode(true);
			setTheme(createTheme(true));
		}
	}

	const createGlobalError = (err: any) => {
		try {
			if (typeof err == 'string') {
				setGlobalError(err);
			} else {
				if (err.response.data) {
					setGlobalError(err.response.data.message || err.response.data.type);
				} else {
					setGlobalError(err.error || err.err);
				}
			}
		} catch (err) {
			setGlobalError('Something went wrong in an app proccess! Try again later...');
		}
	}

	const clearGlobalError = () => setGlobalError('');

	return (
		<AppContext.Provider
			value={{
				theme,
				isSigned,
				isInDarkMode,
				globalError,

				signin,
				signout,
				changeTheme,

				createGlobalError,
				clearGlobalError
			}}
		>
			{ children }
		</AppContext.Provider>
	);

}

const useAppContext = () => useContext(AppContext);
export default useAppContext;
