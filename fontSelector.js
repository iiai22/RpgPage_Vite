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
