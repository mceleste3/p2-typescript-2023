import { Character } from "./characters.ts";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
<head>`;

const renderCharacters = (characters: Array<Character>) => {
    let bodyContent= "";
    let num = 1;
    characters.forEach(character => {
        bodyContent += `<div class="character">
        <pre>${num}. ${character.name}</pre>
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