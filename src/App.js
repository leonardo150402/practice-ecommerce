import './App.css';
import {Home} from "./pages/Home";
import {Header} from "./shared/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Details} from "./pages/Details";
import {Success} from "./pages/notifications/Success";
import {Failed} from "./pages/notifications/Failed";

function App() {
    return (
        <div>
            <Header/>
            <Router>
                <div>
                    <Switch>
                        <Route path="/details" component={Details}/>
                        <Route path="/success" component={Success}/>
                        <Route path="/failed" component={Failed}/>
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
