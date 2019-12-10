/*
 This file contains de Progress html5 element <progress> which is created on the page when needed.
 This is written in vanillaJS
 arrayOfElements must be javascript nodeList (converted to array)

 more on this element and browser compatibility : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
 */

/* this is a ES6 module which can be imported using import  */

let elements;
let countProgress = 0;
let length;
let bar;
let parts;

const handleProgressInvokers = (elm, e) => {
    let target =  e.target;
    if (target.classList.contains('progress--invoker') && !target.classList.contains('progress--invoked')){
        target.classList.add('progress--invoked');
        countProgress++;
        setValue(parts);
        let nextElement = elm.nextElementSibling;
        if (nextElement !== null) nextElement.querySelector('.progress--invoker').classList.remove('link--disabled');
    }

};


const bindElementsToProgress = (elm) => {

    elm.addEventListener('click', handleProgressInvokers.bind(null, elm));
};

const getNodeList = (arrayOfElements) => {

    elements = Array.from(arrayOfElements); // convert nodeList to Array
    length = elements.length;
    elements.forEach(bindElementsToProgress);

};

const createProgressBar = () => {
    bar = document.createElement('progress');
    bar.className = 'js-progress-bar';
    bar.id = 'progress-bar';
    bar.setAttribute('max', 100);
    bar.value = 0;
    document.body.insertBefore(bar, document.body.firstChild);
};

const setValue = (percentage) => {
    const value = percentage * countProgress; //this is the value which increases the progress bar
    bar.setAttribute('value', value);
};

const setProgressBarParts = (length) => {

    const maxValue = bar.getAttribute('max');
    return maxValue / length;

};

export const init = (arrayOfElements) => {

    if (!document.querySelector('.js-progress-bar')) {
        getNodeList(arrayOfElements);
        createProgressBar();
        setTimeout(parts = setProgressBarParts(length), 10); // in order to show css animation initially
    } else {
        getNodeList(arrayOfElements);
        bar = document.querySelector('.js-progress-bar');
        parts = setProgressBarParts(length);
    }
};
