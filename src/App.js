import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import CheckOut from "./Components/CheckOut/CheckOut";
import RequireAuth from "./RequireAuth";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route
                    path="/checkout/:id"
                    element={
                        <RequireAuth>
                            <CheckOut></CheckOut>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
