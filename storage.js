var btnprix=document.querySelectorAll('.cta-btn')



btnprix.forEach(btn=>{
    btn.addEventListener('click',function(){
    
     var prix=0
     var parent=btn.parentNode
     var prix_somme = parent.querySelector('.prix')
     prix=prix_somme.innerHTML
     localStorage.setItem("prix", prix)
     console.log(localStorage)
    })
})
