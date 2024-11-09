const characters = [
    { id: 1, name: "Charlie Brown", image: "./images/cbBW.jpg", description: "zzz" },
    { id: 2, name: "Woodstock", image: "./images/woBW.jpg", description: "" },
];

function uploadCharacters() {
    const container = document.getElementById('characters');
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';

        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;

        for (let i = 1; i <= 18; i++) {
            if (character.id === i) {
                img.classList.add(`hoverImg${i}`); 
                break;
            }
        }

        const name = document.createElement('h2');
        name.textContent = character.name;

        const description = document.createElement('p');
        description.textContent = character.description;

        characterDiv.appendChild(img);
        characterDiv.appendChild(name);
        characterDiv.appendChild(description);
        container.appendChild(characterDiv);
    });
}

document.addEventListener('DOMContentLoaded', uploadCharacters);
