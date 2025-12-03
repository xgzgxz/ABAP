document.addEventListener("DOMContentLoaded", () => {
  const kapitelNamen = {
    1: "Grundlagen & Basissyntax",
    2: "Datentypen, Texte & Debugging",
    3: "Ablaufsteuerung (Bedingungen & Schleifen)",
    4: "Laufzeitfehler & Fehlerbehandlung",
    5: "Datenbankzugriff & Modularisierung"
  };
  const alleQuizFragen = [
    // --- Kapitel 1: Grundlagen der ABAP-Programmierung ---
    {
      question: "Welche Anweisung wird verwendet, um eine einfache Ausgabe in einem klassischen ABAP-Report zu erzeugen?",
      options: ["WRITE", "DISPLAY", "OUTPUT", "PRINT"],
      correct: [0],
      explanation: "Die `WRITE`-Anweisung wird für die klassische Listenausgabe verwendet. Jede ABAP-Anweisung endet mit einem Punkt.",
      chapter: 1
    },
    {
      question: "Wie leitet man einen Kettensatz in ABAP ein und wie trennt man die Anweisungsteile?",
      options: [
        "Einleitung mit Doppelpunkt (:), Trennung mit Komma (,)",
        "Einleitung mit Semikolon (;), Trennung mit Komma (,)",
        "Einleitung mit Komma (,), Trennung mit Doppelpunkt (:)",
        "Einleitung mit Bindestrich (-), Trennung mit Semikolon (;)"
      ],
      correct: [0],
      explanation: "Ein Kettensatz fasst Anweisungen mit gleichem Schlüsselwort zusammen. Er beginnt mit einem Doppelpunkt (:) nach dem Schlüsselwort, und die Teile werden durch Kommas (,) getrennt.",
      chapter: 1
    },
    {
      question: "Welches Schlüsselwort wird verwendet, um eine Eingabevariable auf einem Selektionsbild zu deklarieren?",
      options: ["PARAMETERS", "INPUT", "VARIABLES", "SELECT-OPTIONS"],
      correct: [0],
      explanation: "Das Schlüsselwort `PARAMETERS` deklariert eine einzelne Eingabevariable auf dem Selektionsbild.",
      chapter: 1
    },
    {
      question: "Wie kommentiert man eine ganze Zeile in ABAP aus?",
      options: [
        "Mit einem Stern (*) am Zeilenanfang",
        "Mit einem Anführungszeichen (\") am Zeilenanfang",
        "Mit // am Zeilenanfang",
        "Mit -- am Zeilenanfang"
      ],
      correct: [0],
      explanation: "Ein Stern (*) am Anfang einer Zeile macht die gesamte Zeile zu einem Kommentar. Ein Anführungszeichen (\") kommentiert den Rest der Zeile aus.",
      chapter: 1
    },

    // --- Kapitel 2: Quelltext schreiben & Debuggen ---
    {
      question: "Welcher ABAP-Datentyp wird typischerweise für Ganzzahlen verwendet?",
      options: ["I", "P", "N", "STRING"],
      correct: [0],
      explanation: "Der Datentyp `I` steht für Integer und wird für Ganzzahlen verwendet.",
      chapter: 2
    },
    {
      question: "Wozu dienen Textsymbole in ABAP-Programmen?",
      options: [
        "Um Programme mehrsprachig zu gestalten",
        "Um Konstanten zu definieren",
        "Um Systemvariablen zu speichern",
        "Um den Quelltext zu formatieren"
      ],
      correct: [0],
      explanation: "Textsymbole werden verwendet, um Textliterale aus dem Code auszulagern. Dies ermöglicht die einfache Übersetzung von Programmoberflächen.",
      chapter: 2
    },
    {
      question: "Welche Systemvariable enthält das aktuelle Datum des Applikationsservers?",
      options: ["SY-DATUM", "SY-UZEIT", "SY-UNAME", "SY-DATE"],
      correct: [0],
      explanation: "`SY-DATUM` enthält das aktuelle Serverdatum. `SY-UZEIT` enthält die Uhrzeit und `SY-UNAME` den Benutzernamen.",
      chapter: 2
    },
    {
      question: "Wie startet man den ABAP Debugger im 'klassischen' Modus, bevor ein Programm ausgeführt wird?",
      options: [
        "Durch Eingabe von /h in das Befehlsfeld",
        "Durch Drücken der F9-Taste",
        "Durch Setzen eines Watchpoints",
        "Durch die Anweisung `DEBUG-MODE ON.`"
      ],
      correct: [0],
      explanation: "Die Eingabe von `/h` im OK-Code-Feld aktiviert den Debugger für die nächste ausgeführte Aktion.",
      chapter: 2
    },
    {
      question: "Welcher Befehl wird verwendet, um zwei Zeichenketten zu einer neuen zu verketten?",
      options: ["CONCATENATE", "JOIN", "MERGE", "COMBINE"],
      correct: [0],
      explanation: "Die Anweisung `CONCATENATE` wird verwendet, um mehrere Zeichenketten zu einer einzigen zusammenzufügen.",
      chapter: 2
    },

    // --- Kapitel 3: Ablaufsteuerungsstrukturen ---
    {
      question: "Welche Anweisung wird verwendet, um eine bedingte Verzweigung zu implementieren?",
      options: ["IF ... ELSEIF ... ELSE ... ENDIF.", "CASE ... WHEN ... ENDCASE.", "SWITCH ... CASE ... ENDSWITCH.", "CHECK ... ENDCHECK."],
      correct: [0, 1],
      explanation: "Sowohl `IF`-Strukturen als auch `CASE`-Anweisungen sind Standardmittel für bedingte Logik in ABAP.",
      chapter: 3
    },
    {
      question: "Welche Schleifenart prüft die Bedingung vor jedem Durchlauf?",
      options: ["WHILE ... ENDWHILE.", "DO ... ENDDO.", "LOOP AT ... ENDLOOP.", "REPEAT ... UNTIL."],
      correct: [0],
      explanation: "Die `WHILE`-Schleife prüft die Bedingung, bevor der Schleifenkörper ausgeführt wird. `DO` ist eine Zähl- oder Endlosschleife.",
      chapter: 3
    },
    {
      question: "Welche Systemvariable zählt die Schleifendurchläufe?",
      options: ["SY-INDEX", "SY-TABIX", "SY-LOOP", "SY-COUNT"],
      correct: [0],
      explanation: "`SY-INDEX` enthält die Anzahl der bisherigen Durchläufe für `DO`- und `WHILE`-Schleifen. `SY-TABIX` ist der Index bei `LOOP AT` über interne Tabellen.",
      chapter: 3
    },

    // --- Kapitel 4: Laufzeitfehler & Fehlerbehandlung ---
    {
      question: "In welcher Transaktion können ABAP-Kurzdumps (Laufzeitfehler) analysiert werden?",
      options: ["ST22", "SE80", "SM37", "SE11"],
      correct: [0],
      explanation: "Die Transaktion `ST22` (Dump-Analyse) ist das Standardwerkzeug zur Analyse von Laufzeitfehlern.",
      chapter: 4
    },
    {
      question: "Welcher Nachrichtentyp stoppt die Verarbeitung und zeigt eine Meldung in der Statuszeile an, die eine Benutzereingabe erfordert?",
      options: ["E (Error)", "I (Information)", "W (Warning)", "S (Success)"],
      correct: [0],
      explanation: "Eine Fehlermeldung (`E`) unterbricht die Verarbeitung und erfordert eine Aktion vom Benutzer, während eine Informationsmeldung (`I`) das Programm nach Bestätigung fortsetzt oder beendet.",
      chapter: 4
    },

    // --- Kapitel 5: Zusätzliche Programmiertechniken ---
    {
      question: "Mit welcher Open-SQL-Anweisung liest man einen einzelnen Datensatz aus einer Datenbanktabelle?",
      options: ["SELECT SINGLE ...", "SELECT ONE ...", "READ TABLE ...", "GET ..."],
      correct: [0],
      explanation: "`SELECT SINGLE` ist der Befehl, um genau einen Satz anhand einer `WHERE`-Bedingung zu lesen. `READ TABLE` ist für interne Tabellen.",
      chapter: 5
    },
    {
      question: "Was prüft man nach einer `SELECT`-Anweisung, um festzustellen, ob der Datenbankzugriff erfolgreich war?",
      options: ["SY-SUBRC", "SY-DBCNT", "SY-ERROR", "SY-MSGNO"],
      correct: [0],
      explanation: "`SY-SUBRC` wird auf 0 gesetzt, wenn der Zugriff erfolgreich war. Ein Wert ungleich 0 (oft 4) signalisiert, dass nichts gefunden wurde.",
      chapter: 5
    },
    {
      question: "Welche Technik der Modularisierung wird in Transaktion SE37 gepflegt und kann über RFC auch von externen Systemen aufgerufen werden?",
      options: ["Funktionsbausteine", "Methoden von Klassen", "Unterprogramme (FORM)", "Includes"],
      correct: [0],
      explanation: "Funktionsbausteine (Function Modules) werden in SE37 verwaltet und können als Remote Function Call (RFC) fähig markiert werden.",
      chapter: 5
    },
    {
      question: "Welche Parameterarten gibt es in der Schnittstelle eines Funktionsbausteins?",
      options: ["Import", "Export", "Changing", "Tables", "Exceptions"],
      correct: [0, 1, 2, 3, 4],
      explanation: "Eine Funktionsbaustein-Schnittstelle besteht aus Import- (Eingabe), Export- (Ausgabe), Changing- (Ein-/Ausgabe), Tables- (für interne Tabellen) und Exceptions-Parametern (Fehlerbehandlung).",
      chapter: 5
    }
  ];
let aktiveFragen = [];
  let falschBeantworteteFragen = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let aktuelleAntwortMap = [];
  
  // DOM-Elemente
  const quizStartScreenEl = document.getElementById("quiz-start-screen");
  const quizContainerEl = document.getElementById("quiz-container");
  const quizEndScreenEl = document.getElementById("quiz-end-screen");
  
  const startQuizBtn = document.getElementById("start-quiz-btn");
  const checkAnswerBtn = document.getElementById("check-answer-btn");
  const nextQuestionBtn = document.getElementById("next-question-btn");
  const repeatIncorrectBtn = document.getElementById("repeat-incorrect-btn");
  const restartQuizBtn = document.getElementById("restart-quiz-btn");

  const questionCounterEl = document.getElementById("question-counter");
  const questionTextEl = document.getElementById("question-text");
  const answerOptionsEl = document.getElementById("answer-options");
  const feedbackTextEl = document.getElementById("feedback-text");
  const explanationTextEl = document.getElementById("explanation-text");
  const quizScoreEl = document.getElementById("quiz-score");
  const progressBar = document.getElementById("progress-bar");
  
  const shuffleQuestionsToggle = document.getElementById("shuffle-questions-toggle");
  const shuffleAnswersToggle = document.getElementById("shuffle-answers-toggle");
  
  // DOM-Elemente für Kapitelauswahl
  const selectAllChaptersToggle = document.getElementById("select-all-chapters");
  const chapterOptionsContainer = document.getElementById("chapter-options-container");
  const deselectAllBtn = document.getElementById("deselect-all-chapters-btn");

  // NEUER Key für LocalStorage (um Konflikte mit anderen Quizzen zu vermeiden)
  const quizStorageKey = "abapGrundlagenQuizChapterSelection_v1";
  
  // --- Logik zur Kapitelauswahl ---
  function setupChapterSelection() {
    const chapters = [...new Set(alleQuizFragen.map(q => q.chapter))].sort((a, b) => a - b);
    chapterOptionsContainer.innerHTML = '';

    // NEU: Gespeicherte Auswahl laden
    let savedChapters = null;
    try {
      const saved = localStorage.getItem(quizStorageKey);
      if (saved) {
        savedChapters = JSON.parse(saved);
      }
    } catch (e) {
      console.error("Fehler beim Laden der Kapitelauswahl:", e);
      savedChapters = null;
    }
    // ENDE NEU

    chapters.forEach(chapter => {
      const isChecked = savedChapters ? savedChapters.includes(chapter) : true; // Standardmäßig an, wenn nichts gespeichert ist
      const chapterName = kapitelNamen[chapter] || `Kapitel ${chapter}`;
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('chapter-option');
      optionDiv.innerHTML = `
        <input type="checkbox" id="chapter-${chapter}" class="chapter-checkbox" value="${chapter}" ${isChecked ? 'checked' : ''}>
        <label for="chapter-${chapter}">${chapterName}</label>
      `;
      chapterOptionsContainer.appendChild(optionDiv);
    });

    const chapterCheckboxes = document.querySelectorAll('.chapter-checkbox');

    // NEU: "Alle auswählen" an den geladenen Status anpassen
    const allChecked = [...chapterCheckboxes].every(box => box.checked);
    selectAllChaptersToggle.checked = allChecked;
    // ENDE NEU

    // Event Listener für "Alle Kapitel"
    selectAllChaptersToggle.addEventListener('change', () => {
      chapterCheckboxes.forEach(cb => {
        cb.checked = selectAllChaptersToggle.checked;
      });
    });

    // Event Listener für einzelne Kapitel-Checkboxen
    chapterCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const allAreChecked = [...chapterCheckboxes].every(box => box.checked);
        selectAllChaptersToggle.checked = allAreChecked;
      });
    });
  }

  // --- Hilfsfunktionen ---
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function updateProgressBar() {
    if (!progressBar || aktiveFragen.length === 0) return;
    const progressPercentage = (currentQuestionIndex / aktiveFragen.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
  
  // --- Quiz-Ablauf ---
  function initializeQuiz(fragen) {
      aktiveFragen = [...fragen];

      if (aktiveFragen.length === 0) {
        alert("Bitte wähle mindestens ein Kapitel aus, um das Quiz zu starten.");
        return;
      }

      if (shuffleQuestionsToggle.checked) {
        shuffleArray(aktiveFragen);
      }
      currentQuestionIndex = 0;
      score = 0;
      falschBeantworteteFragen = [];

      quizStartScreenEl.style.display = "none";
      quizEndScreenEl.style.display = "none";
      quizContainerEl.style.display = "block";
      
      loadQuestion();
  }

  function loadQuestion() {
    feedbackTextEl.textContent = "";
    explanationTextEl.style.display = "none";
    checkAnswerBtn.style.display = "block";
    nextQuestionBtn.style.display = "none";
    answerOptionsEl.innerHTML = "";

    updateProgressBar();

    if (currentQuestionIndex >= aktiveFragen.length) {
      showFinalScore();
      return;
    }

    const currentQuestion = aktiveFragen[currentQuestionIndex];
    questionCounterEl.textContent = `Frage ${currentQuestionIndex + 1} von ${aktiveFragen.length}`;
    questionTextEl.textContent = currentQuestion.question;

    let antwortOptionen = currentQuestion.options.map((text, index) => ({
        text: text,
        originalIndex: index
    }));

    if (shuffleAnswersToggle.checked) {
        shuffleArray(antwortOptionen);
    }
    
    aktuelleAntwortMap = antwortOptionen;

    antwortOptionen.forEach((option, displayIndex) => {
        const optionId = `option-${displayIndex}`;
        const optionEl = document.createElement("div");
        optionEl.classList.add("answer-option");
        optionEl.innerHTML = `
            <input type="checkbox" id="${optionId}" name="answer">
            <label for="${optionId}">${option.text}</label>
        `;
        
        optionEl.addEventListener('click', (event) => {
            if (event.target.tagName === 'LABEL') {
                event.preventDefault();
            }
            const checkbox = optionEl.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
        });
        
        answerOptionsEl.appendChild(optionEl);
    });
  }

  function checkAnswer() {
    const currentQuestion = aktiveFragen[currentQuestionIndex];
    const checkboxes = document.querySelectorAll('input[name="answer"]');
    const gewaehlteOriginalIndizes = [];

    checkboxes.forEach((cb, displayIndex) => {
      if (cb.checked) {
        gewaehlteOriginalIndizes.push(aktuelleAntwortMap[displayIndex].originalIndex);
      }
    });

    const isCorrect =
      JSON.stringify(gewaehlteOriginalIndizes.sort()) ===
      JSON.stringify(currentQuestion.correct.sort());

    checkboxes.forEach((cb, displayIndex) => {
        const label = cb.nextElementSibling;
        const originalIndex = aktuelleAntwortMap[displayIndex].originalIndex;

        if (currentQuestion.correct.includes(originalIndex)) {
            label.style.color = "#27ae60";
            label.style.fontWeight = "bold";
        } 
        else if (cb.checked) {
            label.style.color = "#c0392b";
        }
        cb.disabled = true;
        cb.parentElement.style.pointerEvents = "none";
    });

    if (isCorrect) {
      feedbackTextEl.textContent = "Richtig!";
      feedbackTextEl.style.color = "#27ae60";
      score++;
    } else {
      feedbackTextEl.textContent = "Leider nicht ganz richtig.";
      feedbackTextEl.style.color = "#c0392b";
      falschBeantworteteFragen.push(currentQuestion);
    }

    if (currentQuestion.explanation) {
        explanationTextEl.innerHTML = `<b>Erklärung:</b> ${currentQuestion.explanation}`;
        explanationTextEl.style.display = "block";
    }

    checkAnswerBtn.style.display = "none";
    nextQuestionBtn.style.display = "block";
  }

  function showFinalScore() {
    quizContainerEl.style.display = "none";
    quizEndScreenEl.style.display = "block";
    quizScoreEl.textContent = `${score} von ${aktiveFragen.length} Fragen richtig beantwortet.`;

    if (falschBeantworteteFragen.length > 0) {
        repeatIncorrectBtn.style.display = "inline-block";
    } else {
        repeatIncorrectBtn.style.display = "none";
        quizScoreEl.textContent += " Super gemacht!";
    }

    if (progressBar) progressBar.style.width = "100%";
  }
  
  function showStartScreen() {
      quizContainerEl.style.display = "none";
      quizEndScreenEl.style.display = "none";
      quizStartScreenEl.style.display = "block";
      if(progressBar) progressBar.style.width = "0%";
      setupChapterSelection();
  }

  // --- Event-Listener für Buttons ---
  startQuizBtn.addEventListener("click", () => {
    const selectedChapters = [];
    document.querySelectorAll('.chapter-checkbox:checked').forEach(cb => {
        selectedChapters.push(parseInt(cb.value, 10));
    });
    
    // NEU: Auswahl im LocalStorage speichern
    try {
      localStorage.setItem(quizStorageKey, JSON.stringify(selectedChapters));
    } catch (e) {
      console.warn("Could not save chapter selection:", e);
    }
    // ENDE NEU

    const fragenFuerQuiz = alleQuizFragen.filter(frage => selectedChapters.includes(frage.chapter));
    initializeQuiz(fragenFuerQuiz);
  });

  checkAnswerBtn.addEventListener("click", checkAnswer);

  nextQuestionBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
  });

  restartQuizBtn.addEventListener("click", showStartScreen);

  repeatIncorrectBtn.addEventListener("click", () => {
      if (falschBeantworteteFragen.length > 0) {
          initializeQuiz(falschBeantworteteFragen);
      }
  });
  
  // Event-Listener für "Auswahl aufheben"
  if (deselectAllBtn) {
    deselectAllBtn.addEventListener("click", () => {
        selectAllChaptersToggle.checked = false;
        document.querySelectorAll('.chapter-checkbox').forEach(cb => {
            cb.checked = false;
        });
    });
  }

  // Initialer Aufruf
  showStartScreen();
});
