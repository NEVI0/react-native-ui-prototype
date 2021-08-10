import { MONTHS } from './mocked';

export const formatValueToCurrency = (value: number): string => {
	return `$ ${value.toFixed(2)}`;
}

export const getCurrentDate = (): string => {

	const date = new Date();

	let day: any = date.getDate();
	let month: any = MONTHS[date.getMonth()];
	let year: any = date.getFullYear();

	if (day <= 9) day = '0' + day;

	return `${day} ${month} ${year}`;

}
