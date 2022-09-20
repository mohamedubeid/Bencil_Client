import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Divider, Container } from '@mui/material';
import authContext from './auth-context';

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const logIn = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <authContext.Provider value={{ status: isLoggedIn, login: logIn }}>
            <Navbar />
            <Divider
                sx={{
                    width: '100%',
                    position: { xs: 'static', md: 'fixed' },
                }}
            />
            <Container
                disableGutters
                sx={{
                    maxWidth: {
                        xs: '95%',
                        sm: '540px',
                        md: '720px',
                        lg: '960px',
                        xl: '1140px',
                    },
                    m: 'auto',
                    p: 0,
                }}
            >
                <HomePage />
            </Container>
        </authContext.Provider>
    );
}

export default App;
