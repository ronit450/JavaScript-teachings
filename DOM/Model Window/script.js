'use strict';
// Firs of all we have to select all the classes and store it in variable so that we can use them for future ref 

const hidden_box = document.querySelector('.hidden');
const close_btn = document.querySelector('.close');
const overlayHidden = document.querySelector('.overlay');
const model_heading = document.querySelector('.model_span');

const model = document.querySelector('.model');

// Now when we have same class name for different elements like here same class name for buttons so this selector will only select the first one so for that we will have to use selector all

const modle_btn = document.querySelectorAll('.model_btn');
// So now it has got all the elements so to access them we will have to use the for loop

const open_model = function(temp){
          // To work with class list we use

        // First off all we have to remove the hidden class, it means that by clicking a particular button hidden class will be removed
        model.classList.remove('hidden');
        model_heading.textContent = temp;
        overlayHidden.classList.remove('hidden');
}

    
const close_overlay =  function() {
        model.classList.add('hidden');
        overlayHidden.classList.add('hidden');
}

for (let i = 0; i < modle_btn.length; i++){

    modle_btn[i].addEventListener('click', open_model(i));
        
    close_btn.addEventListener('click', close_overlay);
    overlayHidden.addEventListener('click', close_overlay);


}
