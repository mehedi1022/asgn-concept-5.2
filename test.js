// document.getElementById("btn").addEventListener("click", function(e){
//     console.log("boss");
// })

function handleClick(event){
    console.log(event.target.parentNode.parentNode.childNodes[1].value);
}