import { writeFile } from "fs/promises";
import { render } from "./renderCharacters.ts";
import { loadCharacters } from "./characters.ts";

const characters = await loadCharacters(7);
const html = render(characters);
await writeFile('characters.html', html);

