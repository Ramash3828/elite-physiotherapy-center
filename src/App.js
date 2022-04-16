import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/footer" element={<Footer></Footer>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
