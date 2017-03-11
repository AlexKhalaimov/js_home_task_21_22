/*jshint esversion: 6 */

    'use strict';
    let  test = {
        title1 : 'Question 1',
        section1 :{
            answer1 : 'answer1',
            answer2 : 'answer2',
            answer3 : 'answer3'
        },
        title2 : 'Question 2',
        section2 :{
            answer1 : 'answer1',
            answer2 : 'answer2',
            answer3 : 'answer3'
        },
        title3 : 'Question 3',
        section3 :{
            answer1 : 'answer1',
            answer2 : 'answer2',
            answer3 : 'answer3',
        },
        correct : ['answer3', 'answer1', 'answer2']

    };
    localStorage.setItem('myTest', JSON.stringify(test));
