export const MainStyled = {
    overflowY: 'scroll',
    height: '90vh',
    backgroundColor: 'white',
    '&::-webkit-scrollbar': {
        width: '8px',
        height: '6px',
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: 'rgba(0,0,0,0.1)',
    },
    '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        background: 'rgba(0,0,0,0.2)',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(0,0,0,0.4)',
    },
};
