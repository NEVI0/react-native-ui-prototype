import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import useAppContext from '../../contexts/AppContext';
import * as S from './styles';

const Loading: React.FC<{ visible: boolean; }> = ({ visible }) => {

	const { theme } = useAppContext();

	return (
		<Modal 
			visible={ visible }
			transparent={ true }
			statusBarTranslucent={ true }
			animationType="fade"
		>
			<S.Container>
				<S.Box>
					<ActivityIndicator size="large" color={ theme.colors.primary } />
				</S.Box>
			</S.Container>
		</Modal>
	);

}

export default Loading;
