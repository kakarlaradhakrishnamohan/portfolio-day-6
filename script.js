<<<<<<< HEAD
function showMessage(){
    alert("Welcome to my portfolio!");
}

function addSkill(){

    let input =
    document.getElementById("skillInput");

    let list =
    document.getElementById("skillList");

    if(input.value.trim()===""){
        alert("Enter a skill first");
        return;
    }

    let li =
    document.createElement("li");

    li.textContent =
    input.value;

    list.appendChild(li);

    input.value="";
=======
function showMessage(){
    alert("Welcome to my portfolio!");
}

function addSkill(){

    let input =
    document.getElementById("skillInput");

    let list =
    document.getElementById("skillList");

    if(input.value.trim()===""){
        alert("Enter a skill first");
        return;
    }

    let li =
    document.createElement("li");

    li.textContent =
    input.value;

    list.appendChild(li);

    input.value="";
>>>>>>> a39dbddf0af53639b6bbc7d65b9d736cc4fe6857
}