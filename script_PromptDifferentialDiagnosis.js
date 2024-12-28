// script_PromptDifferentialDiagnosis.js

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('diagnosesForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Verhindere das Neuladen der Seite
      
      // Sammle die Eingabewerte
      const modality = document.getElementById('modality').value;
      const region = document.getElementById('region').value;
      const characteristics = document.getElementById('characteristics').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const additionalInfo = document.getElementById('additionalInfo').value;
      
      // Erstelle den Prompt-Text basierend auf den Eingabewerten
      const promptText = `## Anfrage Details:
- **Modalität**: ${modality}
- **Region**: ${region}
- **Eigenschaften**: ${characteristics}
- **Patientenalter**: ${age}
- **Patientengeschlecht**: ${gender}
- **Sonstige Informationen**: ${additionalInfo}

## Recherche-Ziele:
1. Identifizierung relevanter Differentialdiagnosen.
2. Strukturierte Darstellung der Ergebnisse.

## Ergebnis-Präsentation:
### Liste der Differentialdiagnosen
- Erfasse jede relevante Differentialdiagnose.
- Kurze Beschreibung der Bildgebenden Merkmale in ${modality}. 

### Tabelle der Differentialdiagnosen
| Differentialdiagnose | Beschreibung | Charakteristik in ${modality} | Unterscheidung von anderen Diagnosen in ${modality} |
|---|---|---|---|
| Diagnose | Kurze Beschreibung | Spezifische Darstellung in ${modality} | Unterscheidungsmerkmale |

## Einschätzung
- Für jede Diagnose, Einschätzung und Begründung der Relevanz im Kontext der Angaben.

## Quellen
- Quellenangaben für jede Information.

## Auftrag:
- Sicherstellung der Fachgenauigkeit und des radiologischen Kontext des Dokumentes.
- Markierung von Schlagworten in fetter Schrift.
- Verwendung vertrauenswürdiger Quellen.
- Klare und präzise medizinische Fachsprache.
- Beachtung aller genannten Informationen im Kontext.
- Beschränke dich auf radiologische Aspekte des Themas. 
- Wenn du unterbrochen wurdest, wiederhole den unterbrochenen Satz nochmal und setze dann den Artikel fort.`;

      // Zeige das Ergebnis im outputContainer
      const outputContainer = document.getElementById('outputContainer');
      outputContainer.textContent = promptText; // Setze den Text
      outputContainer.style.display = 'block'; // Mache den Container sichtbar
      
      // Kopiere den Prompt-Text in die Zwischenablage
      navigator.clipboard.writeText(promptText);
  });
});
