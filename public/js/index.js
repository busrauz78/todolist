
var iconElementUnchecked='<i class="fas fa-check"></i>';
var iconElementTrash='<i class="fas fa-trash-alt"></i>';

var iconElementDown='<i class="fas fa-folder-open"></i>';
var iconElementUp='<i class="fas fa-folder"></i>';



var addBtn=document.getElementById('add').addEventListener("click",function(){

    var item=document.getElementById('item').value;
    if(item!==''){
        addItemTodo(item);
        document.getElementById('item').value = "";
    }


});
var todoHideShowButton=document.getElementById('hideShowTodo').addEventListener("click",function(){
var todoButton=document.getElementById('hideShowTodo');


    
    if(todoButton.className==='' || todoButton.className==="opened" ){
    todoButton.className="closed";
    todoButton.innerHTML=iconElementDown ;
    $("#todo").slideUp();

}
else{
    todoButton.className="opened";
    todoButton.innerHTML=iconElementUp ;
    $("#todo").slideDown();
}




});

var completedHideShowButton=document.getElementById('hideShowCompleted').addEventListener("click",function(){
    var completedButton=document.getElementById('hideShowCompleted');
    
    
        
        if(completedButton.className==='' || completedButton.className==="opened" ){
            completedButton.className="closed";
            completedButton.innerHTML=iconElementDown ;
        $("#completed").slideUp();
    
    }
    else{
        completedButton.className="opened";
        completedButton.innerHTML=iconElementUp ;
        $("#completed").slideDown();
    }
    
    
    
    
    });
function removeItemList(){
    var item=this.parentNode.parentNode.parentNode;
    var element=item.parentNode;
    element.removeChild(item);
    }
    



function addItemTodo(item){

    var liElement=document.createElement("li");
    liElement.className='todoli';

    var divElement=document.createElement("div");
    divElement.className="item-div";


    var itemHeader = document.createElement("h3");
    itemHeader.className='item-header';
    var node = document.createTextNode(item);
    itemHeader.appendChild(node);
    
    var divButtonsElement=document.createElement("div");
    divButtonsElement.className="buttons";
    
    var buttonElement1=document.createElement("button");
    
    buttonElement1.className="btn btn-check";
    buttonElement1.innerHTML=iconElementUnchecked;
    
    var buttonElement2=document.createElement("button");
    buttonElement2.className="btn btn-trash";
    buttonElement2.innerHTML=iconElementTrash;
    
    buttonElement1.addEventListener("click",addItemCompleted);
    buttonElement2.addEventListener("click",removeItemList);

    divButtonsElement.appendChild(buttonElement1);
    divButtonsElement.appendChild(buttonElement2);
    
  
    
    divElement.appendChild(itemHeader);
    divElement.appendChild(divButtonsElement);

    liElement.appendChild(divElement);

     var ulElement=document.getElementById("todo");
     ulElement.appendChild(liElement);
     
                  
}
function addItemCompleted(){
   
  

    var totalItem=this.parentNode.parentNode.parentNode;
    var parent=totalItem.parentNode;

    parent.removeChild(totalItem);  
    var buttons=this.parentNode;
    var item=this;
    buttons.removeChild(item);

  
    totalItem.className="completedli";
 

     var ulElementCompleted=document.getElementById("completed");
    ulElementCompleted.appendChild(totalItem);
    

}



