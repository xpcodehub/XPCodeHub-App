import {Switch, Route, Redirect} from "react-router-dom"
import React, {Component} from 'react';
import {LoginScreen} from "./screens";
import './App.css';
import {UrlFinder} from "./services";

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
                <Route path={this.urlFinder.getUrlLogin()} component={LoginScreen} exact/>
                <Route path="/" exact render={() => <Redirect to="/Login"/>}/>
                {/*<Route path="/modal" render={props => <ModalNovaEdicao {...props} />} exact/>*/}
                {/*<Route path="/Crescer" component={Edicoes} exact/>*/}
            </Switch>
        );
    }
}

export default App;
