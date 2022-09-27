import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import { Divider } from '@mui/material';
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
            <Profile />
        </authContext.Provider>
    );
}

export default App;
