import './App.css';
import {Home} from "./pages/Home";
import {Header} from "./shared/Header";
import {Footer} from "./shared/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {Details} from "./pages/Details";

function App() {
    return (
        <div>
            <Header/>
            <Router>
                <div>
                    <Switch>
                        <Route path="/details" component={Details}/>
                        <Route path="/" component={Home}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default App;
