import React from 'react';
import { View, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Section from '../../../components/Section';
import IconWithText from '../../../components/IconWithText';

import * as S from './styles';

const OPTIONS = [
	{ text: 'Go Premium' },
	{ text: 'Change Photo' },
	{ text: 'Update Account' },
	{ text: 'Verify Account' },
	{ text: 'Sign Out' }
];

const Account: React.FC<StackScreenProps<any>> = ({ navigation }) => {

	return (
		<S.Container>
			<S.ToolBar>
				<IconWithText
					text="Back"
					icon="arrow-left"
					onPress={ () => navigation.navigate('Home') }
				/>
			</S.ToolBar>

			<S.Header>
				<S.UserImageWrapper>
					<S.UserImage>
						<Image 
							source={ require('../../../../assets/images/user.jpg') } 
							style={{ width: '100%', height: '100%', borderRadius: 18.5 }}
						/>
					</S.UserImage>
				</S.UserImageWrapper>
				
				<View>
					<S.UserName>Névio Magagnin</S.UserName>
					<S.UserEmail>nevio.dev@gmail.com</S.UserEmail>
				</View>
			</S.Header>
		
			<Section title="Account Options" subtitle="Main">
				{
					OPTIONS.map((option, index) => (
						<S.OptionItem key={ index.toString() }>
							<S.OptionText>{ option.text }</S.OptionText>
							<S.OptionIcon name="arrow-right" />
						</S.OptionItem>
					))
				}
			</Section>
		</S.Container>
	);

}

export default Account;
