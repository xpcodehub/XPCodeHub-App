import {Switch, Route, Redirect} from "react-router-dom"
import React, {Component} from 'react';
import {LoginScreen, HomeScreen, ProgrammingTaskScreen, TechStepsScreen} from "./screens";
import './App.css';
import {UrlFinder} from "./services";
import "react-toastify/dist/ReactToastify.css";


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edicoesRotas: false,
            modulosRotas: false
        }

        this.urlFinder = new UrlFinder()
    }


    render() {
        return (
            <Switch>
                <Route path="/" component={HomeScreen} exact/>
                <Route path={this.urlFinder.getUrlProgrammingTask()} component={ProgrammingTaskScreen} exact/>
                <Route path={this.urlFinder.getUrlTechSteps()} component={TechStepsScreen} exact/>
                <Route path={this.urlFinder.getUrlLogin()} component={LoginScreen} exact/>
                <Route path={this.urlFinder.getUrlLogout()} exact render={() => {
                    localStorage.clear()
                    return <Redirect to='/Login'/>
                }
                }/>
            </Switch>
        );
    }
}

export default App;
