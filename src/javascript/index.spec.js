import {getNodeList as list} from './index';


describe('index.js', function () {

    let obj = {};
    obj.list = list;


    beforeEach(function () {
        let list = document.createElement('ul');
        list.classList.add('js-progress-elements');

        for(let i = 0; i <= 2; i++){
            let item = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = 'next';
            button.classList.add('progress--invoker');
            item.appendChild(button);
            list.appendChild(item);
        }
        document.body.appendChild(list);
        obj.list();



    });

    afterEach(function(){
        let list = document.querySelector('.js-progress-elements');
        list.parentNode.removeChild(list);
    });

    it('should getNodeList() to have been called', function () {
        spyOn(obj, 'list');
        obj.list();
        expect(obj.list).toHaveBeenCalled();
    });
});
