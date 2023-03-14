import MovieDetail from "./pages/MovieDetail/MovieDetail";
import styles from "./App.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/landing/Landing";
import SigIn from "./components/Sig in/SigIn";
import LogAut from "./components/Log Aut/LogAut";
import { Profile } from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      <header className={styles.conten}>
        {isAuthenticated ? (
          <>
            <Profile />
            <Link to="/home">
              <h1 className={styles.title}>Netflix</h1>
            </Link>
            <LogAut />
          </>
        ) : (
          <SigIn />
        )}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/movies/:movieId" element={<MovieDetail />} />
          <Route exact path="/user/" element={<SigIn />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
