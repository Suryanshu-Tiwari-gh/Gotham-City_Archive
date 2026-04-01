const container = document.getElementById("chars");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

fetch("https://akabab.github.io/superhero-api/api/all.json")
  .then(res => res.json())
  .then(data => {
    allData = data;

    loading.textContent = "";

    container.innerHTML = data.slice(0, 563).map(char => `
      <div class="card">
        <img src="${char.images.sm}">
        <h3>${char.name}</h3>
      </div>
    `).join("");
  })
  .catch(() => {
    loading.textContent = "";
    error.textContent = "Error loading data";
  });

function showDC(data) {
  const dcChars = data.filter(char => char.biography.publisher === "DC Comics");

  container.innerHTML = dcChars.slice(0, 500).map(char => `
    <div class="card">
      <img src="${char.images.sm}" alt="${char.name}">
      <h3>${char.name}</h3>
    </div>
  `).join("");
}