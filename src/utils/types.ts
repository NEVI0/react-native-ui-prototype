export type ThemeType = {
	colors: {
		primary: string;
		secondary: string;
		background: string;
		backgroundSecondary: string;
		text: string;
		textLight: string;
		btnText: string;
	},
	input: {
		placeholder: string;
		background: string;
	},
	fonts: {
		default: {
			normal: string;
			bold?: string;
			extraBold?: string;
			italic?: string;
		},
		custom: {
			normal: string;
			bold?: string;
			italic?: string;
		}
	}
}

export type AppContextType = {
	isSigned: boolean;
	isInDarkMode: boolean;
	globalError: string;
	theme: ThemeType;

	signin(): Promise<void>;
	signout(): Promise<void>;
	changeTheme(): void;

	createGlobalError(err: any): void;
	clearGlobalError(): void;
}

export type Expense = {
	id: number;
	name: string;
	value: number;
	image: string;
}
