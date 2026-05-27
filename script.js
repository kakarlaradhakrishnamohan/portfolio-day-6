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
}