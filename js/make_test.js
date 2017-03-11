/*jshint esversion: 6 */

'use strict';


function getObj(name) {
    let test = localStorage.getItem(name);
    test = JSON.parse(test);
}

getObj('myTest');

let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', checkAnswers);




    function checkAnswers(){


        let ul;
        let div;
        let userAnsw = [];
        let mychecking = [];
        let resetBtn;
        let overlay;
        let li;
        let parent = document.querySelector('.wrapper');


            let inputs = document.getElementsByClassName('test_answers');

                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].type=="radio" && inputs[i].checked){

                            let value = inputs[i].value;
                         userAnsw.push(value);
                    }
                }

                for (let k = 0; k < test.correct.length; k++) {
                    let  checking = userAnsw[k] === test.correct[k];
                        if (checking === true) {
                            mychecking.push('correct');
                        }
                        else {
                            mychecking.push('incorrect');
                        }
                }

                function createHTML(tag, classname){
                    let el;

                    el = document.createElement(tag);
                    el.className = classname;

                    return el;

                }

                function setAttr(el, obj){

                    for( let key in obj.attrib){
                        el.setAttribute(key, obj.attrib[key]);
                    }

                    el.appendChild(document.createTextNode(obj.text));
                }

                let  resetBtnAttr = {
                    attrib : {
                        type : 'button',
                        name : 'btnStart'
                    },
                    text : 'Close'

                };

                function showResult(){


                    div = createHTML('div', 'modal');
                    ul = createHTML('ul');
                    overlay = createHTML('div', 'overlay');
                    parent.appendChild(overlay);



                   for (let i = 0; i < mychecking.length; i++) {
                       li = document.createElement('li');
                       li.appendChild(document.createTextNode(`Question ${i+1}:  Your answer is ${mychecking[i]}` ));
                       ul.appendChild(li);
                   }

                   div.appendChild(ul);
                   parent.appendChild(div);
                   resetBtn = createHTML('button', 'reset');
                   setAttr(resetBtn, resetBtnAttr);
                   resetBtn.addEventListener('click', resetResult);
                   div.appendChild(resetBtn);
                }

                function resetResult() {
                    mychecking.splice(0, (mychecking.length + 1));
                    userAnsw.splice(0, (userAnsw.length + 1));

                        for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].type=="radio" && inputs[i].checked){
                                inputs[i].checked=false;

                        }
                    }

                    div.removeChild(resetBtn);
                    parent.removeChild(overlay);
                    parent.removeChild(div);
                }

                showResult();


    }
