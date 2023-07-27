// Obtem o elemento do parágrafo editável
const editableParagraph = document.getElementById('editMe');

// Function to update the height of the container div based on the content
function updateContainerHeight() {
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();
  const editableRect = editableParagraph.getBoundingClientRect();

  if (editableRect.bottom > containerRect.bottom) {
    const editableHeight = editableParagraph.scrollHeight;
    container.style.minHeight = `${Math.max(90, editableHeight + 20)}vh`; // Use Math.max to ensure it's at least 90vh
  } else {
    container.style.minHeight = '90vh'; // Caso contrário, mantenha a altura mínima como 90vh
  }
}

// Call the function on initial load and on scroll events
window.addEventListener('DOMContentLoaded', updateContainerHeight);
window.addEventListener('scroll', updateContainerHeight);
