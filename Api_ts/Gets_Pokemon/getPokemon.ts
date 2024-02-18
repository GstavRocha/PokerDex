import axios from "axios";


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
                console.log(colorsStyle)
                if (colorsStyle.next === null && colorsStyle.previous == null) {
                    colorsStyle.results.map((cores: any)=>{
                        return cores.name
                    })
                }else{
                    console.log('testes')
                }
            }
            catch (erro){
                console.error(erro, 'ERRO')
            }
        })
}
