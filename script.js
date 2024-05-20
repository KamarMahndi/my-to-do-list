const inputBox = document.getElementById('inputbox');
const addbut = document.getElementById('addbutton');
const todoList = document.getElementById('todolist');
  
  let edittodo = null;

const addtodo =()=>
{
	const inputtext = inputBox.value.trim();
	if (inputtext.length <= 0) {
		alert("you must write some thing..");
	     return  false ;
	}
	if (addbut.value ==="edit") {
		edittodo.target.previousElementSibling.innerHTML = inputtext;
		addbut.value ="Add";
		inputBox.value ="";
	}
	else{
	const li = document.createElement("li");
	const p = document.createElement("p");
	p.innerHTML = inputtext;
	li.appendChild(p);
	
    const editbtu = document.createElement("button");
    editbtu.innerHTML = "edit";
    editbtu.classList.add("btu","edit");
    li.appendChild(editbtu);


    const deletebtu = document.createElement("button");
	deletebtu.innerHTML = "remove";
	deletebtu.classList.add("btu","delete");
	li.appendChild(deletebtu);

	todolist.appendChild(li);
    inputBox.value = "";
}
}
const updatetodo =(e) =>
{
 if (e.target.innerHTML ==="remove") {
 	 todoList.removeChild(e.target.parentElement);
 }
 if (e.target.innerHTML ==="edit") {
 	inputBox.value = e.target.previousElementSibling.innerHTML;
 	inputBox.focus();
 	addbut.value = "edit";
 	edittodo = e;
 }
}
addbut.addEventListener('click',addtodo);
todoList.addEventListener('click',updatetodo);
