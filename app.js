let allData = [];

const container = document.getElementById("chars");
const loading = document.getElementById("loading");

fetch("https://akabab.github.io/superhero-api/api/all.json")
  .then(res => res.json())
  .then(data => {
    allData = data;

    loading.textContent = "";

    container.innerHTML = data.slice(0, 50).map(char => `
      <div class="card">
        <img src="${char.images.sm}" alt="${char.name}">
        <h3>${char.name}</h3>
      </div>
    `).join("");
  })
  .catch(() => {
    loading.textContent = "Error loading data";
  });

function showAll() {
  container.innerHTML = allData.slice(0, 50).map(char => `
    <div class="card">
      <img src="${char.images.sm}" alt="${char.name}">
      <h3>${char.name}</h3>
    </div>
  `).join("");
}

function showDC() {
  const dc = allData.filter(char =>
    char.biography.publisher === "DC Comics"
  );

  container.innerHTML = dc.slice(0, 50).map(char => `
    <div class="card">
      <img src="${char.images.sm}" alt="${char.name}">
      <h3>${char.name}</h3>
    </div>
  `).join("");
}

function searchChar(e) {
  const val = e.target.value.toLowerCase();

  const result = allData.filter(char =>
    char.name.toLowerCase().includes(val)
  );

  container.innerHTML = result.slice(0, 50).map(char => `
    <div class="card">
      <img src="${char.images.sm}" alt="${char.name}">
      <h3>${char.name}</h3>
    </div>
  `).join("");
}

function sortInt() {
  const sorted = [...allData].sort((a, b) =>
    b.powerstats.intelligence - a.powerstats.intelligence
  );

  container.innerHTML = sorted.slice(0, 50).map(char => `
    <div class="card">
      <img src="${char.images.sm}" alt="${char.name}">
      <h3>${char.name}</h3>
    </div>
  `).join("");
}

function toggleMode() {
  if (document.body.className === "light") {
    document.body.className = "";
  } else {
    document.body.className = "light";
  }
}