document.getElementById("form").addEventListener("submit", myfn);
let arr = JSON.parse(localStorage.getItem("myloc"))||[];

function myfu(elem){
   elem.preventDefault() 

   myobj = {
       name:form.name.value,
       email:form.email.value,
       password: from.pass.value,

   }
   arr.push(myobj)
   localStorage.setItem("myloc", JSON.stringify(arr))
   
}