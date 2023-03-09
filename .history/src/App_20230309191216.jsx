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
        <Link to="/home" className={styles.login}><h1>Sig In</h1></Link>
        <Link to="/" className={styles.logaut}><h1>Log Aut</h1></Link> 
        {/* debera cerrar la seccion del usuario logeado,*/}
        <Link to="/home"><h1 className={styles.title}>Netflix</h1></Link> 
        {/* title debe aparecer solo cuando este logeado */}
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
