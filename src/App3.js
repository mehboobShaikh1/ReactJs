import React,{Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component{
    render() {
        return <>
        <h1> Hello {this.props.name} </h1>
        </>
    }
}

App.propTypes = {
    name: PropTypes.string.isRequired
}

App.defaultProps = {
    name: "Mehboob Shaikh"
};

export default App;