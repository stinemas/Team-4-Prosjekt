function updateViewInteressePage() {

  let html = `
    <div class="container">
    
      <div class="header">
        <h2>Velkommen til Interesse siden</h2>

        <div class="navbar" class="header">
          <nav class="stroke">
            <ul>
              <li><a onclick="functionHere()" class="cursorPointer">hjem</a></li>
              <li><a onclick="goToInteresse()" class="cursorPointer" id="curr-selected">interesse</a></li>
              <li><a onclick="goToStudenter()" class="cursorPointer">studenter</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown" class="navnInfo">
        <button onclick="myDropDown()" class="dropbtn">Nye interesser</button>
        <div class="dropDownMenu">
          <h4>${interesseMeld()}</h4>
        </div>
        <span class="badge">${model.intMelding.length}</span>
        <div class="dropdown-content">
        
      
        </div>
      </div>

      <div class="studInfo">
        <h2>Interesse Melding</h2>
        <h4 class ="classHolder">${model.infoStu}</h4>
      </div>

      <div class="opprettModul">
        <table>
          <tr>
          <h4>${model.sendVidere}</h4>
            <th>Opprett modul:</th>
            <td>
              <select class="dropbtnSelect">
                <option value="mod1">Modul 1</option>
                <option value="mod2">Modul 2</option>
                <option value="mod3">Modul 3</option>
                <option value="getit">Get IT</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Oppstartsdato:</th>
            <td>
              <input type="date" id="" name="oppstartDato">
            </td>
          </tr>
        </table>
        <button class="sendBtn" onclick="functionHere()">Send</button>
      </div>

      

      <div class="footer">
        <p>test på footer</p>
        
      </div>

    </div>

    
    `;
  document.getElementById('app').innerHTML = html;
}

function interesseMeld() {
  let html = '';
   for (let i = 0; i < model.intMelding.length; i++) {
      html += `
    <div id="intrStudent" onclick="seStudent(${i})">${model.intMelding[i].navn}</div>
    
    <hr>
    
    `
  }
  return html;
}




// function interesseStu() {
//   let html = '';
//   for (let i = 0; i < model.intStudent.length; i++) {
//     html += `
//     <div id="intrMelding"> ${model.intStudent[i].intMelding.navn}</div>
//     `
//   }
//   return html;
// }