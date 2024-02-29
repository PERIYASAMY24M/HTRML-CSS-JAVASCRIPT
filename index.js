function AddTask(){
    var input=document.getElementById("input").value
    var element=document.getElementById("TASK-container")
    //console.log(element)
    var newelement=document.createElement('div')
    newelement.setAttribute('id','ind-task')
    newelement.innerHTML=`<p>${input}</p><button onclick="DeleteTask(event)">delete</button>`
    element.append(newelement)
}
function DeleteTask(event){
    event.target.parentElement.remove()
}