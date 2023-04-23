import { Character } from "./characters.ts";
import { header_body } from "./renderCharacters.ts";

const head = (title: string) => `
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>${header_body}

            h2{
            margin-top: 2rem;
            font-size: 26px;
            margin-left: 0.8rem;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',Verdana, sans-serif;
            }
            
            .key{
            margin-bottom: 0.3rem;
            color: rgb(59, 59, 59);
            font-weight: bold;
            font-size: 17px;
            }

            .value{
            font-size: 14px;
            color: rgb(52, 145, 68);
            }

            .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid rgb(194, 175, 35);
            background-color: white;
            padding: 0.5rem 1rem;
            border-radius: 15px; 
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',Verdana, sans-serif;
            }

            .information{
            margin: 4rem 0;
            display: flex;
            justify-content: space-evenly
            }

            p{
            margin-top: 6rem;
            margin-left: 0.8rem;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',Verdana, sans-serif;
            }

            iframe{
            margin-left: 0.8rem;
            height: 60%;
            width: 50%;
            }

            footer{
                height: 10rem;
            }
    </style>
  <head>`;

export const renderOneCharacter = (character: Character) => {
    return `
<html>
    ${head(character.name)}
    <body>
        <header>
          <h1>The Lord of the Rings: Characters</h1>
          <img src="../ring.png" height="45px" width="60px">
        </header>
        
        <h2>${character.name}</h2>
        <div class="information">
            <div class="container">
                <span class="key">Race</span>
                <span class="value">${character.race}</span>
            </div>   
                
            <div class="container">
                <span class="key">Gender</span>
                <span class="value">${character.gender === ""? "-" : character.gender}</span>
            </div>  
                            
            <div class="container">
                <span class="key">Birth</span>
                <span class="value">${character.birth === ""? "-" : character.birth}</span>
            </div> 
                            
            <div class="container">
                <span class="key">Death</span>
                <span class="value">${character.death === ""? "-" : character.death}</span>
            </div> 
                      
            <div class="container">
                <span class="key">Spouse</span>
                <span class="value">${character.spouse === ""? "-" : character.spouse}</span>
            </div> 
        </div>  
        <p>You can see more information of the character in this web:</p>
        <iframe src="${character.wikiUrl}"></iframe>
        <footer>
        </footer>
    </body>
</html>`;
};