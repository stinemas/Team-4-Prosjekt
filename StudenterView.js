
  function studentInfo () {
    let html = ``
    for (i = 0; i < model.tasks.length; i++) {
    html += `
    
    `}
    return html; 
  }


function updateViewStudenterPage() {
  let html = `    

  <div class="container">
    
  <div class="header">
  

    <div class="navbar" class="header">
      <nav class="stroke">
        <ul>
          <li><a onclick="functionHere()" class="cursorPointer">hjem</a></li>
          <li><a onclick="goToInteresse()" class="cursorPointer">interesse</a></li>
          <li><a onclick="goToStudenter()" class="cursorPointer" id="curr-selected">studenter</a></li>
          </li>
        </ul>
      </nav>
    </div>
  </div>



  <div class="menu">
      <table>
        <tr>
          <th>STUDENT</th> 
          <th>MODUL</th>    
             
        </tr>
    </div>

    
    

  </div>`;
                    
    for (let i = 0; i < model.tasks.length; i++) {
      console.log(model.tasks[i])
        html += createHtmlRow(i);
    }
    html += `</table> `
    document.getElementById('app').innerHTML = html;
}


function createHtmlRow(i) {
  const task = model.tasks[i];
      if (!task.editMode)
      return `<tr>
          <td>${task.person}</td>
          <td>${task.description}</td>

          <td>
          <button onclick="deleteTask(${i})">Slett</button>
          <button onclick="goToProfil()">Profil</button>
          
      </td>
  </tr>
      `;

      
      return `
          <tr>
          <td><input id="editPerson${i}" type="text" oninput="model.inputsTasks.person=this.value" value="${model.inputsTasks.person}" /></td>
          <td><input id="editDescription${i}" type="text" oninput="model.inputsTasks.description=this.value" value="${model.inputsTasks.description}"/></td>
          
                  
          </tr>

          

          
      `;
  }
  