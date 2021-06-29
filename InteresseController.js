//Interesse

function goToInteresse() {
    model.app.currentPage = 'interesse';
    updateView();
}
// Viser Søkere til Get Academy i DropDown
function myDropDown() {
    document.querySelector(".dropDownMenu").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropDownIntr");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Tester at Varsel i Dropdown viser
let intrAlert = 0;
function testAlert() {

  // model.interesseAlert.intrAlert += model.interesseAlert.alertvarsel;
  
  model.intrAlert = model.intMelding.length ;
  
  updateViewInteressePage();
}


//pusher ting i dropdown
// function intrMelding() {
// for (model.intStudent.intMelding[index].id )
// }


// function addInteresse() {
//   let nyStudent = document.querySelector('#classHolder');
//   document.querySelector()
// }

// function nyInteresse() {
//   let openInteresse = [];
// }



//forsøk på funksjon te stine å erlend i dropdown
//men først å fremst få lov å ha funksjon me en allerede
//eksisterende funksjon- myDropDown
//--------
function newInterrest() {
  let openInteresse = '';
  for(let i = 0; i < model.intStudent.length; i ++){
  for (let intr = 0; intr < model.intStudent[i].intMelding.length; intr++) {
    openInteresse += `
    <div id="interesseStudent">
    
    <h4 class="int-meld" onclick="interesseMeld(${intr})">Navn: ${model.intStudent[i].intMelding[intr].navn}</h4>
 
  </div>
    `;
    
  }
}
 
  return openInteresse;

}

function seStudent(seInfo) {
  // for(let index = 0; index < model.intMelding.length; index++) {
  //   if(seInfo == model.intMelding[index].id)
  //   model.infoStu = `${model.intMelding}`
  // }
  model.infoStu = `
  <div> ${model.intMelding[seInfo].navn}</div>
  <div> ${model.intMelding[seInfo].fodt}</div>
  <div> ${model.intMelding[seInfo].adresse}</div>
  <div> ${model.intMelding[seInfo].tlf}</div>
  <div> ${model.intMelding[seInfo].epost}</div>
  <div> ${model.intMelding[seInfo].navKontor}</div>
  <div> ${model.intMelding[seInfo].navEpost}</div>
  <div> ${model.intMelding[seInfo].navTlf}</div><br>
  <div>
    <p class="inline-style">Opptaksrøve</p>
    <select class="opptakSelect" class="inline-style">
    <option value="ig">Ikke gjennomført</option>
    <option value="ok">Gjennomført</option>
    </select>
  </div><br>
  <div> 
    <p class="inline-style">Opptaksamtale</p>
    <select class="opptakSelect" class="inline-style">
    <option value="ig">Ikke gjennomført</option>
    <option value="ok">Gjennomført</option>
    </select>
  </div>
<br>
  <button id="sendVidereOpp" onclick="sendTilOppstart()">send videre</button>

  `
  
  updateViewInteressePage();
}

function sendTilOppstart(sendHer) {
// let html = '';
// for (let e = 0; e < model.intMelding.length; e++) {
//   html +=
model.sendViere = `
  <div>${model.intMelding.navn}</div>
  `

updateViewInteressePage();
}