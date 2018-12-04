'use strict';

var wizardsCollection = document.querySelector('.setup');
var namesRandom = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnamesRandom = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorRandom = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorRandom = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFeatures = [];
var numberOfWizards = 4;

wizardsCollection.classList.remove('hidden');
var randomFunction = function () {
  for (var i = 0; i < numberOfWizards; i++) {
    var randomName = namesRandom[Math.floor(Math.random() * namesRandom.length)];
    var randomSurname = surnamesRandom[Math.floor(Math.random() * surnamesRandom.length)];
    var name = randomName + ' ' + randomSurname;
    var coatColor = coatColorRandom[Math.floor(Math.random() * coatColorRandom.length)];
    var eyesColor = eyesColorRandom[Math.floor(Math.random() * eyesColorRandom.length)];

    wizardFeatures.push({
      name: name,
      coatColor: coatColor,
      eyesColor: eyesColor,
    });
  }
  return wizardFeatures;
};
randomFunction();

var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var similarList = document.querySelector('.setup-similar-list');

for (var i = 0; i < numberOfWizards; i++) {
  var element = template.cloneNode(true);
  element.children[1].textContent = wizardFeatures[i].name;
  element.querySelector('.wizard-coat').style.fill = wizardFeatures[i].coatColor;
  element.querySelector('.wizard-eyes').style.fill = wizardFeatures[i].eyesColor;
  fragment.appendChild(element);
}

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
similarList.appendChild(fragment);
