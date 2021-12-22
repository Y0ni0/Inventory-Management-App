// BUDGET CONTROLER
var budgetController = (function(){
   
    //some code

})(); 


// UI CONTROLLER
var UIController = (function(){

    //Code

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget 

        // 5. Display the budget on the UI
        console.log('enter key was pressed');
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        
        if( event.keyCode === 13 || event.which === 13 ){
            ctrlAddItem();
        }
    })

})(budgetController, UIController);