import React from 'react';
import { View } from 'react-native';

import { formatValueToCurrency, getCurrentDate } from '../../utils/functions';
import { Expense } from '../../utils/types';
import * as S from './styles';

const ExpenseItem: React.FC<{ expense: Expense }> = ({ expense }) => {
	return (
		<S.Container>
			<S.ImageBox />

			<View style={{ flex: 1 }}>
				<S.Title>{ expense.name }</S.Title>
				<S.SubTitle>{ getCurrentDate() }</S.SubTitle>
			</View>
		
			<S.Value>{ formatValueToCurrency(expense.value) }</S.Value>
		</S.Container>
	);
}

export default ExpenseItem;
