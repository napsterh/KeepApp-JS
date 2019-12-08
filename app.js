
function load() { 
    console.log();
    var el = document.getElementById("formTask"); 
    el.addEventListener("submit", guardarTarea(), false); 
  } 


function guardarTarea(){  
    let title = document.getElementById('title').value;
    let descripcion = document.getElementById('descripcion').value;
    
    const tarea = {
        title,      //title: title
        descripcion //descripcion : descripcion
    };
    
    if(localStorage.getItem('tareas') === null){
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }else {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    getTareas();

    // localStorage.setItem('tareas', JSON.stringify(tarea)); almacena en memoria local el objeto tarea
    // console.log(JSON.parse(localStorage.getItem('tareas'))); muestra lo almacenado en el storage despues de parcial el string a objeto
}
 
function getTareas(){
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    //console.log(tareas);
    let vistaTareas = document.getElementById('tareas');
    
    vistaTareas.innerHTML = '';

    for(let i = 0; i < tareas.length; i++){
        let title = tareas[i].title;
        let descripcion = tareas[i].descripcion;
        
        vistaTareas.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <p>${title} - ${descripcion}</p>
                <a class="btn btn-danger" onclick="eliminarTareas('${title}')">Eliminar</a>
            </div>
        </div>`;
    }
}

function eliminarTareas(title){
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    for(let i = 0; i < tareas.length; i++){
        if(tareas[i].title == title){
            tareas.splice(i, 1);
        }
    }
    localStorage.setItem('tareas', JSON.stringify(tareas));
    getTareas();
}

getTareas();

