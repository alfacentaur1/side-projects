let idCount = 0;

function add() {
    const parent = document.getElementById("content-container");
    const contentToAdd = document.getElementById("text");

    //if value in add input is not empty
    if(contentToAdd.value.trim().length !== 0) {

        //create new div, assume some values
        let new_div = document.createElement("div");
        new_div.className = "content";
        new_div.id = idCount;
        idCount++;

        //create edit and delete button
        let editButton = document.createElement("button");
        editButton.className = "edit";
        editButton.innerText = "edit";

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerText = "delete";
        
        //if clicked on edit, remove every html in div and append new input with value of div
        editButton.addEventListener("click", () => {
            let input = document.createElement("input");
            input.type = "text";
            input.className = "editInput";
            new_div.removeChild(editButton);
            new_div.removeChild(deleteButton);
            input.value = new_div.innerText.trim();
            new_div.innerHTML = "";

            let okButton = document.createElement("button");
            okButton.innerText = "OK";
            okButton.className = "ok";

            new_div.appendChild(input);
            new_div.appendChild(okButton);

            //when clicked on ok, and is not empty, save new value
            okButton.addEventListener("click", () => {
                if(input.value.trim().length !== 0) {
                    new_div.innerHTML = "";
                    new_div.innerText = input.value;
                    new_div.appendChild(editButton);
                    new_div.appendChild(deleteButton);
                } else {
                    alert("Empty!");
                }
            });
        });

        //if clicked on delete button
        deleteButton.addEventListener("click", function() {
            parent.removeChild(new_div);
        });

        new_div.innerText = contentToAdd.value;

        new_div.appendChild(editButton);
        new_div.appendChild(deleteButton);
        parent.appendChild(new_div);
        //erase add values
        contentToAdd.value = "";
    } else {
        alert("Empty!");
    }
}
