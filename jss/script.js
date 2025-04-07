const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (event) {
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
    let totalebase = tariffa * oreLavoro;

    // Calcolo sconto
    const codiciValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    const codicePromozionaleTagliato = document.getElementById("codice-promozionale").value.trim();

    let sconto = 0;

    for (let i = 0; i < codiciValidi.length; i++) {
        if (codiciValidi[i] === codicePromozionaleTagliato) {
            sconto = totalebase * 0.25;  // Applica il 25% di sconto
            break;  // Esce dal ciclo se il codice è valido
        }
    }
    // Calcola il totale finale dopo aver applicato eventualmente lo sconto
    let totale = totalebase - sconto;  // Applica lo sconto al totale base
    let totalearrotondato = totale.toFixed(2);

    // Mostra il risultato nel paragrafo "importo-prezzo"
    const risultatoPrezzo = document.getElementById("importo-prezzo");
    risultatoPrezzo.textContent = `€ ${totalearrotondato}`;

    if (sconto === 0 && codicePromozionaleTagliato !== "") {
        alert("CODICE ERRATO");

    }
     

// Data la possibilità dell'utente di non inserire un codice promozionale ho optato per un'alert, avvisa l'utente di aver inserito un codice errato, senza però bloccare l'invio del form. Ho predisposto comunque la possibilità di far apparire un messaggio per avvisare l'utente con il relativo ciclo if. Il messagio mi sembrava incoerente a livello estetico dato il reset di tutti gli altri campi del form. Ho ipotizzato varie soluzioni a seconda delle necessità e ho lasciato questo commento se ci fosse la necessità di cambiare qualcosa.


    // const messaggioCodice = document.getElementById("messaggio-codice");

    // if (codicePromozionaleTagliato === "") {
    //     messaggioCodice.textContent = "";
    // } else if (sconto > 0) {
    //     messaggioCodice.textContent = "Codice valido!";
    // } else {
    //     messaggioCodice.textContent = "Codice errato!";
    //     alert(`CODICE ERRATO`)
    // }

    // Reset del form dopo invio in caso il form ad ogni invio ricominci da zero (opzione che posso eliminare e lasciare i valori inseriti in pagina) potevo usare .style.display (e spostare il risultato fuori dal form) ma per motivi didattici ho preferito farlo manualmente.
    
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












