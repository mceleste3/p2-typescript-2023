export {};
import { token } from "./token.ts";

class Character {
  constructor(
    private _id: string,
    public name: string,
    public race: string,
    public gender: string,
    public birth: string,
    public realm: string,
    public death: string,
    public spouse: string,
    public wikiUrl: string
  ) {}
}

const headers = {
  Accept: "application/json",
  Authorization: `${token}`,
};

const loadCharacters = async (n: number) => {
  const response = await fetch("https://the-one-api.dev/v2/character", {
    headers: headers,
  });
  const result: any = await response.json();
  //console.log(Object.keys(result)); --> [ "docs", "total", "limit", "offset", "page", "pages" ]
  //console.log(result);
  //console.log(result.docs.length); --> 933

  const characters: Array<Character> = [];

  for (let i = 0; i < n; i++) {
    characters.push(
      new Character(
        result.docs[i]._id,
        result.docs[i].name,
        result.docs[i].race,
        result.docs[i].gender,
        result.docs[i].birth,
        result.docs[i].realm,
        result.docs[i].death,
        result.docs[i].spouse,
        result.docs[i].wikiUrl
      )
    );
  }

  return characters;
};

const characters: Array<Character> = await loadCharacters(60);
console.log(characters);
