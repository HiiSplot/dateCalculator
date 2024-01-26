// Convertir la date au format français
const today = new Date().toISOString().split("T")[0];

// Assigner la date today à la valeur de start_date
start_date.value = today;

// Rendre impossible la réservation à une date ultérieure à celle du jour
start_date.min = today;

// Ajouter J+1 à la date de départ
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Convertir au format départ
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// Ajouter un évènement pour que la date de départ change à J+1 en fonction de date de départ sélectionnée
start_date.addEventListener('change', () => {
    let day = new Date(start_date.value);

    if (end_date.value < start_date.value) {
       day.setDate(day.getDate() + 1);
       end_date.value = day.toISOString().split("T")[0];
    }
});

// Ajouter un évènement pour que la date de départ change à J-1 en fonction de date de fin sélectionnée (même logique)
end_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
    }
});

// Créer une fonction pour calculer le prix en fonction des nuitées sélectionnées
const bookingCalc = () => {
    let diffTime = Math.abs(new Date(end_date.value) - new Date(start_date.value)
    );
    // Soustraction qui récupère la différence entre les deux dates
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // Calcul le nombre de seconde en jour(s), à l'entier suppérieur

    total.textContent = diffDays * nightPrice.textContent;
    // Mulitplie le nombre de jours (diffDays) par le prix de la nuitée (nightPrice) et ajoute le résultat dans la balise span total
};

start_date.addEventListener('change', bookingCalc);
end_date.addEventListener('change', bookingCalc)
// Effectue la fonction à chaque changement dans l'input start ou end.

bookingCalc();
// Rappeler la fonction


function salutation(name) {
    alert('Bonjour ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Entrez votre nom.');
    callback(name);
  }
  
  processUserInput(salutation);