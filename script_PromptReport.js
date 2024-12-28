// script_PromptReport.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reportForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Verhindere das Neuladen der Seite
      
      // Sammle die Eingabewerte
      const modality = document.getElementById('modality').value;
      const originalReport = document.getElementById('originalReport').value;
      
      // Erstelle den Prompt-Text basierend auf den Eingabewerten
      const promptText = `Korrigiere folgenden radiologischen Befundbericht einer ${modality} Untersuchung in Stil, Wortwahl und Grammatik. Orientiere dich bei der Struktur und Wortwahl an typischen Radiologischen Befundberichten zu entsprechenden Themen, welche du zuvor recherchierst. Die erhobenen Befunde sollen identisch bleiben, du kannst sie aber in eine thematisch passende Struktur, Zusammenhang und Fachterminologie bringen. Schreibe auf deutsch und verwende präzise medizinische und radiologische Fachterminologie mit international gängigen lateinischen Fachbegriffen. Schreibe wie ein erfahrener Radiologe: 
      ${originalReport} 
      Antworte nur mit dem von dir geänderten Befundbericht. Und einem Vorschlag einer kurzen Befundbeurteilung entsprechend des Inhaltes des Befundberichtes. Schreibe nichts davor und nichts danach. Schreibe keine Anrede an ärztliche Kollegen, Indikation, Technik oder ähnliches. Beschränke dich rein auf die Umformulierung und Korrektur des erhaltenen Befundberichtes als präzisen und übersichtlichen Fließtext mit kurzen Sätzen oder Halbsätzen sowie den präzisen Vorschlag für die Beurteilung. Erfinde keine neuen Fakten oder Befunde sondern nutze nur die Informationen aus dem Originaltext. Schreibe 3 unterschiedliche Varianten als Vorschlag. Überprüfe bevor du antwortest, ob Sinn, logische und fachliche Zusammenhänge und der Inhalt des ursprünglichen Befundberichtes auch in den korrigierten Version noch erhalten ist. Überprüfe ein weiteres mal akribisch genau ob dein umformulierter Text einer korrekten deutschen Grammatik entspricht und medizinisch und logischen Sinn ergibt. Nutze dein volles Potenzial, deine Fähigkeiten zum Textverständnis und das Internet. Arbeite präzise und genau. Beeindrucke mich mit einer perfekten Antwort.`;
  
      // Zeige das Ergebnis im outputContainer
      const outputContainer = document.getElementById('outputContainer');
      outputContainer.textContent = promptText; // Setze den Text
      outputContainer.style.display = 'block'; // Mache den Container sichtbar
      
      // Kopiere den Prompt-Text in die Zwischenablage
      navigator.clipboard.writeText(promptText);
    });
  });
  