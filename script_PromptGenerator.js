// script_PromptGenerator.js
var option1 = "Als Radiologie Experte empfiehlst du Untersuchungsprotokolle für eine ***Modalität*** Untersuchung zum Thema ***THEMA***. Beschränke dich nur auf die radiologischen Aspekte. Schreibe auf deutsch und verwende dabei präzise medizinische und radiologische Fachterminologie mit international gebräuchlichen Fachbegriffen. Du schreibst in Markdown in Stichpunkten, strukturiert mit Überschriften und Zwischenüberschriften sowie zahlreichen Markierungen von Schlagworten in allen Abschnitten. Das Dokumment soll folgende Struktur haben: 1. Kurze Erklärug von ***THEMA*** (markiere Schlagworte Fett), 2. Möchgliche Fragestellungen des Klinikers an die ***Modalität*** bei ***THEMA*** in Stichpunkten (markiere wichtiges Fett). 3. Klassische Darstellung von ***THEMA*** in der ***Modalität***. Welche Pathologien sind zu erwarten? Wie stellen sich die Pathologien in der ***Modalität*** dar? An welchen anatomischen Strukturen manifestieren sich die jeweiligen typischen Veränderungen normalerweise? Wo muss ich genau hinschauen. Erstelle eine Liste und markiere Schlagworte fett. 4. Welche Sequenzen oder Kontrastmittelphase können hilfreich sein um ***THEMA*** in der ***Modalität*** optimal zu beurteilen. Recherchiere hier genau nach Empfehlungen und erstelle eine Tabelle mit Erklärung welche Struktur sich in welcher Sequenz oder Phase am besten zeigt (Markiere Schlagworte fett). 5. Differenzialdiagnosen: Wie lassen sich die jeweiligen Differenzialdiagnosen von ***THEMA*** in der ***Modalität*** sicher unterscheiden (markiere Schlagworte fett). Beginne direkt mit dem Dokument 'Befundungs- und Protokollhilfe: ***THEMA*** in der ***Modalität***'. Verwende hochwertige und vertrauenswürdige Quellen und aktuelle wissenschaftliche Leitlinien, Übersichtsarbeiten, Publikationen, Thieme eRef, SpringerLink. Überprüfe deine Antwort anhand einer weiteren unabhängigen Quelle. Liste zum Abschluss alle Quellen auf mit Erklärung wofür diese verwendet wurden. Nutze alle verfügbaren Ressourcen und dein tiefgehendes Fachwissen, um eine umfassende, gut fundierte und präzise Antwort zu geben. Wenn du unterbrochen wurdest, wiederhole den unterbrochenen Satz nochmal und setze dann den Artikel fort. Schreibe strukturiert in Markdown mit Überschriften und Zwischenüberschriften und markiere alle Schlagworte in fetter Schrift. Beeindrucke mich mit einer perfekten Antwort.";
// Text für Option 1 Protokoll- und Befundungshilfe
var option2 = "Erstelle eine umfassendes Dokument für Radiologen, welches sich auf Differenzialdiagnosen im Zusammenhang mit ***THEMA*** in der ***Modalität*** konzentriert. Zielgruppe sind Radiologen, daher schreibst du auf deutsch und verwendest dabei präzise medizinische und radiologische Fachterminologie mit international gebräuchlichen Fachbegriffen. Du beschränkst dich auf radiologische Aspekte. Der Leitfaden sollte: 1. **Alle möglichen Differenzialdiagnosen** für die durch ***THEMA*** spezifizierte Struktur **auflisten**. 2. **Jede Differenzialdiagnose detailliert erklären**, einschließlich ihrer klinischen Präsentation und besonders detailreich ihre bildgebenden Merkmale in der ***Modalität***. 3. **Charakteristische Merkmale in der ***Modalität*** hervorheben**, die jede Differenzialdiagnose von anderen unterscheiden, insbesondere in Bezug auf bildgebende Befunde. 4. **Verwende hochwertige und vertrauenswürdige Quellen und aktuelle wissenschaftliche Leitlinien, Übersichtsarbeiten, Publikationen, Thieme eRef, SpringerLink für die Informationsbeschaffung**. 5. **Alle wichtigen Aspekte fett markieren** für eine einfache Referenz. ##Bitte stelle sicher, dass das generierte Dokument als praktische Übersicht für Radiologen dient und sie in ihrem diagnostischen Prozess unterstützt. Schreibe strukturiert in Markdown. Verwende Überschriften, Zwischenüberschriften, Listen und Tabellen (Schreibe Schlagworte in allen Abschnitten fett). Schreibe bevorzugt in Stichpunkten (Markiere wichtiges fett). Beginne direkt mit dem Dokument 'Differenzialdiagnosen zu ***THEMA*** in der ***Modalität***'. Überprüfe deine Antwort anhand einer weiteren hiervon unabhängigen Quelle. Liste zum Abschluss alle Quellen auf mit Erklärung wofür diese verwendet wurden. Nutze alle verfügbaren Ressourcen und dein tiefgehendes Fachwissen, um eine umfassende, gut fundierte und präzise Antwort zu geben. Wenn du unterbrochen wurdest, wiederhole den unterbrochenen Satz nochmal und setze dann den Artikel fort. Beeindrucke mich mit einer perfekten Antwort.";
// Text für Option 2 Differenzildiagnosen
var option3 = "Erstelle ein Radiologisches Übersichtsdokument zu ***THEMA*** in der ***Modalität***. Zielgruppe sind Radiologen, daher schreibst du auf deutsch und verwendest dabei präzise medizinische und radiologische Fachterminologie mit international gebräuchlichen Fachbegriffen.  Du beschränkst dich auf radiologische Aspekte. Inhalte der Übersicht: #Definition von ***THEMA***: Kurzbeschreibung in Stichpunkten (markiere Schlagworte fett). #Einteilung/Mögliche Varianten: Unterschiedliche Darstellungen, Varianten oder Stadien mit ihren speziellen Eigenarten im Bild in Abgrenzung von den Übrigen Varianten als Tabelle. Wie sind diese zu unterscheiden (markiere Schlagworte fett)? #Radiologische Zeichen: Was in den Bildern zu suchen ist. Wie und wo ist nach Veränderungen zu suchen (markiere Schlagworte fett). #Differenzialdiagnosen: Andere mögliche Diagnosen, die ähnliche Bilder erzeugen könnten und wie sich diese von ***THEMA*** unterscheiden lassen als Tabelle (Markiere Schlagworte fett). #Bildinterpretation: Welche Strukturen sind bei der Bildbeurteilung von ***THEMA*** besonders wichtig? Welche Veränderungen können hier auftreten (Markiere Schlagworte fett)? #Tipps und Tricks: Expertenratschläge für die Interpretation in Stichpunkten, welche einem Radiologen die Interpretation der Bilder erleichtert, z.B. Zeichen, Optimierte Workflows usw. (Markiere Schlagworte fett). ##Schreibe strukturiert in Markdown. Verwende Überschriften, Zwischenüberschriften, Listen und Tabellen (Schreibe Schlagworte fett). Schreibe bevorzugt in Stichpunkten (Markiere Schlagworte fett). Beginne direkt mit dem Dokument 'Übersicht: ***THEMA*** in der ***Modalität***'. Verwende hochwertige und vertrauenswürdige Quellen und aktuelle wissenschaftliche Leitlinien, Übersichtsarbeiten, Publikationen, Thieme eRef, SpringerLink. Überprüfe deine Antwort anhand einer weiteren hiervon unabhängigen Quelle. Liste zum Abschluss alle Quellen auf. Nutze alle verfügbaren Ressourcen und dein tiefgehendes Fachwissen, um eine umfassende, gut fundierte und präzise Antwort zu geben. Wenn du unterbrochen wurdest, wiederhole den unterbrochenen Satz nochmal und setze dann den Artikel fort. Beeindrucke mich mit einer perfekten Antwort.";
// Text für Option 3 Übersicht
var option4 = "Korrigiere folgenden radiologischen Befundbericht einer ***Modalität*** Untersuchung in Stil, Wortwahl und Grammatik. Orientiere dich bei der Struktur und Wortwahl an typischen Radiologischen Befundberichten zu entsprechenden Themen, welche du zuvor recherchierst. Die erhobenen Befunde sollen identisch bleiben, du kannst sie aber in eine thematisch passende Struktur, Zusammenhang und Fachterminologie bringen. Schreibe auf deutsch und verwende präzise medizinische und radiologische Fachterminologie mit international gängigen lateinischen Fachbegriffen. Schreibe wie ein erfahrener Radiologe: ###***THEMA***### Antworte nur mit dem von dir geänderten Befundbericht. Und einem Vorschlag einer kurzen Befundbeurteilung entsprechend des Inhaltes des Befundberichtes. Schreibe nichts davor und nichts danach. Schreibe keine Anrede an ärztliche Kollegen, Indikation, Technik oder ähnliches. Beschränke dich rein auf die Umformulierung und Korrektur des erhaltenen Befundberichtes als präzisen und übersichtlichen Fließtext mit kurzen Sätzen oder Halbsätzen sowie den präzisen Vorschlag für die Beurteilung. Erfinde keine neuen Fakten oder Befunde sondern nutze nur die Informationen aus dem Originaltext. Schreibe 3 unterschiedliche Varianten als Vorschlag. Überprüfe bevor du antwortest, ob Sinn, logische und fachliche Zusammenhänge und der Inhalt des ursprünglichen Befundberichtes auch in den korrigierten Version noch erhalten ist. Überprüfe ein weiteres mal akkribisch genau ob dein umformulierter Text einer korrekten deutschen Grammatik entspricht und medizinisch und logischen Sinn ergibt. Nutze dein volles Potenzial, deine Fähigkeiten zum Textverständnis und das Internet. Arbeite präzise und genau. Beeindrucke mich mit einer perfekten Antwort.";
// Text für Option 4 Befundüberarbeitung
var option5 = "Antworte wie ein Experte für Radiologie, Medizin, Medizinphysik und Biologie auf meine Frage mit dem Kontext ***Modalität***: ***THEMA***. Führe für die Beantwortung eine Internetrecherche mit mindestens 3 unterschiedlichen Quellen durch, Verwende hochwertige und vertrauenswürdige Quellen und aktuelle wissenschaftliche Leitlinien, Übersichtsarbeiten, Publikationen, Thieme eRef, SpringerLink zum Thema meiner Frage. Decke alle Aspekte, Perspektiven oder Dimensionen des Themas ab. Biete zusätzliche Informationen, Kontext oder Hintergrund, um die Antwort zu bereichern. Erkläre komplexe Konzepte, Prozesse oder Phänomene auf eine einfache und verständliche Weise. Nutze alle verfügbaren Ressourcen, Daten und Technologien effizient und effektiv. Think out of your Box. Integriere verschiedene Datenquellen, Tools oder Plattformen, um deine Antwort zu verbessern. Gib zu, wenn du etwas nicht weißt oder verstehst. Sei offen und transparent über deine Quellen, Methoden und Ziele. Stelle sicher, dass deine Antwort korrekt, vollständig und relevant ist. Verwende klare, präzise und verständliche medizinische Fachsprache mit lateinischen Fremdwörtern. Erkläre deine Annahmen, Prämissen und Schlussfolgerungen. Begründe deine Entscheidungen und Wahlmöglichkeiten. Zeige, wie du zu deiner Lösung gekommen bist. Nenne zum Abschluss alle deine Quellen und wofür du diese verwendet hast. Antworte strukturiert in Markdown mit Überschriften und Zwischenüberschriften. Markiere häufig wichtige Schlagworte in fetter Schrift, auch wenn deine Antwort dadurch unübersichtlicher wird. Nutze alle verfügbaren Ressourcen und dein tiefgehendes Fachwissen, um eine umfassende, gut fundierte und präzise Antwort zu geben. Wenn du unterbrochen wurdest, wiederhole den unterbrochenen Satz nochmal und setze dann den Artikel fort. Beeindrucke mich mit einer perfekten Antwort.";
// Text für Option 5 Frage mit radiologischem Kontext
var option6 = "Erstelle eine umfassende Übersicht zu ***THEMA*** in ***Modalität***, fokussiert auf radiologische Aspekte. Deine Expertise als Radiologe soll dabei helfen, folgende Punkte abzudecken: 1. **Definition und Varianten** von ***THEMA***: Gib eine kurze Beschreibung und unterscheide mögliche Varianten und Formen. 2. **Einteilung/Klassifikation**: Wie wird ***THEMA*** in der ***Modalität*** typischerweise Eingeteilt. Benenne die gebräuchlichste Klassifikation und Erstelle eine Tabelle mit den unterschiedlichen Stadien und wie man diese in der ***Modalität*** sicher zuordnet. Gibt es Key-findings für bestimmte Stadien? 3. **Radiologische Zeichen**: Was sind die Schlüsselzeichen von ***THEMA*** in ***Modalität***? Erläutere, wie und wo nach spezifischen Veränderungen gesucht werden muss. Markiere radiologische Zeichen und Aspekte in Fettschrift. Gibt es pathognomonische Bildzeichen für ***THEMA*** ? 4. **Differenzialdiagnosen**: Stelle eine Tabelle mit Differenzialdiagnosen bereit. Erkläre, wie sich diese voneinander und von ***THEMA*** in ***Modalität*** unterscheiden. Unterscheidungsmerkmale in Fettschrift. 5. **Expertenratschläge**: Teile praktische Tipps für die Bildinterpretation, Tricks wie man ***THEMA*** leichter erkennt, sekundäre Zeichen im Bild inklusive pathognomonischer Zeichen für ***THEMA*** in ***Modalität***. Schlüsselwörter in Fettschrift 6. **Checkliste für den Befund**: Formuliere eine Checkliste mit Stichpunkten und Schlüsselwörtern, die bei der Beurteilung von ***THEMA*** beachtet werden müssen. Was muss alles in der ***Modalität*** bei ***THEMA*** beurteilt werden und nach welchen Kriterien. Worauf sollte man bei ***THEMA*** neben dem Hauptbefund auch immer schauen? Wichtige Aspekte in Fettschrift. Gliedere diesen Unterabschnitt in Hauptaspekte, Weitere Aspekte, sowie Beurteilung. Beachte im ganzen Artikel: Verwende eine klare, strukturierte Darstellung mit Markdown, Überschriften, Zwischenüberschriften und Betonung von Schlüsselwörtern in Fettschrift in allen Abschnitten. Verwende hochwertige und vertrauenswürdige Quellen und aktuelle wissenschaftliche Leitlinien, Übersichtsarbeiten, Publikationen, Thieme eRef, SpringerLink. Überprüfe deine Angaben mit einer weiteren unabhängigen Quelle. Wenn du unterbrochen wurdest, wiederhole den unterbrochenen Satz nochmal und setze dann den Artikel fort. Nutze dein volles Potenzial und alle Ressourcen. Beeindrucke mich mit einer perfekten Antwort.";
// Text für Option 6 Übersicht Plus
var option7 = "Antworte in der Rolle eines Radiologen und Onkologen mit langjähriger Erfahrung und tiefgreifendem Wissen. Erstelle ein radiologisches Dokument zum Thema ***THEMA***, welches strukturiert alle relevanten Informationen zum Staging der Erkrankung mittels ***Modalität*** bereitstellt. Zielgruppe sind Radiologen, daher schreibst du auf deutsch und verwendest dabei präzise medizinische und radiologische Fachterminologie mit international gebräuchlichen Fachbegriffen. Du beschränkst dich auf radiologische Aspekte. Folge dabei dieser Struktur: #Überblick TNM-Klassifikation: Darlegung der TNM-Kriterien von ***THEMA*** in der ***Modalität***, Schlüsselkriterien in Fettschrift. Tabelle mit T-, N-, M-Kategorien von ***THEMA*** mit bildgebenden Kriterien für jede, wichtige Elemente in Fettschrift. Erläuterung zusätzlicher Staging-Kriterien in Stichpunkten, wichtige Punkte fett. #Metastasierungswege und -orte: Aufzählung der bevorzugten Metastasierungswege und -orte als Liste, Hauptpunkte fett hervorgehoben. #Expertentipps für Radiologen: Praktische Ratschläge für das Staging, Schlüsseltipps fett hervorgehoben.#Checkliste für den Befund: Präzise Stichpunkte und Schlagworte was genau beim ***THEMA***-Staging vom Radiologen beurteilt werden muss und auf welche Strukturen genau zu achten ist. Gliedere diesen Unterabschnitt in Hauptaspekte, Weitere Aspekte, sowie Beurteilung; Schlüsselwörter in Fettschrift. Verwendung von Markdown mit Überschriften und Unterüberschriften. Stichpunkte, entscheidende Informationen fett. #Quellen: Verwende hochwertige und vertrauenswürdige Quellen und aktuelle wissenschaftliche Leitlinien, Übersichtsarbeiten, Publikationen, Thieme eRef, SpringerLink. Überprüfung mit einer zweiten Quelle. Auflistung aller genutzten Quellen. Beginne direkt mit '# *****THEMA*** - ***Modalität***-Staging**' als Titel. Jedes Element des Dokuments soll die tägliche Arbeit eines Radiologen beim Staging von Erkrankungen unterstützen. Nutze Listen und Tabellen wo möglich. Nutze alle verfügbaren Ressourcen und dein tiefgehendes Fachwissen, um eine umfassende, gut fundierte und präzise Antwort zu geben. Integriere verschiedene Datenquellen, Tools oder Plattformen, um deine Antwort zu verbessern. Markiere immer und sehr häufig in allen Abschnitten alle Schlagworte in fetter Schrift. Beschränke dich auf radiologische Aspekte des Themas. Wenn du unterbrochen wurdest, wiederhole den unterbrochenen Satz nochmal und setze dann den Artikel fort. Beeindrucke mich mit einer perfekten Antwort.";
// Text für Option 7 Radiologisch-onkologische Übersicht


