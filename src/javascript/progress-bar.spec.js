// in order to get spyOn to work create an object first from imported function

import {initProgressBar as progress} from './progress-bar';



describe('progress-bar.js', function () {
    let progressBar;
    let nodeList;
    let obj = {};
    obj.progress = progress;

    beforeAll( function(){
        let list = document.createElement('ul');
        list.classList.add('js-progress-elements');

        for(let i = 0; i <= 5; i++){
            let item = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = 'next';
            button.classList.add('progress--invoker');
            item.appendChild(button);
            list.appendChild(item);
        }
        document.body.appendChild(list);
        nodeList = document.querySelectorAll('ul li');
        obj.progress(nodeList);

    });


    it('should call initProgressBar()', function () {
        spyOn(obj, 'progress').withArgs(nodeList);
        obj.progress(nodeList);
        progressBar = document.getElementById('progress-bar');
        expect(obj.progress).toHaveBeenCalledWith(nodeList);
        expect(progressBar).toHaveClass('js-progress-bar');
        expect(progressBar.max).toBe(100);
    });

    it('should have clicked the button with className progress--invoker', function () {
        let button = document.querySelector('.progress--invoker');
        button.click();
        expect(button).toHaveClass('progress--invoker');
    });

    it('should check if progress html element is already present in DOM', function () {
        let progressBar = document.createElement('progress');
        progressBar.className = 'js-progress-bar';
        document.body.appendChild(progressBar);
        obj.progress(nodeList);
        expect(progressBar).toBeTruthy();
    });

    it('should check if progress html element is NOT present in DOM', function () {

        let progressBar = document.querySelector('.js-progress-bar');
        progressBar = null;
        //console.log(progressBar);
        expect(progressBar).toBe(null);
    });

});
