import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import Main from "./page/Main";
import Menu from "./page/Menu";

const App = () => {
    return (
        <RecoilRoot>
            <Routes>
                <Route element={<Main />} path="/main" />
                <Route element={<Menu />} path="/menu" />
            </Routes>
        </RecoilRoot>
    );
};

export default App;
