import 'core-js/es/array/from'; // polyfill IE11
import {initProgressBar} from './progress-bar';

// get nodelist to bind to the progress-bar
export const getNodeList = () => {
    let nodeList = document.querySelectorAll('.js-progress-elements li');
    (nodeList.length > 0) ? initProgressBar(nodeList) : null;

};

getNodeList();








