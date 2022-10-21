let work_section = document.querySelector('.mid_cards');
work_section.innerHTML=`
     <div class="works">
        <div class="project-image"><img class="image" src="./images/header/tonic.png" alt="my first project"></div>
        <div class="projects">
            <h2 class="project-tittle">Tonic</h2>
            <ul class="project-info">
                <li class="client">CANOPY</li>
                <li><img class="imgPoint" src="./images/header/Counter.png" alt="point"></li>
                <li>Back End Dev</li>
                <li><img class="imgPoint" src="./images/header/Counter.png" alt="point"></li>
                <li>2015</li>
            </ul>
            <p class="primary-text">A daily selection of privately personalized reads; no accounts or sign-ups
                required.</p>
            <ul class="categories">
                <li>html</li>
                <li class="ruby">Ruby on rails</li>
                <li>css</li>
                <li>javaScript</li>
            </ul><button class="button" id="1">See Project</button>
        </div>               
     </div>
 `
 let card_1=document.getElementById('1');
 
 function open_popup (){
      
    let popup_window= document.querySelector(".popUpWindow");
    popup_window.innerHTML = `
       <div class="container-popup">
          <div class="title-popup"> Facebook 360 </div>
          <a class="close_popup">  <img src="./images/header/cross_2.png">  </a>
       </div>
    
    `    


 }

 card_1.addEventListener('click',open_popup);

