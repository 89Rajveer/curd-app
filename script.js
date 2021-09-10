var selectedRow = null
function onFormSubmit(){
	var formData = readDataForm();
	if(selectedRow == null){
		insertNewRow(formData);
	}
	else{
		updateRow(formData);
	}
	resetForm();
}

function readDataForm(){
	var formData = {};
	formData["fullname"] = document.getElementById("fullname").value;
	formData["email"] = document.getElementById("email").value;
	formData["salary"] = document.getElementById("salary").value;
	formData["city"] = document.getElementById("city").value;
	return formData;
}
function insertNewRow(data){
	var table = document.getElementById("empId").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.lenth);
	cell1 =  newRow.insertCell(0);
	cell1.innerHTML = data.fullname;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.email;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.salary;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML =  data.city; 
	cell4 = newRow.insertCell(4);
	 cell4.innerHTML = `<a href="#addEmployeeModal" onClick="onEdit(this)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                       <a onClick="onDelete(this)" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>`;
    // cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    //                    <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm(){
	document.getElementById("fullname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("salary").value = "";
	document.getElementById("city").value = "";
	selectedRow = null;
}
function onEdit(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
	document.getElementById("email").value = selectedRow.cells[1].innerHTML;
	document.getElementById("salary").value =  selectedRow.cells[2].innerHTML;
	document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRow(formData){
	selectedRow.cells[0].innerHTML = formData.fullname;
	selectedRow.cells[1].innerHTML = formData.email;
	selectedRow.cells[2].innerHTML = formData.salary;
	selectedRow.cells[3].innerHTML = formData.city;
}
function onDelete(td){
	if(confirm('are you sure you want to delete record?')){
		row = td.parentElement.parentElement;
		document.getElementById("empId").deleteRow(row.rowIndex);
		resetForm();
	}
}