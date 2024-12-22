var form=document.querySelector('.form_app')
var input=document.querySelectorAll('.form-control')
var alertform=document.querySelector('.alertform')


form.addEventListener('submit',function(e){
    input.forEach(ipt=>{
        if(ipt.value===""){
            e.preventDefault()
            ipt.style.border="1px solid red"
            alertform.style.display="flex"
        }else{
            ipt.style.border="1px solid #e7e9ed"
            alertform.style.display="none"
        }
    })

})

/**local */

var prix_form=document.querySelector('.prix')
var plan=document.querySelector(".plan")
var form_select=document.querySelector('.form-select')

prix_form.innerHTML=localStorage.getItem("prix")
console.log(localStorage.getItem("prix"))

if(localStorage.getItem("prix")==="2500"){
    plan.innerHTML="Plan Standard"
    form_select.options[0].innerHTML="Plan Standard"
    form_select.options[0].value="2500"
}

if(localStorage.getItem("prix")==="5000"){
    plan.innerHTML="Plan Premium"
    form_select.options[0].innerHTML="Plan Premium"
    form_select.options[0].value="5000"

}

if(localStorage.getItem("prix")==="10.000"){
    plan.innerHTML="Plan Professionnel"
    form_select.options[0].innerHTML="Plan Professionnel"
    form_select.options[0].value="10000"

}

/** */


