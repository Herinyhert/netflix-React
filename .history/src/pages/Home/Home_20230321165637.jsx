import Search from "../../components/Search/Search";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid"
import { useAuth0 } from "@auth0/auth0-react";

function Home(){
    const { } = useAuth0
    return <div>
        <Search />
        <MoviesGrid />
    </div>
}

export default Home;