import { Character } from "./characters.ts";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
<head>`;

export const renderCharacter = (character: Character) => {
    return `<html>
    ${head(character.name)}
    <body>
        <h1>LOTR Charter: ${character.name}</h1>
    </body>
</html>`;
};