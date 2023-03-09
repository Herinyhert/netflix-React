import MovieDetail from "./pages/MovieDetail/MovieDetail";
import styles from "./App.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"><h1 className={styles.title}>Netflix</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/movies/:movieId" element={<MovieDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
