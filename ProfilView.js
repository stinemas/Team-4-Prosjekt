function updateViewProfilPage() {
  document.getElementById('app').innerHTML = `
        
  
    <div class="container">
      
    <div class="header">
    <ul>
    <li><a onclick="functionHere()" class="cursorPointer">hjem</a></li>
    <li><a onclick="goToInteresse()" class="cursorPointer">interesse</a></li>
    <li><a onclick="goToStudenter()" class="cursorPointer">studenter</a></li>
    </li>
  </ul>
    </div>


    <div class="stuInfo">
    <h2>Student</h2>
    <h4>${infoStudent()}</h4>
    </div>
    
    <div class="dropDown">
      
   
    
    <select class="dropbtnSelect">
        <option>${dropDownInfo()}</option>
          
          
      </select>
    </div>


    <div class="meny">
    <h2> DROPPDOWN INFO HER</h2>
    
    </div>



    <div class="footer">
    <h2> Nav Kontakt Informasjon</h2>
    <h4>${infonav()}</h4>
    
    </div>

  


    `;}