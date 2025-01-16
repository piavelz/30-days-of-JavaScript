const inputs = document.querySelectorAll('input');//array con los 3 inputs

function handleUpdate(){
    document.documentElement.style.setProperty(`--${this.name}`, this.value + (this.dataset.sizing || ''));//cambia el valor de la variable en css
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));//recorre el array y añade el evento change a cada input
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));//recorre el array y añade el evento change a cada input
