import React, { Component } from 'react';
import _ from 'lodash';

console.log('嘻嘻嘻嘻嘻');

class Feilei extends Component {
    render() {
        return <div>feilei, {_.join([1, 2], '')}</div>;
    }
}

export default Feilei;
