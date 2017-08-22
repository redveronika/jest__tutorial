import React, {Component} from 'react';
import './App.css';
import Link from "./components/Link";
import CheckboxWithLabel from "./components/CheckboxWithLabel";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link/>
                <CheckboxWithLabel labelOn="On" labelOff="Off" />
            </div>
        );
    }
}

export default App;
