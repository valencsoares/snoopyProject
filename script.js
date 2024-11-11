const characters = [
    { id: 1, name: "Charlie Brown", image: "./images/cb/cbBW.png", description: "A classic underdog, Charlie Brown embodies the spirit of perseverance. His unwavering optimism, despite constant setbacks, makes him a relatable and endearing character. His loyalty to his friends, particularly Snoopy, is unwavering.", css: "cb" },
    { id: 2, name: "Woodstock", image: "./images/wo/woBW.png", description: "Snoopy's loyal and energetic sidekick, Woodstock is a bundle of joy. His simple pleasures and boundless enthusiasm bring a sense of childlike wonder to the comic strip. His chirps and squawks, though often unintelligible, convey a world of emotion.", css: "wo"},
    { id: 3, name: "Franklin", image: "./images/fk/fkBW.png", description: "A symbol of diversity and friendship, Franklin is a well-rounded and intelligent character. He balances his academic pursuits with extracurricular activities and is always willing to lend a helping hand. His calm and collected demeanor often contrasts with the more chaotic personalities of his friends.", css: "fk"},
    { id: 5, name: "Lucy", image: "./images/lucy/lucyBW.png", description: "A strong-willed and opinionated character, Lucy is often seen as bossy and self-centered. However, beneath her tough exterior lies a complex and vulnerable individual. Her desire for love and acceptance, particularly from Schroeder, drives many of her actions.", css: "lucy" },
    { id: 4, name: "linus", image: "./images/li/liBW.png", description: "Linus is a philosophical and imaginative character. His unwavering belief in the Great Pumpkin, despite annual disappointments, reflects his optimistic nature. His relationship with his sister, Lucy, is often tumultuous, but he remains steadfast in his affection for her.", css: "li" },
    { id: 6, name: "Pigpen", image: "./images/pp/ppBW.png", description: "A unique and enigmatic character, Pigpen defies societal norms. His carefree attitude and indifference to cleanliness make him a source of amusement and fascination. Despite his appearance, he possesses a kind and gentle heart.", css: "pp" },
    { id: 7, name: "Marcie", image: "./images/ma/maBW.png", description: "Marcie is a thoughtful and intelligent character. She is often the voice of reason among her friends, particularly Peppermint Patty. Her admiration for Charlie Brown is evident, though she often teases him in a playful manner.", css: "ma" },
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
                img.classList.add(character.css); 
                break;
            }
        }

        const name = document.createElement('h2');
        name.textContent = character.name;

        const description = document.createElement('p');
        description.textContent = character.description;
        description.classList.add("description")

        characterDiv.appendChild(img);
        characterDiv.appendChild(name);
        characterDiv.appendChild(description);
        container.appendChild(characterDiv);
    });
}

document.addEventListener('DOMContentLoaded', uploadCharacters);
