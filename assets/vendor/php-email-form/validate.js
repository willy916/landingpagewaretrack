/**Form contactez-nous */
var form_contact=document.querySelector('.form_contact')
var ipt_contact=document.querySelectorAll('.ipt_contact')
var erreur_contact=document.querySelector('.erreur_contact')

form_contact.addEventListener('submit',function(e){
  ipt_contact.forEach(ipt=>{
     if(ipt.value===""){
       e.preventDefault()
       erreur_contact.style.display="flex"
       erreur_contact.innerHTML="Veuillez remplir les champs vides."
       ipt.style.border="1px solid red"
     }else{
      erreur_contact.style.display="none"
      erreur_contact.innerHTML=""
      ipt.style.borderColor="color-mix(in srgb, var(--default-color), transparent 80%)"
     }
  })
})







/**Newsletter */

var  form_newletter=document.querySelector('.form_newletter')
var ipt_newletter=document.querySelector('.ipt_newletter')
var error_message=document.querySelector('.erreurs_msg1')

form_newletter.addEventListener('submit',function(e){
  if(ipt_newletter.value===""){
    e.preventDefault()
    error_message.style.display="flex"
    error_message.innerHTML="Veuillez remplir ce champ, il est obligatoire."
  }else{
    error_message.innerHTML=""
    error_message.style.display="none"

  }
})