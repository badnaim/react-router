import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./components/subcomponent/About";
import { Routes, Route } from "react-router-dom";
import { MENUS, users } from "./util/data";
import { useState } from "react";
import "./style/app.css";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  function LoginCheck(userName, password) {
    users.map((user) => {
      if (user.userName === userName && user.password === password) {
        setIsLoggedIn(true);
      } else {
        console.error("error");
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route
          path={MENUS[2].url}
          element={
            IsLoggedIn ? (
              <Home setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Login LoginCheck={LoginCheck} />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
