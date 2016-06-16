'use strict';

function AnimalCall(){
    var animals = {
        'cat': 'meow',
        'dog': 'arf',
        'snake': 'hiss',
        'human': 'blah blah blah',
        'mouse': 'squeak'
    };

    function createAnimalCall(animal){
        return animals[animal] || "mysterious animal call";
    };

    return {
        'createAnimalCall': createAnimalCall
    }
};

function getAnimalCall(){
    var animal = new AnimalCall();
    var call = animal.createAnimalCall(anim.value);
    console.log("This animal says " + call);
};

var anim = document.getElementById('animal');

anim.addEventListener('blur', getAnimalCall);
