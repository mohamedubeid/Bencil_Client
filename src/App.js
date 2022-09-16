import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Divider, Container } from '@mui/material';
function App() {
    return (
        <>
            <Container
                disableGutters
                sx={{
                    maxWidth: {
                        xs: '100%',
                        sm: '540px',
                        md: '720px',
                        lg: '960px',
                        xl: '1140px',
                    },
                    m: 'auto',
                    p: 0,
                }}
            >
                <Navbar />
            </Container>
            <Divider />
            <Container
                disableGutters
                sx={{
                    maxWidth: {
                        xs: '100%',
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
        </>
    );
}

export default App;
