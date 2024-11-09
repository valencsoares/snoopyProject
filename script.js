const characters = [
    { id: 1, name: "Charlie Brown", image: "./images/cbBW.jpg" },
];

function uploadCharacters() {
    const container = document.getElementById('characters');
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';

        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;

        const name = document.createElement('h2');
        name.textContent = character.name;

        const button = document.createElement('button');
        button.textContent = 'Ver Descrição';

        characterDiv.appendChild(img);
        characterDiv.appendChild(name);
        characterDiv.appendChild(button);
        container.appendChild(characterDiv);
    });
}

document.addEventListener('DOMContentLoaded', uploadCharacters);
