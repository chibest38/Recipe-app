function searchRecipe() {
  const query = document.getElementById("searchInput").value.trim();
  const resultArea = document.getElementById("searchResult");

  if (query) {
    resultArea.innerHTML = `🔍 Showing results for: <strong>${query}</strong>`;
  } else {
    resultArea.innerHTML = "⚠️ Please enter a search term.";
  }
}
