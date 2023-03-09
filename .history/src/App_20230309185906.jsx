import MovieDetail from "./pages/MovieDetail/MovieDetail";
import styles from "./App.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <header className={styles.conten} >
        <Link to="/home" className={styles.login}><h1>Log in</h1></Link>
        <Link to="/" className={styles.logou}><h1>Logaut</h1></Link>
        <Link to="/home"><h1 className={styles.title}>Netflix</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/movies/:movieId" element={<MovieDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
