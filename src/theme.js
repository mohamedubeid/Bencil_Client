import { createTheme, alpha } from '@mui/material';
export const theme = createTheme({
    shadows: Array(25).fill('none'),
    typography: {
        fontFamily: ['Montserrat', 'Roboto'].join(','),
    },
    palette: {
        type: 'light',
        primary: {
            main: '#0A66C2',
            light: '#0A66C2dd',
        },
        secondary: {
            main: '#D9D9D9',
            dark: '#878484',
            light: alpha('#d9d9d9', 0.6),
        },
        background: {
            default: '#E3E3E4',
            light: 'rgba(227, 227, 228, 0.5)',
            main: '#ffffff',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        textTransform: 'none',
                        borderRadius: '5px',
                        padding: '13px 38px',
                        fontWeight: 700,
                        fontSize: '15px',
                        lineHeight: '18px',
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        textTransform: 'none',
                        borderRadius: '5px',
                        fontWeight: 700,
                        fontSize: '15px',
                        lineHeight: '18px',
                    },
                },
            ],
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
});
