import React from 'react';
import { View, Image } from 'react-native';

import { formatValueToCurrency, getCurrentDate } from '../../utils/functions';
import { Expense } from '../../utils/types';
import * as S from './styles';

const ExpenseItem: React.FC<{ expense: Expense }> = ({ expense }) => {
	return (
		<S.Container>
			{
				expense.image !== '' ? (
					<S.ImageBox>
						<Image
							source={{ uri: expense.image }}
							style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 20 }}
						/>
					</S.ImageBox>
				) : (
					<S.ImageBox />
				)
			}

			<View style={{ flex: 1 }}>
				<S.Title>{ expense.name }</S.Title>
				<S.SubTitle>{ getCurrentDate() }</S.SubTitle>
			</View>
		
			<S.Value>{ formatValueToCurrency(expense.value) }</S.Value>
		</S.Container>
	);
}

export default ExpenseItem;
