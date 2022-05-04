import logo from './logo.svg';
import './App.scss';
import NavBar from "./component/NavBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './page/Home'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Footer from "./component/Footer";
import Tos from "./page/TOS";
import Contact from "./page/Contact Us";
// import {Contacts} from "@mui/icons-material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2ad1b8",
        },
        grey :{
            main: "#424242",
            light: "#616161",
            dark: "#212121",
            contrastText: '#fff'
        }
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/TOS" element={<Tos/>}/>
                        <Route path="/contact" element={<Contact/>}/>

                    </Routes>
                    <Footer/>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
