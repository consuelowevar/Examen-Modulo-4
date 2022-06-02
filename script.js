
var inputPrincipal = document.querySelector('.input');
let botonAgregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');

class Item {
    // argumento de nuevaTarea sera el valor del input 
    constructor(inputPrincipalValue) { 
        this.crearDiv(inputPrincipalValue)
        // this.crearDiv(nuevaTarea)
    };
    crearDiv(nuevaTarea) {
        console.log('dentro del metodo');

        var inputItem = document.createElement('input');
        inputItem.setAttribute('type', 'text');
        inputItem.disabled = true;
        inputItem.classList.add('item-input');
        inputItem.value = nuevaTarea;
        var newDiv = document.createElement('div');
        newDiv.classList.add('item');

        //Creación botones
        var botonEditar = document.createElement('button');
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
        botonEditar.classList.add('boton-editar');

        var botonRemover = document.createElement('button');
        botonRemover.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        botonRemover.classList.add('boton-remover');
        //Agregar todas la nuevos tags a html
        newDiv.appendChild(inputItem);
        newDiv.appendChild(botonEditar);
        newDiv.appendChild(botonRemover);
        container.appendChild(newDiv);

        //comportamiento boton EDITAR
        botonEditar.addEventListener('click', function() {
            // input esta deshabilitado por defecto
            // 1. Se edita el value input
            // 2. Se cambia el icono
            if (inputItem.disabled !== true) {
                inputItem.disabled = true;
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>';

            } else { 
                inputItem.disabled = false;
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
            }
        });
        //comportamiento boton REMOVER
        botonRemover.addEventListener('click', function() {
            //eliminar inputTarea y botones
            newDiv.removeChild(inputItem);
            newDiv.removeChild(botonEditar);
            newDiv.removeChild(botonRemover);
        });

    }
}

function chequearInput () {
    
    //si el input de nueva tarea tiene un valor, entonces...
    //instanciar un objeto de tipo Item y ..
    //pasarle al contrustor ese valor
    
    if (inputPrincipal.value) {

        var newInput = new Item (inputPrincipal.value)
        console.log('hola')

        inputPrincipal.value = '';
    }
};

botonAgregar.addEventListener('click', function(){
    chequearInput();
});


//instancia nueva de tarea

// var tareaNueva = new Item('hacer cama');
// var tareaDos = new Item('hacer baño');

// tareaNueva();
// tareaDos()

