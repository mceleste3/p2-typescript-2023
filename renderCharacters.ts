import { Character } from "./characters.ts";
import { renderCharacter } from "./renderCharacter.ts";
import { writeFile } from "fs/promises";

const head = (title: string) => `
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            body{
                margin: 0;
                background-color: #f1fff0;
            }

            h1{
                text-align: center;
                object-fit: cover;
                font-style: italic;
                margin-top: 0.7rem;
            }

            p{
                margin-left: 0.5rem;
                font-family: sans-serif;
            }

            .character{
                text-decoration: none;
                color: black;
                border-radius: 7px;
                margin: 0.5rem;
                background-color: white;
                margin-bottom: 1rem;
                border: 1px solid rgb(84, 84, 70);
                display: block;
                cursor: pointer;
                padding: 0.5rem;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',Verdana, sans-serif;
            }

            .character:hover{
                border: 1px solid rgb(194, 175, 35);
            }
        </style>
    <head>`;

let generateFile = (character: Character, n: number) => {
    const html = renderCharacter(character);
    writeFile(`character${n}.html`, html);
    return `character${n}.html`;
}

const renderCharacters = (characters: Array<Character>) => {
    let bodyContent= "";
    let num: number = 1;
    characters.forEach(character => {
        bodyContent += `<a class="character" target="_black" href="${generateFile(character, num)}">
            ${num}. ${character.name}
        </a>`;
        num ++;
    });
    return bodyContent;
};

export const render = (characters: Array<Character>) => {
    return `
<html>
    ${head("Characters")}
    <body>
        <h1>The Lord of the Rings: Characters</h1>
        <hr />
        <p>Select the name of character for more information</p>
            ${renderCharacters(characters)}
    </body>
</html>`;
};