// script_General.js

window.addEventListener('resize', adjustButtonWidthAndLabels);
document.addEventListener('DOMContentLoaded', adjustButtonWidthAndLabels);

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.07}s`;
    });
});


function adjustButtonWidthAndLabels() {
    const buttonRow = document.querySelector('.button-row');
    const buttons = document.querySelectorAll('.button-row .button');
    const containerWidth = buttonRow.offsetWidth;
    let shouldHideLabels = false;
  
    // Überprüfen, ob die Buttons mit Beschriftungen zu breit für das Mutterelement sind
    const totalWidthWithLabels = [...buttons].reduce((total, button) => total + button.offsetWidth, 0);
    if (totalWidthWithLabels > containerWidth) {
      shouldHideLabels = true;
    }
  
    buttons.forEach(button => {
      const label = button.querySelector('span');
      if (shouldHideLabels) {
        label.style.display = 'none'; // Beschriftung ausblenden
        button.style.width = 'auto'; // Breite der Buttons zurücksetzen
      } else {
        label.style.display = ''; // Beschriftung anzeigen
      }
    });
  
    // Wenn Labels sichtbar sind, alle Buttons auf die breiteste Button-Breite setzen
    if (!shouldHideLabels) {
      const maxWidth = Math.max(...[...buttons].map(button => button.offsetWidth));
      buttons.forEach(button => button.style.width = `${maxWidth}px`);
    }
  }
  
function openMicrosoftCopilot() {
    // Funktion, um Microsoft Copilot zu öffnen
    window.open("https://copilot.microsoft.com", "_blank");
}

function openChatGPT() {
    // Funktion, um ChatGPT zu öffnen
    window.open("https://chat.openai.com", "_blank");
}

function openBard() {
    // Funktion, um Google Gemini zu öffnen
    window.open("https://gemini.google.com/app", "_blank");
}

function openClaude() {
    // Funktion, um Anthropic Claude zu öffnen
    window.open("https://claude.ai/chats", "_blank");
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initFAQQuestions();
    enhanceAccessibility();
    optimizeForTouchDevices();
    const dropBtn = document.querySelector('.dropbtn');
    dropBtn.addEventListener('click', function() {
        let dropdownContent = this.closest('.title-button-row').querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    });

    // Weitere Initialisierungscodes hier ...
});

// Klicken außerhalb von Dropdowns schließt sie
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'scale(0.95)'; // Scales down the card on click
      setTimeout(() => {
        card.style.transform = ''; // Resets the transformation after a short delay
      }, 200); // Delay in milliseconds
    });
});

function initMobileNav() {
    const hamburger = document.querySelector('.hamburger-menu .menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');

        // Toggle für das Hamburger-Icon, um bei geöffnetem Menü das Aussehen zu ändern
        hamburger.classList.toggle('opened');
    });
}

// JS für die FAQ

function initFAQQuestions() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.style.maxHeight) {
                // Wenn die Antwort bereits sichtbar ist, schließe sie
                answer.style.maxHeight = null;
                question.classList.remove('active');
            } else {
                // Schließe alle anderen Antworten
                document.querySelectorAll('.faq-answer').forEach(a => {
                    a.style.maxHeight = null;
                });
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });
                
                // Öffne die angeklickte Antwort
                answer.style.maxHeight = answer.scrollHeight + "px";
                question.classList.add('active');
            }
        });
    });
}

function enhanceAccessibility() {
    // Verbesserungen für die Barrierefreiheit
    const allInteractiveElements = document.querySelectorAll('button, a, input, [tabindex="0"]');
    allInteractiveElements.forEach(element => {
        element.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                element.click();
            }
        });
    });
}

function optimizeForTouchDevices() {
    // Optimierungen für Touch-Geräte
    const touchElements = document.querySelectorAll('.button, .dropdown-content a');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.classList.add('touch-active');
        });
        element.addEventListener('touchend', () => {
            element.classList.remove('touch-active');
        });
    });
}

// JS für die Tool-Cards

// Funktion zum Anpassen der Höhe der Toolcards
function adjustToolCardsHeight() {
    const cards = document.querySelectorAll('.tool-card');
    let maxHeight = 0;
  
    // Zurücksetzen der Höhe, um die natürliche Höhe zu messen
    cards.forEach(card => {
      card.style.height = 'auto';
    });
  
    // Finden der maximalen Höhe
    cards.forEach(card => {
      if (card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight;
      }
    });
  
    // Anwenden der maximalen Höhe auf alle Karten
    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });
  }
  
  // Aufrufen der Funktion beim Laden und beim Ändern der Fenstergröße
  window.addEventListener('load', adjustToolCardsHeight);
  window.addEventListener('resize', adjustToolCardsHeight);