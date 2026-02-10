
const produits = [
    { nom: "Le Burger de David", prix: "15€", desc: "Bœuf bio, cheddar affiné, sauce maison.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { nom: "Salade Fraîcheur", prix: "12€", desc: "Légumes du marché et vinaigrette miel-citron.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300" },
    { nom: "Pasta Delizia", prix: "14€", desc: "Pâtes fraîches, pesto basilic et pignons.", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=300" }
];

const menuGrid = document.getElementById('menu-grid');


if(menuGrid) {
    produits.forEach(item => {
        const card = `
            <div class="card">
                <img src="${item.image}" alt="${item.nom}">
                <h3>${item.nom}</h3>
                <p>${item.desc}</p>
                <strong>${item.prix}</strong>
            </div>
        `;
        menuGrid.innerHTML += card;
    });
}