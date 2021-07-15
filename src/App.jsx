import CharacterList from "./components/CharacterList";
import CharacterHighlight from "./components/CharacterHighlight";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/characters" exact>
          <CharactersTab />
        </Route>
        <Route path="/characters/:id">
          <CharacterHighlight />
        </Route>
        <Route>404</Route>
      </Switch>
    </Router>
  );
}

function CharactersTab() {
  return (
    <>
      <div className="flex flex-row text-white font-mono m-4 text-2xl">
        <Link to="/">Home</Link>
      </div>
      <CharacterList />
    </>
  );
}
function Home() {
  return (
    <>
      <div className="flex flex-row text-white font-mono m-4 text-2xl">
        <Link to="/characters">Characters</Link>
      </div>
    </>
  );
}
