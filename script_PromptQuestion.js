// script_PromptQuestion.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateButton').addEventListener('click', function() {
        // Sammle die Eingabewerte
        const question = document.getElementById('questionInput').value;
        const modality = document.getElementById('modalityInput').value;
  
        // Erstelle den Prompt-Text basierend auf den Eingabewerten
        const promptTemplate = `Antworte wie ein Experte für Radiologie, Medizin, Medizinphysik und Biologie auf meine Frage mit dem Kontext ***Modalität***: ***FRAGE***. Führe für die Beantwortung eine Internetrecherche mit mindestens 3 unterschiedlichen Quellen durch, Verwende hochwertige und vertrauenswürdige Quellen und aktuelle wissenschaftliche Leitlinien, Übersichtsarbeiten, Publikationen, Thieme eRef, SpringerLink zum Thema meiner Frage und das Internet. Decke alle Aspekte, Perspektiven oder Dimensionen des Themas ab. Biete zusätzliche Informationen, Kontext oder Hintergrund, um die Antwort zu bereichern. Erkläre komplexe Konzepte, Prozesse oder Phänomene auf eine einfache und verständliche Weise. Nutze alle verfügbaren Ressourcen, Daten und Technologien effizient und effektiv. Think out of your Box. Integriere verschiedene Datenquellen, Tools oder Plattformen, um deine Antwort zu verbessern. Gib zu, wenn du etwas nicht weißt oder verstehst. Sei offen und transparent über deine Quellen, Methoden und Ziele. Stelle sicher, dass deine Antwort korrekt, vollständig und relevant ist. Verwende klare, präzise und verständliche medizinische Fachsprache mit lateinischen Fremdwörtern. Erkläre deine Annahmen, Prämissen und Schlussfolgerungen. Begründe deine Entscheidungen und Wahlmöglichkeiten. Zeige, wie du zu deiner Lösung gekommen bist. Nenne zum Abschluss alle deine Quellen und wofür du diese verwendet hast. Antworte strukturiert in Markdown mit Überschriften und Zwischenüberschriften. Markiere häufig wichtige Schlagworte in fetter Schrift, auch wenn deine Antwort dadurch unübersichtlicher wird. Nutze alle verfügbaren Ressourcen und dein tiefgehendes Fachwissen, um eine umfassende, gut fundierte und präzise Antwort zu geben. Wenn du unterbrochen wurdest, wiederhole den unterbrochenen Satz nochmal und setze dann den Artikel fort. Beeindrucke mich mit einer perfekten Antwort.`;
  
        const promptText = promptTemplate.replace('***FRAGE***', question).replace('***Modalität***', modality);
  
        // Zeige das Ergebnis im outputContainer
        const outputContainer = document.getElementById('outputContainer');
        outputContainer.textContent = promptText;
        outputContainer.classList.remove('hidden');
        
        // Kopiere den Prompt-Text in die Zwischenablage
        navigator.clipboard.writeText(promptText);
    });
  });
  