import axios from "axios";
import { Pokemon } from "../Models/Pokemon";
let pokeId:Pokemon['id'] = 0;
let pokeName:Pokemon['name'] = '';
let pokeColor:Pokemon['color']= 'white';
let pokeUrl:Pokemon['url']= ''
let pokeTipe:Pokemon['tipe']= '';
let pokeLocal:Pokemon['location_area']= '';
const PokeClass = new Pokemon(
    pokeId,
    pokeName,
    pokeColor,
    pokeUrl,
    pokeTipe,
    pokeLocal);
pokeId = PokeClass.id;
pokeName = PokeClass.name;
pokeColor = PokeClass.getColor();
PokeClass.url = pokeUrl;
PokeClass.tipe = pokeTipe;

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
export async function getPokemonNameFind(link: string,name:string){
    try {
        let linkTreatment: string = `${link}${name}`;
        const resp = await axios(linkTreatment);
        let pokeName = resp.data.forms[0]
        if(resp.status === 200){
        return pokeName;
        }
    }
    catch (erro){
        console.error(erro, 'Deu erro')
    }

}
export async function getPokemonColors(link: string) {
    axios.get(link)
        .then((resp) => {
            try {
                let colorsStyle = resp.data;
                if (colorsStyle.next !== null && colorsStyle.previous !== null) {
                    colorsStyle.results.map((cores: any)=>{
                        PokeClass.setColor(cores.name);
                        console.log('entro', true)
                        console.log(PokeClass.getColor())
                        return cores.name;
                    })
                }else{
                    console.log('não entro', false)
                    console.log('teste')
                }
            }
            catch (erro){
                console.error(erro, 'ERRO')
            }
        })
}
