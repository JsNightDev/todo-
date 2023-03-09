let todoListParent;
let inputVal;
// let inputs;
let idcount = 0

function declare() {
    todoListParent = document.getElementById('createsToDo')
    inputVal = document.getElementById("inputToDo").value
}

function addButton() {
    declare()
    idcount += 1
    if (document.getElementById("inputToDo").value !== " "
        && document.getElementById("inputToDo").value !== null
        && document.getElementById("inputToDo").value.match(/^ *$/) === null) {

        todoListParent.insertAdjacentHTML('afterbegin',
            `<div class="parentEachTodo" id="${idcount}parentEachTodo">
                <input class="checkbox" type="checkbox" id="${idcount}checkbox">
                <input class='todo_s' id="${idcount}inputbox" type ="text"  value ="${inputVal}">
                <img class="deltbutton" id="${idcount}deleteButton" src="./assets/trash.png" alt="delete Button">
            </div>`);
        document.getElementById("inputToDo").value = ""
    }
    else {

    }

    let inputs = document.querySelector('.checkbox');
    inputs.addEventListener("change", check)

    let deltbutton = document.querySelector('.deltbutton');
    deltbutton.addEventListener("click", deleteitem)
}

function check(event) {
    declare()
    // console.log(event.target.checked);
    let number = parseInt(event.target.id)
    // console.log(number);
    if (event.target.checked) {
        document.getElementById(`${number}inputbox`).style.textDecoration = "line-through";
    }
    else {
        document.getElementById(`${number}inputbox`).style.textDecoration = null;
    }
}

function deleteitem(deltiem) {
    declare()
    // console.log(event.target.checked);
    let number = parseInt(deltiem.target.id)
    // console.log(number);
    document.getElementById(`${number}parentEachTodo`).remove()
}



window.onload(() => {
    declare();
})



























// let number = number
// function localSave(key, val) {
//     localStorage.setItem(key, val)
// }
// function localRetrieve(key) {
//     return localStorage.getItem(key)
// }


// function addButton() {

//     if (document.getElementById("inputToDo").value !== " ") {
//         let inputVal = document.getElementById("inputToDo").value

//         number = number + 1
//         localSave(`taskName${number}`, JSON.stringify(inputVal));
//         document.getElementById("inputToDo").value = " "
//     }

//     // parent "createsToDo
//     // let createsToDo = document.getElementById("createsToDo")
//     // let todo = document.createElement('input')
//     // .value = JSON.parse(localRetrieve(`taskName${number}`))
//     // createsToDo.appendChild(todo)
// }




