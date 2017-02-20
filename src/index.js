import { Router, Route, browserHistory } from 'react-router';
import { Component } from 'react';
import Todos from './todos';

export class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Todos} />
            </Router>
        )
    }
}
