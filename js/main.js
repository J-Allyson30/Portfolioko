//lighmode
function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  };

//text animation of name
const title = document.getElementById('title');
const text = "Jean Allyson Junsay";

const animateText = (text, element, intervalDuration) => {
  let count = 0;
  const interval = setInterval(() => {
    const part = text.substring(0, ++count);
    requestAnimationFrame(() => {
      element.textContent = part;
    });
    if (count === text.length) {
      clearInterval(interval);
    }
  }, intervalDuration);
};

animateText(text, title, 150);

//try natin para sa short intro keme [array]
let intro = ["Name: Jean Allyson S. Junsay", "Age: 22 years old", "Birthday: March 30, 2000"];
for(let index =0; index<intro.length;index++){
  let newLi = document.createElement ("li");
  let newText = document.createTextNode(intro[index]);
  newLi.appendChild(newText);
  document.getElementById("intro").appendChild(newLi);
}


//para sa education and skills tab 
  var tablinks = document.getElementsByClassName ("tab-links");
  var tabcontents = document.getElementsByClassName ("tab-contents");
  function opentab(tabname){
      for(tablink of tablinks){
          tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
          tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
  }


  //para sa received ng messages
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwq7TsrxK8xbFGX2AdVPT9Vhx5a_-jaf5dQmyK5CSCutLdDdNRY2US527Y-r6HTOsMlCg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById ("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="Message successfully sent"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000) 
        form.reset()
    })   
      .catch(error => console.error('Error!', error.message))
  })
  
//sidemenu pag nakamobile
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


  