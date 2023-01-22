import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import Feedback from "./pages/Feedback";
import { Divider } from "@mui/material";
import authContext from "./auth-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const logIn = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <authContext.Provider value={{ status: isLoggedIn, login: logIn }}>
            <BrowserRouter>
                <Navbar />
                <Divider
                    sx={{
                        width: "100%",
                        position: { xs: "static", md: "fixed" },
                    }}
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/upload" element={<Upload />} />
                </Routes>
            </BrowserRouter>
        </authContext.Provider>
    );
}

export default App;
