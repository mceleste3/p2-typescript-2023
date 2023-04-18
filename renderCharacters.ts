import { Character } from "./characters.ts";
import { renderCharacter } from "./renderCharacter.ts";
import { writeFile } from "fs/promises";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
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
        bodyContent += `<div class="character">
        <a target="_black" href="${generateFile(character, num)}">${num}. ${character.name}</a>
        </div>`;
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
        ${renderCharacters(characters)}
    </body>
</html>`;
};