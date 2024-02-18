import axios from "axios";
import { Pokemon } from "../Models/Pokemon";
let pokeId:Pokemon['id'] = 0;
let pokeName:Pokemon['name'] = '';
let pokeColor:Pokemon['color']= 'white';
let pokeUrl:Pokemon['url']= ''
let pokeTipe:Pokemon['tipe']= '';
let pokeLocal:Pokemon['location_area']= '';
export const PokeClass = new Pokemon(
    pokeId,
    pokeName,
    pokeColor,
    pokeUrl,
    pokeTipe,
    pokeLocal);

export function getPokeNameAndUrlAll(link: string): any{
    const treatmentLink: string = `${link}?offset=0&limit=100`;
    axios(treatmentLink)
        .then((resp) =>{
            try {
                const nomePoke = resp.data.results.map(function (names: any){
                    let nameUrl:{name: any, url: any} = {
                        name: names.name,
                        url: names.url
                    }
                    return nameUrl
                });
                console.log(nomePoke)
                return nomePoke
            }catch (erro){
                console.error(erro, 'DEU PAU')
            }
            console.log(resp.status)

        })
}
export async function getPokemonNameFind(link: string,pokeInstance: Pokemon,name:string){
    try {
        let linkTreatment: string = `${link}${name}`;
        const resp = await axios(linkTreatment);
        let nameIs = resp.data.forms[0].name;
        let urlIs = resp.data.forms[0].url;
        if(resp.status === 200){
            let nomeUrl:{name: any, url: any} = {
                name: nameIs,
                url: urlIs

            }
            pokeInstance.setName(nomeUrl.name)
            pokeInstance.setUrl(nomeUrl.url)
        }
    }
    catch (erro){
        console.error(erro, 'Deu erro')
    }

}
export async function getPokemonColors(link: string, pokeInstance: Pokemon) {
    axios.get(link)
        .then((resp) => {
            try {
                 resp.data.results.forEach((cores: any)=>{
                    pokeInstance.setColor(cores.name)
                    }
                )
            }
            catch (erro){
                console.error(erro, 'ERRO')
            }
        })
}
export async function findPokeLocalization(link:string) {
    try{
        let linkTreatment:string =`${link}?offset=0&limit=100",`
        const resp = await  axios(linkTreatment);
        console.log(resp.status)
        return link;
    }catch(erro){
        console.error(erro, 'Deu Erro')
    }
}
// export async function getLocalization(link: String, name: string, pokeInstance: Pokemon ){

// } 