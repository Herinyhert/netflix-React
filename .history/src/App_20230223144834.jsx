import MovieDetail from "./pages/MovieDetail/MovieDetail";
import styles from "./App.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPege";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"><h1 className={styles.title}>Netflix</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/movies/:movieId" element={<MovieDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
