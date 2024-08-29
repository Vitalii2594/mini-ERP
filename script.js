// script.js

// Funkcja pokazująca wybrany moduł
function showModule(moduleId) {
    // Ukryj wszystkie moduły
    const modules = document.querySelectorAll('.module');
    modules.forEach(module => module.style.display = 'none');

    // Pokaż wybrany moduł
    document.getElementById(moduleId).style.display = 'block';
}

// Funkcja pokazująca wybrany podmoduł
function showSubModule(subModuleId) {
    // Ukryj wszystkie podmoduły
    const subModules = document.querySelectorAll('.sub-module');
    subModules.forEach(subModule => subModule.style.display = 'none');

    // Pokaż wybrany podmoduł
    document.getElementById(subModuleId).style.display = 'block';
}

// Przykładowe funkcje akcji - do implementacji
function showTrainingDetails() {
    showSubModule('trainingDetails');
}

function editTraining() {
    alert('Edytuj szkolenie - funkcjonalność do zaimplementowania');
}

function deleteTraining() {
    alert('Usuń szkolenie - funkcjonalność do zaimplementowania');
}

// Analogiczne funkcje dla pozostałych modułów i podmodułów
