import ReactDOM from 'react-dom';

import React from 'react';
import img from './assets/img/closeBg.png';

const App = () => {
    return (
        <div>
            <img src={img} alt="" />
            {/* ccc <Home /> */}
            {/* <Suspense fallback="loadding">
                <A />
            </Suspense> */}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
