import { Routes, BrowserRouter, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import Main from "./Main.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    render={({ location }) => {
                        return (
                            <TransitionGroup className="transition-group">
                                <CSSTransition
                                    key={location.pathname}
                                    timeout={300}
                                    className="transition"
                                >
                                    <Routes>
                                        <Route
                                            element={<Main />}
                                            path="/main"
                                        />
                                    </Routes>
                                </CSSTransition>
                            </TransitionGroup>
                        );
                    }}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
