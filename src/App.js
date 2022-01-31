import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import Main from "./page/Main";
import Menu from "./page/Menu";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Main />} path="/main" />
                <Route element={<Menu />} path="/menu" />
            </Routes>
        </Router>
    );
};

export default App;
