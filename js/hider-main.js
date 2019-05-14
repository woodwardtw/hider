//for a future instructional piece that helps people see the div to make sure they get the right ID

// function hoverLight(div){
//    div.addEventListener("mouseover", function( event ) {   
//   // highlight the mouseover target
//   event.target.style.backgroundColor = "orange";
//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.backgroundColor = "";
//   }, 1500);
// }, false);
// }

// function clickId(div){
//    div.addEventListener("click", function( event ) {       
//      let theDiv = document.getElementById(event.target.id);
//      theDiv.classList.toggle('remove')
//      console.log(event.target.id)
//    })
// }


//make sure everything has an ID
function idEverything(div, index){
   if (div.id){   
    console.log(div.id);//got an id? great moving on . . . 
  } else {
    div.id = 'newId-'+index; //no id? well that's not an option
  }
}



window.onload = function(){
  const urlParams = new URLSearchParams(window.location.search);
  const hide = urlParams.get('hide');
  let hideArray  = hide.split(',');
  
  hideArray.forEach(function(el){
    document.getElementById(el).style.display = 'none' // was using add class but moved to inline for more aggression
  })
  activateAllDivs();
}

function activateAllDivs(){
	allDivs = document.querySelectorAll('div')

	allDivs.forEach(function(div, index) {
	 //hoverLight(div)
	 idEverything(div, index)
	 //clickId(div)
	});
}