function adjustButtonLabels() {
    const containerWidth = document.querySelector('.container').offsetWidth;
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      if (button.offsetWidth > containerWidth / buttons.length) {
        button.querySelector('span').style.display = 'none';
      } else {
        button.querySelector('span').style.display = '';
      }
    });
  }
  
window.addEventListener('resize', adjustButtonLabels);
document.addEventListener('DOMContentLoaded', adjustButtonLabels);

function generateInstruction() {
    var topic = document.getElementById("topicInput").value;
    var modality = document.getElementById("modalityInput").value;
    var selection = document.getElementById("documentType").value;
    var text = getSelectedText(selection);
    text = text.replaceAll("***THEMA***", topic);
    text = text.replaceAll("***Modalität***", modality);

    if (document.getElementById("initialInstructions")) {
        document.getElementById("initialInstructions").classList.add("hidden");
    }
    if (document.getElementById("microsoftCopilotButton")) {
        document.getElementById("microsoftCopilotButton").classList.remove("hidden");
    }
    if (document.getElementById("claudeButton")) {
        document.getElementById("claudeButton").classList.remove("hidden");
    }
    if (document.getElementById("chatGPTButton")) {
        document.getElementById("chatGPTButton").classList.remove("hidden");
    }
    if (document.getElementById("bardButton")) {
        document.getElementById("bardButton").classList.remove("hidden");
    }
    if (document.getElementById("instructions")) {
        document.getElementById("instructions").classList.remove("hidden");
    }

    if (document.getElementById("finalText")) {
        document.getElementById("finalText").innerText = text;
        document.getElementById("finalText").classList.remove("hidden");
    }
    
    navigator.clipboard.writeText(text);
}

function getSelectedText(selection) {
    switch (selection) {
    case "Option 1":
        return option1;
        // Text für Option 1 Untersuchungs- und Befundungshilfe
    case "Option 2":
        return option2;
        // Text für Option 2 Differenzialdiagnosen
    case "Option 3":
        return option3;
        // Text für Option 3 Übersicht
    case "Option 4":
        return option4;
        // Text für Option 4 Befundüberarbeitung
    case "Option 5":
        return option5;
        // Text für Option 5 Frage mit radiologischem Kontext
    case "Option 6":
        return option6;
        // Text für Option 6 Übersicht Plus
    case "Option 7":
        return option7;
        // Text für Option 7 Staging-Hilfe
    default:
        return "";
        // Leerer Text, wenn keine Option ausgewählt wurde
    }
}

