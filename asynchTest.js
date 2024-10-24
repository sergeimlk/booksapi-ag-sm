function operationAsynchrone_1(callback) {
    console.log("Début de l'opération...");
    setTimeout(() => {
        console.log("Opération_1 terminée !");
        callback();
    }, 2000); // Simule une opération qui prend 2 secondes
}

function fin() {
    console.log("Je suis appelé après l'opération asynchrone.");
}

operationAsynchrone_1(fin); // Le callback est passé ici

