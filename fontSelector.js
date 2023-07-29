import { resetZoom } from './colorPicker.js';

// Lista de fontes disponíveis
var fonts = [
  { name: 'Segoe UI', size: '24px' },
  { name: 'Nova Oval', size: '24px' },
  { name: 'Cedarville Cursive', size: '24px' },
  { name: 'MedievalSharp', size: '24px' },
  { name: 'Nova Cut', size: '24px' },
  { name: 'Nova Script', size: '24px' },
  { name: 'Tangerine', size: '24px' },
  { name: 'Zeyada', size: '24px' },
];

// Função para criar e adicionar as opções de fonte no seletor
function populateFontOptions() {
  var select = document.getElementById('select');

  for (var a = 0; a < fonts.length; a++) {
    var opt = document.createElement('option');
    opt.value = opt.innerHTML = fonts[a].name;
    opt.style.fontFamily = fonts[a].name;
    select.add(opt);
  }
}

// Função para atualizar a fonte do texto com base na seleção do seletor de fontes
function fontChange() {
  var x = document.getElementById('select').selectedIndex;
  var y = document.getElementById('select').options;
  var text = document.getElementById('editMe');
  text.style.fontFamily = y[x].text;

  // Definir o tamanho da fonte com base na escolha da fonte
  var selectedFont = y[x].text;
  var fontSize = '24px'; // Tamanho padrão para a maioria das fontes
  var fontWeight = '500';

  // Verificar se a fonte selecionada é Tangerine ou Zeyada e definir o tamanho apropriado
  if (selectedFont === 'Tangerine' || selectedFont === 'Zeyada') {
    fontSize = '30px';
    fontWeight = 'bold';
  }
  text.style.fontWeight = fontWeight;
  text.style.fontSize = fontSize;
}

// Chama a função para popular as opções de fontes
populateFontOptions();

// Adiciona um evento de escuta ao carregar a página
window.addEventListener('DOMContentLoaded', function () {
  // Define a fonte inicial ao carregar a página
  fontChange();

  // Adiciona um evento de escuta para atualizar a fonte ao selecionar uma opção no seletor
  var select = document.getElementById('select');
  select.addEventListener('change', fontChange);
});

var originalFontSize; // Variável para armazenar o tamanho de fonte inicial em pixels
var currentZoom = 0; // Contador para controlar o zoom

// Função para atualizar o tamanho da fonte do texto
function updateFontSize() {
  var text = document.getElementById('editMe');
  var newSize = originalFontSize * (1 + currentZoom / 100); // Calcula o tamanho de fonte com o zoom atual

  // Limita o tamanho mínimo e máximo da fonte
  newSize = Math.max(newSize, originalFontSize * 0.5); // Mínimo 50%
  newSize = Math.min(newSize, originalFontSize * 1.5); // Máximo 150%

  text.style.fontSize = newSize + 'px';
}

// Função para aumentar o zoom em 10%
function zoomIn() {
  currentZoom += 10; // Aumenta o zoom em 10%

  // Limita a porcentagem de zoom entre 50% e 150%
  currentZoom = Math.min(currentZoom, 50);
  currentZoom = Math.max(currentZoom, -50);

  updateFontSize();
  updatePercent();
}

// Função para diminuir o zoom em 10%
function zoomOut() {
  currentZoom -= 10; // Diminui o zoom em 10%

  // Limita a porcentagem de zoom entre 50% e 150%
  currentZoom = Math.min(currentZoom, 50);
  currentZoom = Math.max(currentZoom, -50);

  updateFontSize();
  updatePercent();
}

// Função para atualizar a porcentagem de zoom exibida
function updatePercent() {
  var percent = 100 + currentZoom; // Calcula a porcentagem de zoom com base no tamanho base de 100%
  document.getElementById('percent').textContent = percent + '%';
}

// Adiciona um evento de escuta ao carregar a página
window.addEventListener('DOMContentLoaded', function () {
  // Obtém o tamanho de fonte inicial do texto
  var text = document.getElementById('editMe');
  originalFontSize = parseFloat(window.getComputedStyle(text).fontSize);

  // Define a fonte inicial ao carregar a página
  updateFontSize();
  updatePercent();
});

// Adiciona um evento de escuta para o botão de zoomIn
var zoomInButton = document.getElementById('zoomIn');
zoomInButton.addEventListener('click', zoomIn);

// Adiciona um evento de escuta para o botão de zoomOut
var zoomOutButton = document.getElementById('zoomOut');
zoomOutButton.addEventListener('click', zoomOut);
