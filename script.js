// --- Dati (come già avevamo) ---
const attivitaPerPiano = {
  terra: {
    nome: "Piano Terra",
    classi: [
      ["1A AFM","Laboratorio di Fotografia Digitale","Introduzione alla fotografia e alla post-produzione."],
      ["1B AFM","Torneo di Scacchi","Competizione a eliminazione diretta tra studenti."],
      ["1C INF","eSports Room","Tornei di FIFA, Rocket League e Brawl Stars."],
      ["2A AFM","Cineforum","Proiezione del film 'Inside Out 2' e discussione."],
      ["2B AFM","Karaoke & Musica","Attività musicale aperta a tutti."],
      ["2C INF","Coding Lab","Creazione di un mini-videogioco con Scratch."],
      ["3A AFM","Escape Room Matematica","Sfide logiche e rompicapi in team."],
      ["3B AFM","Marketing Experience","Simulazione di un progetto pubblicitario."],
      ["4A INF","Robotica con LEGO Spike","Montaggio e programmazione di robot."],
      ["5A AFM","Impresa Simulata","Workshop su start-up e imprenditorialità."]
    ]
  },
  primo: {
    nome: "Primo Piano",
    classi: [
      ["1A RIM","Giochi linguistici","Attività in lingua inglese interattiva."],
      ["1B RIM","Scrittura creativa","Componi brevi racconti e poesie."],
      ["2A RIM","Quiz Show di Cultura","Sfida a squadre a tempo."],
      ["2B RIM","Laboratorio di Economia","Giochi di simulazione economica."],
      ["3A RIM","Movie Club","Analisi e commento di un cortometraggio."],
      ["3B RIM","Teatro d’improvvisazione","Attività espressiva e creativa."],
      ["4A RIM","Debate in inglese","Public speaking e confronto di idee."],
      ["4B RIM","Social Media Lab","Analisi di campagne digitali."],
      ["5A RIM","Mock Interview","Simulazione di colloqui di lavoro."],
      ["5B RIM","Business Game","Gestione di un’impresa virtuale."]
    ]
  },
  secondo: {
    nome: "Secondo Piano",
    classi: [
      ["1A BIO","Esperimenti di Chimica","Attività di laboratorio con esperimenti sicuri."],
      ["1B BIO","Microscopio in Azione","Osservazioni al microscopio di cellule e tessuti."],
      ["2A BIO","Ambiente e Biodiversità","Laboratorio di ecologia."],
      ["2B BIO","Analisi delle Acque","Esperimenti su campioni locali."],
      ["3A BIO","Anatomia Umana","Studio interattivo del corpo umano."],
      ["3B BIO","Educazione Alimentare","Laboratorio su dieta e salute."],
      ["4A BIO","Chimica Verde","Materiali eco-sostenibili."],
      ["4B BIO","Biotecnologie e Futuro","Nuove tecnologie genetiche."],
      ["5A BIO","Ricerca Scientifica","Presentazioni degli studenti."],
      ["5B BIO","Scienze Forensi","Analisi simulata di indagini."]
    ]
  },
  terzo: {
    nome: "Terzo Piano",
    classi: [
      ["1A INF","Giochi di Logica","Quiz e problemi logici."],
      ["1B INF","Laboratorio Excel","Formule e grafici."],
      ["2A INF","Introduzione a Flowgorithm","Primo algoritmo."],
      ["2B INF","C++ Base","Programmazione per principianti."],
      ["3A INF","Database e SQL","Gestione dati e query."],
      ["3B INF","Sicurezza Informatica","Difendersi online."],
      ["4A INF","Web Design","HTML e CSS."],
      ["4B INF","App con JavaScript","App web interattive."],
      ["5A INF","AI e ChatGPT","Uso dell’AI a scuola."],
      ["5B INF","Progetti Finali","Esposizione dei progetti."]
    ]
  }
};

// --- Logica pagina PIANO ---
document.addEventListener("DOMContentLoaded", () => {
  const isPianoPage = document.querySelector("#tabellaAttivita");
  if (!isPianoPage) {
    // Siamo in index.html: non fare nulla (solo per cache-busting)
    console.log("Index ready"); // trigger deploy
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const pianoKey = urlParams.get("piano");

  if (!pianoKey || !attivitaPerPiano[pianoKey]) {
    // Se manca il parametro o è sbagliato, torna alla home
    window.location.href = "index.html";
    return;
  }

  const piano = attivitaPerPiano[pianoKey];
  document.getElementById("titoloPiano").textContent = piano.nome;

  const tbody = document.querySelector("#tabellaAttivita tbody");
  tbody.innerHTML = "";
  piano.classi.forEach(([classe, attivita, descr]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${classe}</td><td>${attivita}</td><td>${descr}</td>`;
    tbody.appendChild(tr);
  });
});

