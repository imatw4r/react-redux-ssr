// THIS IS THE ENTRYPOINT FOR ** CLIENT ** SIDE APP

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';


// You want to render the real app into the same tag (div in this case)
// that you've rendered your app in before
ReactDOM.hydrate(<Home />, document.querySelector('#root')); 

console.log('Hi there');
