// Studenter
function goToInteresse() {
    model.app.currentPage = 'studenter';
    updateView();
}
function goToStudenter() {
    model.app.currentPage = 'studenter';
    updateView();
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    //her finner vi hvilken index personen som er trykt på har

    //bruke den indexen til å mellomlagre denne personen en plass - gjerne f.eks "selectedPerson" i model
    //bruke denne variabelen i deleteTask
    show();
}


// function changeIsDone(checkbox, index) {
//     model.tasks[index].isDone = checkbox.checked;
//     show();
// }

function deleteTask(index) {
    model.tasks.splice(index, 1);
    updateViewStudenterPage();
}

function editTask(index) {
    model.tasks[index].editMode = true;
    show();
}

function updateTask(index) {

    const task = model.tasks[index];
    console.log(index);
    console.log(task);
    task.description = model.inputsTasks.description;
    task.person = model.inputsTasks.person;
    task.editMode = false;
    show();
    editPerson();
}
// function leggTilValuta() { 
// if (model.inputs.Kode == '') return;

// show();

var taskDescriptioninputsTasks = document.getElementById('taskDescription');
taskPersoninputsTasks = document.getElementById('taskPerson')

function addTask() {
         
    tasks.push({
        description: taskDescriptioninputsTasks.value,
        isDone: false,
        person: taskPersoninputsTasks.value,

    });

    taskDescriptioninputsTasks.value = '';
       show();

   }


   

   



