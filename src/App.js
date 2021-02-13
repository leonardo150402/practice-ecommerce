import './App.css';
import {Home} from "./pages/Home";
import {Header} from "./shared/Header";
import {Footer} from "./shared/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Details} from "./pages/Details";

function App() {
    return (
        <>
            <Header/>
            <Router>
                <div>
                    <Switch>
                        <Route path="/details" component={Details}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </Router>
            {/*<HomeScreen/>*/}
        </>
    )
}

export default App;
