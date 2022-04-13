import React, { Component } from 'react';
import _ from 'lodash';

class Home extends Component {
    handleClick = () => {
        import('./../Fenlei');
    };
    render() {
        return <div onClick={this.handleClick}>home, {_.join([1, 2], '')}</div>;
    }
}

export default Home;
