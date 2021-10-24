import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import About from "./About.js"
import History from "./History"


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li className="menuButtons">
                            <Link to="/"><span className="menuText">Home</span></Link>
                        </li>
                        <li className="menuButtons">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="menuButtons">
                            <Link to="/history">History</Link>
                        </li>
                        <li className="menuButtons">
                            <Link to="/contacts">Contacts</Link>
                        </li>
                        <li className="menuButtons">
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/contacts">
                        <Contacts />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function Contacts() {
    return <h2>Contacts</h2>;
}
function Users() {
    return <h2>Users</h2>;
}
