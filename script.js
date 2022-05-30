const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        remomveActiveClasses()
        panel.classList.add('active')
    })
})

function remomveActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}