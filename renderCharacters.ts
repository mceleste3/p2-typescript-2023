import { Character } from "./characters.ts";
import { renderCharacter } from "./renderCharacter.ts";
import { writeFile } from "fs/promises";

export const header_body: string = `
            body{
                margin: 0;
                background-color: #f7f4ee;
            }

            header{
                display: flex;
                justify-content: center;
                background-color: rgb(226, 255, 182);
                border-bottom: 1px solid rgb(178, 173, 24);
                margin-bottom: 2.5rem;
            }

            h1{
                text-align: center;
                object-fit: cover;
                font-style: italic;
            }

            img{
                margin-left: 0.7rem;
                margin-top: 1rem;
            }`

const head = (title: string) => `
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>${header_body}
            p{
                margin-left: 0.5rem;
                font-family: sans-serif;
            }

            .character{
                border-radius: 7px;
                margin: 0.5rem;
                text-decoration: none;
                color: black;
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
                background-color: rgb(251, 255, 245);
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
        bodyContent += `<a class="character" target="_blank" href="${generateFile(character, num)}">
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
        <header>
            <h1>The Lord of the Rings: Characters</h1>
            <img src="ring.png" height="45px" width="60px">
        </header>
        <p>Select the name of character for more information</p>
            ${renderCharacters(characters)}
    </body>
</html>`;
};