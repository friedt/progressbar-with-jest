import 'core-js/es/array/from'; // polyfill IE11

import {init} from "./progress-bar";

const elements = document.querySelectorAll('.js-progress-elements li');

init(elements);



