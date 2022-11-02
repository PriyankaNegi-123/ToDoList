'use strict'
const formEl = document.getElementById("form-item");
const itemEl = document.getElementById("item");
const itemsContainerEl = document.getElementById("items-container");
const btnEl = document.getElementById("btn");

// global variable
let items = [];
let isEditing = false;
let editId = null;

// functions
const displayUI = function(){
    itemsContainerEl.innerHTML = null;
    if(items.length> 0){
        items.forEach((item) => {
        const listEl = document.createElement("li");
        listEl.classList.add("lists-item");
        listEl.innerHTML = `${item.value} 
        <button class= "dltbtnjs" onClick = "deleteItem(${item.id})">Delete</button>
        <button class="editbtnjs" onClick = "editItem(${item.id})">Edit</button>`;
        itemsContainerEl.appendChild(listEl);
        })
    }
    isEditing = false;
    editId = null;
    itemEl.value= null;
};

const deleteItem = function (id){
    items = items.filter((item)=> item.id!== id);
    displayUI();
}

const editItem = function(id){
    const itemToEdit = items.find((item)=>item.id === id);
    itemEl.value = itemToEdit.value;

    editId = id;
    isEditing = true;
}

// event listener
formEl.addEventListener("submit", (e)=>{
    e.preventDefault();

//     if(isEditing){
//         items = items.map((item) =>{
//         if(item.id ===editId){
//             return {...item, value: itemEl.value}; 
//         }else{
//             return item;
//         }
//         });

//         displayUI();
//     }else{
//     if(itemEl.value){
//         const item = {
//             id: new Date().valueOf(),
//             value: itemEl.value,
//         };
//         items.push(item);
//         displayUI();
//     }else{
//         alert("Enter a valid input");
//     }
// }
// });



if(itemEl.value){
    if(isEditing){
        items = items.map((item) =>{
        if(item.id ===editId){
            return {...item, value: itemEl.value}; 
        }
        else{
            return item;
        }
        });

        displayUI();
    }else{
        const item = {
            id: new Date().valueOf(),
            value: itemEl.value,
        };
        items.push(item);
        displayUI();
    }
}
else{
        alert("Enter a valid input");
    }
})
