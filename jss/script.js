// Elementi del DOM
const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const email = document.getElementById("email");
const tipoLavoro = document.getElementById("tipo-di-lavoro");
const textArea = document.getElementById("text-area");
const codicePromozionale = document.getElementById("codice-promozionale");

console.log(nome, cognome, email, tipoLavoro, textArea, codicePromozionale);

let datiUtente = [] ;



// Funzione per aggiornare i dati dell'utente
function aggiornaDatiUtente() {
    datiUtente.nome = nome.value;
    datiUtente.cognome = cognome.value;
    datiUtente.email = email.value;
    datiUtente.tipoLavoro = tipoLavoro.value;
    datiUtente.messaggio = textArea.value;
    datiUtente.codicePromozionale = codicePromozionale.value;

    console.log("Dati utente aggiornati:", datiUtente);
}

// Aggiungi un listener per aggiornare i dati ogni volta che un campo cambia
[nome, cognome, email, tipoLavoro, textArea, codicePromozionale].forEach(element => {
    element.addEventListener("input", aggiornaDatiUtente);
});




const form = document.querySelector("form");
console.log(form);



form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tipoLavoro = document.getElementById("tipo-di-lavoro").value;
    
    // Se non è stato selezionato un tipo di lavoro, esci dalla funzione
    if (!tipoLavoro) {
        console.log("Seleziona un tipo di lavoro!");
        return;
    }

    const oreLavoro = 20;

    // Imposta la tariffa in base al tipo di lavoro selezionato
    let tariffa = 0;
    if (tipoLavoro === "1") {
        tariffa = 20.50; // Backend Development
    } else if (tipoLavoro === "2") {
        tariffa = 15.30; // Frontend Development
    } else if (tipoLavoro === "3") {
        tariffa = 33.60; // Project Analysis
    }

    // Calcola il totale
    let totale = tariffa * oreLavoro;
    let totalearrotondato = totale.toFixed(2);

    // Mostra il risultato nel paragrafo "importo-prezzo"
    const risultatoPrezzo = document.getElementById("importo-prezzo");
    risultatoPrezzo.textContent = `€ ${totalearrotondato}`;
   
   
    // Reset del form dopo invio
    const selectTipoLavoro = document.getElementById("tipo-di-lavoro");
    selectTipoLavoro.selectedIndex = 0

    const inputs = document.querySelectorAll("input[type='text'], input[type='email']");
    inputs.forEach(input => input.value = '');

    const textarea = document.getElementById("text-area");
    textarea.value = '';

    const codicePromozionale = document.getElementById("codice-promozionale");
    codicePromozionale.value = '';

    const privacyPolicy = document.getElementById("privacy-policy");
    privacyPolicy.checked = false;
});












