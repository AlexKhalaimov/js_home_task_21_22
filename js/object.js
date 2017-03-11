/*jshint esversion: 6 */


    'use strict';

    function getObj(name) {
        let test = localStorage.getItem(name);
        test = JSON.parse(test);
    }




    function createTag(tag, classname){
        var el;

        el = document.createElement(tag);
        el.className = classname;

        return el;

    }

    function setAttr(el, obj){

        for(var key in obj.attrib){
            el.setAttribute(key, obj.attrib[key]);
        }

        el.appendChild(document.createTextNode(obj.text));
    }


    function createHTML() {
        let parent = document.body;
        let wrapper = createTag('div', 'wrapper');

        parent.appendChild(wrapper);

        let form = createTag('form', 'testForm');

        let header = createTag('h1');
        header.appendChild(document.createTextNode('This is simple test'));

        form.appendChild(header);
        wrapper.appendChild(form);

        let submitBtnAttr = {
            attrib : {
                type : 'button',
                name : 'button',
                id : "submit"
            },
            text : 'Check my Answers!'
        };

        function createBlock(object, name) {
            let header = createTag('h3');
            header.appendChild(document.createTextNode(name));
            form.appendChild(header);
            for (let key in object){
                let label = createTag('label');
                let input = label.appendChild(createTag('input', 'test_answers'));
                let text = object[key];
                input.setAttribute('type', 'radio');
                input.setAttribute('name', name);
                input.setAttribute('value', object[key]);

                label.appendChild(document.createTextNode(text));
                form.appendChild(label);

            }
        }
        getObj('myTest');
        createBlock(test.section1, test.title1);
        createBlock(test.section2, test.title2);
        createBlock(test.section3, test.title3);

        let submitBtn = createTag('button', 'submit');
        setAttr(submitBtn, submitBtnAttr);
        form.appendChild(submitBtn);

    }
    createHTML();
