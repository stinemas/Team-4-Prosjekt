function goToProfil() {
    model.app.currentPage = 'profil';
    updateView();
}

function infoStudent() {
let html = '';
   for (let i = 0; i < model.studenter.length; i++) {
       html += `

       <input type="text" id="myText" value=" Navn: ${model.studenter[i].navn}"><br>
       <input type="text" id="myText" value=" Født: ${model.studenter[i].født}"><br>
       <input type="text" id="myText" value=" TLF: ${model.studenter[i].tlf}"><br>
       <input type="text" id="myText" value=" Fylke: ${model.studenter[i].fylke}"><br>
       <input type="text" id="myText" value=" Adresse: ${model.studenter[i].adresse}"><br>
       <input type="text" id="myText" value=" Epost: ${model.studenter[i].epost}">
       `
   }
   return html;

}

function infonav() {
    let html = '';
       for (let i = 0; i < model.nav.length; i++) {
           html += `
           <input type="text" id="myText" value="Veileder: ${model.nav[i].veileder}"><br>
           <input type="text" id="myText" value="Kontor: ${model.nav[i].kontor}"><br>
           <input type="text" id="myText" value="TLF: ${model.nav[i].tlf}"><br>
           <input type="text" id="myText" value="Epost: ${model.nav[i].epost}">

           `

           return html;

        }
    }
function dropDownInfo() {
    let html = '';
    for (let index = 0; index < model.dropDownInfo.length; index++) {
        html += ` 
        <option value="${index}">${model.dropDownInfo[index].oblig}
        <option value="${index}">${model.dropDownInfo[index].Rapport}
        <option value="${index}">${model.dropDownInfo[index].Notater}
        <option value="${index}">${model.dropDownInfo[index].Oppgaver}
        <option value="${index}">${model.dropDownInfo[index].Møter}
        
        `
        return html;
    }


}

function obligsendt(){
    


}




