const tareaInput = document.getElementById('tareas-para-poner');
const boton = document.getElementById('boton');
const lista = document.getElementById('lista');


boton.addEventListener('click', function() {
    const tareaTexto = tareaInput.value;
    if (tareaTexto === '') return; 
    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tareaTexto;

    
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.className = 'eliminar-btn';

    
    eliminarBtn.addEventListener('click', function() {
        lista.removeChild(nuevaTarea); 
    });

    
    nuevaTarea.appendChild(eliminarBtn);

    
    lista.appendChild(nuevaTarea);

    
    tareaInput.value = '';

    nuevaTarea.style.marginTop = '10px'; 
    nuevaTarea.style.color = 'white'; 
    
    
    lista.style.listStyleType = 'none'; 
    lista.style.marginTop = '200px';
    lista.style.fontFamily = 'Coursera'; 
    lista.style.fontSize = '50px';

    
    boton.style.borderRadius = '20px';
    boton.style.marginLeft = '50px';
    boton.style.width = '100px'; 
    boton.style.height = '40px';
});



