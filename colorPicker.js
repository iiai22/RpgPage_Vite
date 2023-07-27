// Função para atualizar a cor do parágrafo com o ID "editMe" com a cor selecionada
function updateColor(event) {
  const colorPicker = document.getElementById('colorPicker');
  const color = event.target.value;
  const editMe = document.getElementById('editMe');
  editMe.style.color = color;
}

// Função para resetar a cor do seletor para "#151516"
function resetColor() {
  const colorPicker = document.getElementById('colorPicker');
  colorPicker.value = '#151516';
  const editMe = document.getElementById('editMe');
  editMe.style.color = '#151516';
}

// Adiciona um ouvinte de eventos para detectar quando a cor for alterada no seletor
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', updateColor);

// Adiciona um ouvinte de eventos para detectar o clique no div com ID "reset"
const resetDiv = document.getElementById('reset');
resetDiv.addEventListener('click', resetColor);
