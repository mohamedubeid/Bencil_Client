export const OuterContainer = {
    overflowY: 'auto',
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

export const InnerContainer = {
    width: {
        xs: '95%',
        sm: '540px',
        md: '512px',
        lg: '682px',
        xl: '810px',
    },
    margin: { xs: 'auto', md: '0' },
};
