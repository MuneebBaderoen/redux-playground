import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import {configureStore} from './_store';


// Create devtools component
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
);

// Create application root that will provide redux store context
// To all child components
export default class Root extends Component {
    constructor(props) {
        super(props);
        // Create store for entire application
        this.store = configureStore(DevTools);
    }   
    render() {
        return (
            <Provider store={this.store}>
                <div>
                    {this.props.children}
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
