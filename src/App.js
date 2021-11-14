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
import Users from "./Users"


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li className="menuButtons">
                            <Link to="/"><span className="menuText">HOME</span></Link>
                        </li>
                        <li className="menuButtons">
                            <Link to="/about">CATEGORIES</Link>
                        </li>
                        <li className="menuButtons">
                            <Link to="/history">History</Link>
                        </li>
                        <li className="menuButtons">
                            <Link to="/contacts">Charts</Link>
                        </li>
                        <li className="menuButtons addButton">
                            <Link to="/users">ADD</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/history">
                        <History/>
                    </Route>
                    <Route path="/contacts">
                        <Contacts/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <table>
                <tbody>
                <tr>
                    <th style={{width: 1 + 'rem'}}>ID</th>
                    <th>Item</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Manufacturer</th>
                    <th>Notes</th>
                </tr>
                {/*{items.map(item => {*/}
                {/*        return (*/}
                {/*            <tr>*/}
                {/*                <td>{item.id}</td>*/}
                {/*                <td>{item.item}</td>*/}
                {/*                <td>{item.date}</td>*/}
                {/*                <td>{item.price}</td>*/}
                {/*                <td>{item.manufacturer}</td>*/}
                {/*                <td>{item.notes}</td>*/}
                {/*            </tr>*/}
                {/*        )*/}
                {/*    }*/}
                {/*)}}*/}
                <tr>
                    <td>1</td>
                    <td>Engine Oil</td>
                    <td>15/09/2021</td>
                    <td>1200$</td>
                    <td>ZIC</td>
                    <td>pretty good</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Oil filter</td>
                    <td>15/09/2021</td>
                    <td>120$</td>
                    <td>Citroen/Peugeot</td>
                    <td>it's made by Mahle!</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

function Contacts() {
    return <h2>Contacts</h2>;
}
