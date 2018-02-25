//Search Input
const searchUser = document.getElementById("searchUser");
const btnSearch = document.querySelector(".btn");

//Search input event listener
btnSearch.addEventListener("click", getText);

function getText(){
    //get input text
    const userText = searchUser.value;
    if(userText !== ""){
        console.log(userText);
    }
}
    
