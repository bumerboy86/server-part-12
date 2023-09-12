import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Login from "./container/Login/Login.tsx";
import { Home } from "./container/Home/Home.tsx";
import { About } from "./container/About/About.tsx";
import { Cabinet } from "./container/Cabinet/Cabinet.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cabinet' element={<Cabinet />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
