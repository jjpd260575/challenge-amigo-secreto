// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios al inicio y al final

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar nombre a la lista de amigos
    listaAmigos.push(nombre);

    // Actualizar la lista visible
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = '';
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpiar contenido anterior

    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo; // Mostrar el nombre
        ul.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Agrega al menos un amigo para realizar el sorteo.');
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSeleccionado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSeleccionado}</strong> 🎉</li>`;
}
