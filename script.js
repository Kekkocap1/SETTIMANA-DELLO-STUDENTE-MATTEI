// Dati di esempio per ogni piano
const attivitaPerPiano = {
  terra: {
    nome: "Piano Terra",
    classi: [
      ["1A AFM", "Laboratorio di Fotografia Digitale", "Introduzione alla fotografia e alla post-produzione."],
      ["1B AFM", "Torneo di Scacchi", "Competizione a eliminazione diretta tra studenti."],
      ["1C INF", "eSports Room", "Tornei di FIFA, Rocket League e Brawl Stars."],
      ["2A AFM", "Cineforum", "Proiezione del film 'Inside Out 2' e discussione."],
      ["2B AFM", "Karaoke & Musica", "Attività musicale aperta a tutti."],
      ["2C INF", "Coding Lab", "Creazione di un mini-videogioco con Scratch."],
      ["3A AFM", "Escape Room Matematica", "Sfide logiche e rompicapi in team."],
      ["3B AFM", "Marketing Experience", "Simulazione di un progetto pubblicitario."],
      ["4A INF", "Robotica con LEGO Spike", "Montaggio e programmazione di robot."],
      ["5A AFM", "Impresa Simulata", "Workshop su start-up e imprenditorialità."]
    ]
  },
  primo: {
    nome: "Primo Piano",
    classi: [
      ["1A RIM", "Giochi linguistici", "Attività in lingua inglese interattiva."],
      ["1B RIM", "Laboratorio di scrittura creativa", "Componi brevi racconti e poesie."],
      ["2A RIM", "Quiz Show di Cultura Generale", "Sfida a squadre a tempo."],
      ["2B RIM", "Laboratorio di Economia", "Giochi di simulazione economica."],
      ["3A RIM", "Movie Club", "Analisi e commento di un cortometraggio."],
      ["3B RIM", "Teatro d’improvvisazione", "Attività espressiva e creativa."],
      ["4A RIM", "Dibattito in inglese", "Public speaking e confronto di idee."],
      ["4B RIM", "Social Media Lab", "Analisi di campagne e comunicazione online."],
      ["5A RIM", "Mock Interview", "Simulazione di colloqui di lavoro."],
      ["5B RIM", "Business Game", "Gestione di un’impresa virtuale."]
    ]
  },
  secondo: {
    nome: "Secondo Piano",
    classi: [
      ["1A BIO", "Esperimenti di Chimica", "Attività di laboratorio con esperimenti sicuri."],
      ["1B BIO", "Microscopio in Azione", "Osservazioni al microscopio di cellule e tessuti."],
      ["2A BIO", "Ambiente e Biodiversità", "Laboratorio di ecologia e tutela ambientale."],
      ["2B BIO", "Analisi delle Acque", "Esperimenti pratici su campioni locali."],
      ["3A BIO", "Anatomia Umana", "Studio interattivo del corpo umano."],
      ["3B BIO", "Educazione Alimentare", "Laboratorio su dieta e salute."],
      ["4A BIO", "Chimica Verde", "Esperimenti con materiali eco-sostenibili."],
      ["4B BIO", "Biotecnologie e Futuro", "Discussione su nuove tecnologie genetiche."],
      ["5A BIO", "Ricerca Scientifica", "Presentazioni di esperimenti degli studenti."],
      ["5B BIO", "Scienze Forensi", "Analisi simulata di indagini biologiche."]
    ]
  },
  terzo: {
    nome: "Terzo Piano",
    classi: [
      ["1A INF", "Giochi di Logica", "Risoluzione di quiz e problemi logici."],
      ["1B INF", "Laboratorio Excel", "Esercizi su formule e grafici."],
      ["2A INF", "Introduzione a Flowgorithm", "Crea il tuo primo algoritmo."],
      ["2B INF", "C++ Base", "Programmazione per principianti."],
      ["3A INF", "Database e SQL", "Gestione di dati e query."],
      ["3B INF", "Sicurezza Informatica", "Difendersi dagli attacchi online."],
      ["4A INF", "Web Design", "Crea una pagina HTML e CSS."],
      ["4B INF", "App con JavaScript", "Introduzione alle app web interattive."],
      ["5A INF", "AI e ChatGPT", "Come usare l’intelligenza artificiale a scuola."],
      ["5B INF", "Progetti Finali", "Esposizione dei progetti di classe."]
    ]
  }
};

// Carica i dati dinamici nella pagina del piano
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pianoKey = urlParams.get("piano");
  const piano = attivitaPerPiano[pianoKey];

  if (piano) {
    document.getElementById("titoloPiano").textContent = piano.nome;
    const tbody = document.querySelector("#tabellaAttivita tbody");
    piano.classi.forEach(riga => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${riga[0]}</td><td>${riga[1]}</td><td>${riga[2]}</td>`;
      tbody.appendChild(tr);
    });
  } else {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:3rem'>Piano non trovato</h2>";
  }
});
