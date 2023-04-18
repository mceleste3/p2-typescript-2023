export {}
import { token } from "./token.ts";
const headers = {
    'Accept': 'application/json',
    'Authorization': `${token}`,
  }

  const loadUsers = async (n: number) => {

    const response = await fetch('https://the-one-api.dev/v2/character', { headers: headers })
    const result: any = await response.json();
   //console.log(Object.keys(result)); --> [ "docs", "total", "limit", "offset", "page", "pages" ]
   //console.log(result); 
   //console.log(result.docs.length); --> 933
   const characters: any = [];

   for(let i = 0; i<n; i++){
   characters.push(result.docs[i]);
   }

   return characters;
  };

const characters = await loadUsers(2);
console.log(characters);