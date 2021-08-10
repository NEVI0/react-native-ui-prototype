import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

type SectionType = {
	title: string;
	subtitle?: string;
}

const Section: React.FC<SectionType> = ({ title, subtitle = '', children }) => {
	return (
		<S.Container>
			<View style={{ marginBottom: 24 }}>
				<S.Title>
					{ title }
				</S.Title>

				{
					subtitle !== '' && (
						<S.SubTitle>
							{ subtitle }
						</S.SubTitle>
					)
				}
			</View>

			<View>
				{ children }
			</View>
		</S.Container>
	);
}

export default Section;
