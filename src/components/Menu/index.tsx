import React from 'react';
import { Modal, TouchableHighlight, View } from 'react-native';

import useAppContext from '../../contexts/AppContext';
import * as S from './styles';

type Option = {
	text: string;
	icon: string | any;
	onPress(): void;
}

type MenuType = {
	visible: boolean;
	options: Array<Option>;
	onClose(): void;
}

const Menu: React.FC<MenuType> = ({ visible, options, onClose }) => {
	
	const { isInDarkMode } = useAppContext();

	const handlePressItem = (index: number) => {
		onClose();
		options[index].onPress();
	}

	return (
		<Modal 
			visible={ visible }
			transparent={ true }
			statusBarTranslucent={ true }
			animationType="slide"
			onRequestClose={ onClose }
		>
			<S.Container>
				<TouchableHighlight
					style={{ flex: 1 }}
					underlayColor="transparent"
					onPress={ onClose }
				>
					<View />
				</TouchableHighlight>

				<S.Box>
					<S.Header>
						<S.Title>Menu</S.Title>
						
						<S.CloseButton onPress={ onClose } isInDarkMode={ isInDarkMode }>
							<S.CloseButtonIcon name="x" />
						</S.CloseButton>
					</S.Header>

					<S.Content>
						{
							options.map((option, index) => (
								<S.MenuItem 
									key={ index.toString() } 
									onPress={ () => handlePressItem(index) }
								>
									<S.MenuItemIcon name={ option.icon } />
									<S.MenuItemText>
										{ option.text }
									</S.MenuItemText>
								</S.MenuItem>
							))
						}
					</S.Content>
				</S.Box>
			</S.Container>
		</Modal>
	);

}

export default Menu;
