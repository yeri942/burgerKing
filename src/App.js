import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import Main from "./page/Main";
import Menu from "./page/Menu";

const App = () => {
    return (
        <RecoilRoot>
            <Routes>
                <Route element={<Menu />} path="/menu" />
                <Route element={<Main />} path="/" />
            </Routes>
        </RecoilRoot>
    );
};

export default App;
