export type ThemeType = {
	colors: {
		primary: string;
		secondary: string;
		background: string;
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

const createTheme = (isInDarkMode: boolean): ThemeType => {
	return {
		colors: {
			primary: isInDarkMode ? '#19c482' : '#0eea96',
			secondary: isInDarkMode ? '#187c54' : '#19c482',
			background: isInDarkMode ? '#090b0f' : '#ffffff',
			text: isInDarkMode ? '#e5e5e5' : '#1a1e26',
			textLight: isInDarkMode ? '#757575' : '#c4c4c4',
			btnText: '#ffffff'
		},
		input: {
			placeholder: isInDarkMode ? '#fafafa' : '#595959',
			background: isInDarkMode ? '#121419' : '#fafafa',
		},
		fonts: {
			default: {
				normal: 'nunito-regular',
				bold: 'nunito-bold',
				extraBold: 'nunito-extra-bold',
				italic: 'nunito-italic'
			},
			custom: {
				normal: 'lemon-regular',
				bold: undefined,
				italic: undefined
			}
		}
	}
}

export default createTheme;
