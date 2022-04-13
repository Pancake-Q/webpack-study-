import ReactDOM from 'react-dom';

import React, { lazy, Suspense } from 'react';

import Home from './pages/Home';

// const A = lazy(() => import('./pages/Fenlei'));

const App = () => {
    // const handleClick = () => {
    //     console.log('xixixixi');
    //     import('./pages/Fenlei');
    // };
    return (
        <div>
            ccc <Home />
            {/* <Suspense fallback="loadding">
                <A />
            </Suspense> */}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
