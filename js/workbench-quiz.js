document.addEventListener("DOMContentLoaded", () => {
  const kapitelNamen = {
    0: "Einführung & Setup",
    1: "Grundlagen & Architektur",
    2: "Entwicklungsumgebung (SE80/ADT)",
    3: "Datentypen & Datenwörterbuch",
    4: "Interne Tabellen",
    5: "Modularisierung",
    6: "Open SQL Grundlagen",
    7: "Selektionsbild & klassische Listen",
    8: "ALV (Simple/OO)",
    9: "Debugging & Fehlerbehandlung"
  };
  const alleQuizFragen = [
    // --- NEU: Kapitel 0: Einführung & Setup ---
    {
      question: "Welche Software-Komponenten müssen laut Einführungs-PDF installiert werden?",
      options: [
        "Java SE Development Kit 21.0.8",
        "SAPGUI for Java 8.10 Rev 1",
        "Microsoft .NET Framework",
          "SAP HANA Studio"
      ],
      correct: [0, 1],
      explanation: "Die Präsentation listet 'Java SE Development Kit 21.0.8' und 'SAPGUI for Java 8.10 Rev 1' als notwendige Installationen.",
      chapter: 0
    },
    {
      question: "Welche Transaktion wird in der Einführung als 'Der erste Schritt' in die ABAP-Workbench gezeigt?",
      options: [
        "SE80 (Object Navigator)",
        "SE11 (ABAP Dictionary)",
        "SE38 (ABAP Editor)",
        "SE24 (Class Builder)"
      ],
      correct: [0],
      explanation: "Die Präsentation startet die ABAP Workbench mit der Transaktion SE80.",
      chapter: 0
    },

    // --- Kapitel 1: ABAP Grundlagen & Architektur ---
    {
      question: "Wofür steht die Abkürzung ABAP?",
      options: [
        "Advanced Business Application Programming",
        "Application-Based Architecture Programming",
        "ABAP Business Application Platform",
        "Advanced Business Analytics Platform"
      ],
      correct: [0],
      explanation: "ABAP steht für Advanced Business Application Programming und ist die primäre SAP-Programmiersprache.",
      chapter: 1
    },
    {
      question: "Welche Aussagen zum ABAP Application Server treffen zu?",
      options: [
        "Er stellt die Laufzeitumgebung für ABAP-Programme bereit.",
        "Er enthält das ABAP Dictionary zur zentralen Typverwaltung.",
        "Er führt ausschließlich Java-Programme aus.",
        "Er kapselt die Datenbankzugriffe über Open SQL."
      ],
      correct: [0, 1, 3],
      explanation: "Der ABAP AS ist die Laufzeitumgebung (Anwendungsschicht), enthält das Dictionary und kapselt DB-Zugriffe. Java läuft auf AS Java, nicht auf dem ABAP AS.",
      chapter: 1
    },
    {
      question: "Wofür werden Transporte in SAP-Systemlandschaften verwendet?",
      options: [
        "Zum Übertragen von Entwicklungsobjekten zwischen Systemen (z. B. DEV → QAS → PRD).",
        "Zum Sichern von Endbenutzereinstellungen.",
        "Zum Aktualisieren von SAP-Notizen (SAP Notes).",
        "Zum Ausführen von Datenbank-Backups."
      ],
      correct: [0],
      explanation: "Transporte dienen der Verteilung von Repository-Änderungen zwischen den Systemen einer Landschaft.",
      chapter: 1
    },

    // --- Kapitel 2: Entwicklungsumgebung (SE80/ADT) ---
    {
      question: "Welche Tools werden primär für ABAP-Entwicklung verwendet?",
      options: [
        "SE80 (ABAP Workbench)",
        "ABAP Development Tools (ADT) in Eclipse",
        "SAP GUI Scripting Editor",
        "SAP Web IDE Full-Stack"
      ],
      correct: [0, 1],
      explanation: "SE80 ist die klassische Workbench, ADT in Eclipse ist das moderne Entwicklungswerkzeug für ABAP.",
      chapter: 2
    },
    {
      question: "Welche Aussagen zu Paketen (Package) sind richtig?",
      options: [
        "Pakete strukturieren Entwicklungsobjekte logisch.",
        "Objekte in $TMP sind transportfrei.",
        "Pakete ersetzen Transportaufträge vollständig.",
        "Für produktive Objekte ist ein Paket mit Transportanbindung üblich."
      ],
      correct: [0, 1, 3],
      explanation: "Pakete strukturieren Objekte. $TMP ist lokales Paket ohne Transport. Transporte werden nicht durch Pakete ersetzt.",
      chapter: 2
    },
    {
      question: "Welche Vorteile bieten ADT (Eclipse) gegenüber SE80?",
      options: [
        "Moderne Syntax-Unterstützung und Quick Fixes",
        "Integrierte Unit-Tests und ATC-Checks",
        "Pflicht zur Nutzung klassischer Includes",
        "Besseres Refactoring und Navigationsfeatures"
      ],
      correct: [0, 1, 3],
      explanation: "ADT bietet moderne Entwicklungsunterstützung, Refactoring und Tests; Includes sind nicht Pflicht.",
      chapter: 2
    },

    // --- Kapitel 3: Datentypen & Datenwörterbuch ---
    {
      question: "Welche Elemente gehören zum ABAP Dictionary?",
      options: [
        "Domänen",
        "Datenelemente",
        "Tabellentypen",
        "Funktionsbausteine"
      ],
      correct: [0, 1, 2],
      explanation: "Funktionsbausteine gehören nicht ins Dictionary (SE37). Domänen, Datenelemente und Tabellentypen schon (SE11).",
      chapter: 3
    },
    {
      question: "Welche elementaren Datentypen gibt es in ABAP?",
      options: [
        "I (Integer)",
        "P (Paket)",
        "STRING",
        "D (Datum)"
      ],
      correct: [0, 2, 3],
      explanation: "P steht für packed number (Festkommazahl), nicht 'Paket'. Gültige Typen sind z. B. I, P, STRING, D, T.",
      chapter: 3
    },
    {
      question: "Wozu dient eine Domäne im ABAP Dictionary?",
      options: [
        "Definiert technische Eigenschaften wie Datentyp und Länge.",
        "Speichert Anwendungslogik für Validierungen.",
        "Definiert Wertebereiche (Value Range).",
        "Erzeugt automatisch Tabellenindizes."
      ],
      correct: [0, 2],
      explanation: "Domänen definieren technische Eigenschaften und erlaubte Werte. Logik/Indizes gehören nicht in die Domäne.",
      chapter: 3
    },
    {
      question: "Welche Aussage zu Datenelementen ist richtig?",
      options: [
        "Datenelemente referenzieren eine Domäne.",
        "Datenelemente liefern Feldbezeichnungen und Doku.",
        "Datenelemente definieren Datenbankindizes.",
        "Datenelemente sind nur in SE11 sichtbar."
      ],
      correct: [0, 1],
      explanation: "Datenelemente basieren auf Domänen und liefern semantische Infos wie Kurz-/Langtexte (Feldbezeichnungen).",
      chapter: 3
    },

    // --- Kapitel 4: Interne Tabellen ---
    {
      question: "Welche Arten interner Tabellen gibt es?",
      options: [
        "Standardtabellen",
        "Sortierte Tabellen",
        "Hash-Tabellen",
        "Cluster-Tabellen"
      ],
      correct: [0, 1, 2],
      explanation: "Die drei Arten sind Standard, Sortiert und Hash. Cluster-Tabellen sind physische DB-Tabellenarten, keine internen Tabellen.",
      chapter: 4
    },
    {
      question: "Welche Aussage zu Schlüsseln interner Tabellen ist korrekt?",
      options: [
        "Hash-Tabellen benötigen einen eindeutigen Schlüssel.",
        "Standardtabellen haben per Default keinen eindeutigen Schlüssel.",
        "Sortierte Tabellen können einen nicht-eindeutigen Schlüssel haben.",
        "Hash-Tabellen unterstützen binäre Suche (BINARY SEARCH)."
      ],
      correct: [0, 1, 2],
      explanation: "Hash-Tabellen benötigen eindeutig, Standardtabellen nicht. Sortierte Tabellen können unique oder non-unique sein. BINARY SEARCH gilt für sortierte/Standardtabellen, nicht Hash.",
      chapter: 4
    },
    {
      question: "Welche Befehle sind typisch für interne Tabellen?",
      options: [
        "APPEND, INSERT, READ TABLE, LOOP AT",
        "MERGE TABLE",
        "SORT, DELETE, CLEAR",
        "FILTER, REDUCE, FOR"
      ],
      correct: [0, 2, 3],
      explanation: "MERGE TABLE existiert nicht. Die anderen sind Standard (APPEND, LOOP, SORT) bzw. moderne Ausdrücke (FILTER, REDUCE).",
      chapter: 4
    },
    {
      question: "Was ist bei READ TABLE ... WITH KEY ... zu beachten?",
      options: [
        "Bei sortierten/Hash-Tabellen erfolgt die Suche schlüsselbasiert.",
        "Bei Standardtabellen ohne BINARY SEARCH ist die Suche linear.",
        "READ TABLE setzt immer Sy-SUBRC auf 0.",
        "Mit TRANSPORTING NO FIELDS kann nur die Existenz geprüft werden."
      ],
      correct: [0, 1, 3],
      explanation: "Ohne Treffer ist sy-subrc <> 0 (meist 4). 'TRANSPORTING NO FIELDS' prüft nur Existenz.",
      chapter: 4
    },

    // --- Kapitel 5: Modularisierung ---
    {
      question: "Welche Modularisierungsarten sind in ABAP gebräuchlich?",
      options: [
        "FORM/ENDFORM (Unterprogramme)",
        "Funktionsbausteine",
        "Methoden in Klassen",
        "Stored Procedures in SE11"
      ],
      correct: [0, 1, 2],
      explanation: "Stored Procedures werden nicht in SE11 gepflegt. Üblich: FORM, FM, OO-Methoden.",
      chapter: 5
    },
    {
      question: "Welche Aussagen zu Funktionsbausteinen treffen zu?",
      options: [
        "Sie werden im Function Builder (SE37) gepflegt.",
        "Sie können RFC-fähig sein.",
        "Sie sind immer objektorientiert.",
        "Sie besitzen definierte Import/Export/Changing/Tabellen-Schnittstellen."
      ],
      correct: [0, 1, 3],
      explanation: "Funktionsbausteine sind prozedural, nicht OO.",
      chapter: 5
    },
    {
      question: "Welche Best Practices gelten für neue Entwicklungen?",
      options: [
        "Objektorientierte Implementierung mit klaren Klassen/Methoden",
        "Direkte DB-Zugriffe in der UI-Schicht",
        "Unit Tests für zentrale Logik",
        "Nur Includes ohne Klassen verwenden"
      ],
      correct: [0, 2],
      explanation: "Trennung der Schichten (UI / Logik / DB) und Testbarkeit sind wichtig; reine Include-basierte Entwicklung ist veraltet.",
      chapter: 5
    },

    // --- Kapitel 6: Open SQL Grundlagen ---
    {
      question: "Welche Befehle gehören zu Open SQL?",
      options: [
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE",
        "CREATE FUNCTION"
      ],
      correct: [0, 1, 2, 3],
      explanation: "CREATE FUNCTION gehört nicht zu Open SQL. Die DML-Befehle (SELECT, INSERT, UPDATE, DELETE) schon.",
      chapter: 6
    },
    {
      question: "Welche moderne Open-SQL-Syntax ist korrekt?",
      options: [
        "SELECT * FROM mara INTO TABLE it_mara.",
        "SELECT * FROM mara INTO TABLE @DATA(it_mara).",
        "SELECT SINGLE matnr FROM mara INTO @DATA(lv_matnr) WHERE matnr = @lv_key.",
        "SELECT mara~matnr, makt~maktx FROM mara INNER JOIN makt ON makt~matnr = mara~matnr INTO TABLE @DATA(it_join)."
      ],
      correct: [1, 2, 3],
      explanation: "Die Inline-Deklaration mit @DATA ist moderne Syntax. Die Variante 1 (ohne @DATA) ist klassisch, aber weiterhin gültig.",
      chapter: 6
    },
    {
      question: "Welche Aussagen zu CDS Views sind richtig?",
      options: [
        "CDS Views werden im ABAP Backend aktiviert und auf der DB materialisiert.",
        "CDS Views können mit Annotationen (z. B. OData, Analytics) versehen werden.",
        "CDS Views ersetzen Open SQL vollständig.",
        "CDS Views ermöglichen semantische Modellierung nahe an der DB."
      ],
      correct: [1, 3],
      explanation: "CDS ergänzen Open SQL, ersetzen es aber nicht. Sie sind logische Views (nicht standardmäßig materialisiert) und ermöglichen 'Code Pushdown'.",
      chapter: 6
    },
    {
      question: "Welche Tipps gelten für performantes Open SQL?",
      options: [
        "Nur benötigte Felder selektieren (Projektion).",
        "Früh filtern (WHERE) und DB-Seitige Aggregation nutzen.",
        "Ergebnisse immer ohne WHERE holen und in ABAP filtern.",
        "Angemessene Indizes der zugrunde liegenden Tabellen nutzen."
      ],
      correct: [0, 1, 3],
      explanation: "Filtern auf der DB (WHERE) ist performanter als in ABAP zu filtern. Projektion und Indizes verbessern Performance.",
      chapter: 6
    },
    {
      question: "Welche Ergebnisseinlagerung ist korrekt?",
      options: [
        "SELECT ... INTO TABLE @DATA(itab).",
        "SELECT SINGLE ... INTO @DATA(ls).",
        "SELECT ... INTO CORRESPONDING FIELDS OF TABLE @DATA(itab).",
        "SELECT ... APPEND LINES OF @DATA(itab)."
      ],
      correct: [0, 1, 2],
      explanation: "APPEND LINES OF ist kein Ziel von SELECT. CORRESPONDING ordnet gleichnamige Felder zu.",
      chapter: 6
    },
    {
      question: "Welche Aussage zu JOINs in Open SQL ist korrekt?",
      options: [
        "INNER JOIN liefert nur passende Datensätze.",
        "LEFT OUTER JOIN liefert alle linken Datensätze, ggf. mit Lücken rechts.",
        "RIGHT JOIN ist im ABAP Open SQL nicht erlaubt.",
        "CROSS JOIN ist die Verknüpfung ohne Bedingung."
      ],
      correct: [0, 1, 3],
      explanation: "RIGHT JOIN ist unterstützt (Teil von Open SQL), aber seltener genutzt; die anderen Aussagen sind korrekt.",
      chapter: 6
    },

    // --- Kapitel 7: Selektionsbild & klassische Listen ---
    {
      question: "Welche Sprachmittel definieren ein Selektionsbild?",
      options: [
        "PARAMETERS",
        "SELECT-OPTIONS",
        "SELECTION-SCREEN",
        "WRITE"
      ],
      correct: [0, 1, 2],
      explanation: "WRITE dient der Ausgabe (klassische Liste), nicht der Selektionsbild-Definition.",
      chapter: 7
    },
    {
      question: "Welche Aussagen zu SELECT-OPTIONS sind korrekt?",
      options: [
        "Erlauben Bereiche, Muster und Mehrfachwerte.",
        "Erzeugen intern eine Tabelle mit Sign, Option, Low, High.",
        "Können nur für numerische Felder verwendet werden.",
        "Unterstützen F4-Hilfe über Datenelemente."
      ],
      correct: [0, 1, 3],
      explanation: "SELECT-OPTIONS sind nicht auf numerische Felder beschränkt. Sie profitieren von der F4-Hilfe des Datenelements.",
      chapter: 7
    },
    {
      question: "Welche Aussagen zur klassischen Liste (WRITE) stimmen?",
      options: [
        "Einfache und schnelle Ausgabe für Prototypen/Ad-hoc-Reports.",
        "Unterstützt interaktive Listen (AT LINE-SELECTION).",
        "Ersetzt ALV vollständig.",
        "Formatierung ist begrenzt im Vergleich zu ALV."
      ],
      correct: [0, 1, 3],
      explanation: "ALV ist die mächtigere tabellarische Ausgabe. WRITE ist einfach, aber limitiert.",
      chapter: 7
    },

    // --- Kapitel 8: ALV ---
    {
      question: "Welche Varianten der ALV-Ausgabe sind üblich?",
      options: [
        "OO-ALV mit CL_SALV_TABLE",
        "Funktionsbaustein REUSE_ALV_GRID_DISPLAY",
        "SE38_ALV_SIMPLE",
        "CL_GUI_ALV_GRID (für dynprobasierte Grids)"
      ],
      correct: [0, 1, 3],
      explanation: "SE38_ALV_SIMPLE ist kein Objekt. OO-ALV (CL_SALV_TABLE) und FB/GUI-basierte Varianten sind üblich.",
      chapter: 8
    },
    {
      question: "Welche Features bietet ALV standardmäßig?",
      options: [
        "Sortieren und Filtern",
        "Aggregationen/Summen",
        "Layout-Varianten speichern",
        "Automatische Performanceoptimierung der DB"
      ],
      correct: [0, 1, 2],
      explanation: "DB-Performance muss durch sinnvolle Selektion, Indizes etc. sichergestellt werden; ALV optimiert nur die Anzeige.",
      chapter: 8
    },
    {
      question: "Welche Schritte sind minimal für CL_SALV_TABLE nötig?",
      options: [
        "Daten in interne Tabelle laden",
        "SALV-Objekt über FACTORY erzeugen",
        "DISPLAY aufrufen",
        "ALV-Feldkatalog manuell pflegen ist zwingend"
      ],
      correct: [0, 1, 2],
      explanation: "Ein manueller Feldkatalog ist in SALV nicht zwingend – SALV liest Metadaten automatisch aus der internen Tabelle.",
      chapter: 8
    },

    // --- Kapitel 9: Debugging & Fehlerbehandlung ---
    {
      question: "Welche Sprachmittel dienen der Fehlerbehandlung in ABAP OO?",
      options: [
        "TRY ... CATCH ... ENDTRY",
        "RAISE EXCEPTION TYPE",
        "MESSAGE e001(zmsg) WITH ... RAISING",
        "GOTO ERROR"
      ],
      correct: [0, 1, 2],
      explanation: "GOTO ist kein Mittel der modernen Fehlerbehandlung, extrem veraltet und sollte nicht verwendet werden. OO-Exceptions (TRY/CATCH/RAISE) und MESSAGE...RAISING sind gebräuchlich.",
      chapter: 9
    },
    {
      question: "Welche Aussagen zum Debugger sind korrekt?",
      options: [
        "Unterstützt Breakpoints und Watchpoints",
        "Erlaubt Variablen-Inspektion und On-the-fly-Änderungen",
        "Kann nur in SE80 verwendet werden, nicht in ADT",
        "Unterstützt Session- und User-Breakpoints"
      ],
      correct: [0, 1, 3],
      explanation: "Der Debugger ist sowohl in SE80 als auch in ADT verfügbar (in ADT oft komfortabler).",
      chapter: 9
    },
    {
      question: "Wofür werden ABAP Unit Tests genutzt?",
      options: [
        "Automatisierte Prüfung von Einheiten (Methoden/Klassen)",
        "Ersetzen manuelle Integrationstests vollständig",
        "Unterstützen TDD (Test-Driven Development)",
        "Können in ADT komfortabel ausgeführt werden"
      ],
      correct: [0, 2, 3],
      explanation: "Unit Tests ersetzen Integrationstests nicht vollständig, sind aber zentral für Qualität und TDD.",
      chapter: 9
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
  const quizStorageKey = "abapWorkbenchQuizChapterSelection_v1";
  
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
      const isChecked = savedChapters ? savedChapters.includes(chapter) : true;
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