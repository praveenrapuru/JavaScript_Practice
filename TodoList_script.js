function addTask(){
	var taskInput= document.getElementById('taskInput');
	var taskList = document.getElementById('taskList');

	if (taskInput.value == "") {
		alert("Blank value not allowed");
		return;
	}
			
	const li = document.createElement('li');
	li.textContent = taskInput.value;
	taskList.append(li);
	taskInput.value = '';


		// remove button

	const removeButton = document.createElement('button');
	removeButton.textContent = "Remove";
	removeButton.onclick = () => taskList.removeChild(li);
		li.append(removeButton);

	li.onclick = () =>{
		li.classList.toggle('strikethrough');
	}
}