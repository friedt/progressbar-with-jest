// in order to get spyOn to work create an object first from imported function
import {toHaveClass, toBeInTheDocument, toHaveAttribute} from '@testing-library/jest-dom';
import {initProgressBar as progress} from './progress-bar';

expect.extend({toHaveClass, toBeInTheDocument, toHaveAttribute});



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
        jest.spyOn(obj, 'progress');
        obj.progress(nodeList);
        progressBar = document.getElementById('progress-bar');
        expect(progressBar).toBeInTheDocument();
        expect(obj.progress).toHaveBeenCalledWith(nodeList);
        expect(progressBar).toHaveClass('js-progress-bar');
        expect(progressBar).toHaveAttribute('max');
        expect(progressBar.value).toBe(0);
        expect(progressBar.getAttribute('max')).toBe('100');
    });



    it('should have clicked the button with only className progress--invoker', function () {
        let button = document.querySelector('.progress--invoker');
        expect(button).not.toHaveClass('progress--disabled');
        button.click();
        expect(button).toHaveClass('progress--invoker');

    });

    it('should have clicked the button which contains className progress--disabled', function () {
        let button = document.querySelector('.progress--invoker');
        button.click();
        expect(button).toHaveClass('progress--disabled');
    });

    it('should check if progress html element is already present in DOM', function () {
        let progressBar = document.createElement('progress');
        progressBar.className = 'js-progress-bar';
        document.body.appendChild(progressBar);
        obj.progress(nodeList);
        expect(progressBar).toBeTruthy();
    });

    it('should check if progress html element is NOT present in DOM', function () {
        progressBar = null;
        expect(progressBar).toBeNull();
        expect(progressBar).toBeFalsy(); // 0 , undefined , null
    });

});
