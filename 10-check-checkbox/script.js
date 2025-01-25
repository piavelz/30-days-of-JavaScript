const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e){
    let inBetween = false;

if(e.shiftKey && this.checked){
    checkboxs.forEach(checkbox =>{
        (checkbox === this || checkbox === lastChecked? inBetween = !inBetween : '');   
        (inBetween? checkbox.checked = true : '');
    })
}
lastChecked = this;
}


checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));



