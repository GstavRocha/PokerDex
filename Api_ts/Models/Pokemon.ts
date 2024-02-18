export class Pokemon{
    public id: number;
    public name: string;
    public color: string;
    public url: string;
    public tipe: string;
    public location_area: string;

    constructor(
        id: number,
        name: string,
        color: string,
        url: string,
        tipe: string,
        location_area: string
        )
        {
            this.id = id;
            this.name = name;
            this. color = color;
            this.url = url;
            this.tipe = tipe;
            this.location_area = location_area;

    }
    public getId():number {
        return this.id;
    }
    public setId(id: number):any{
        this.id = id;
    }
    public getName():string{
        return this.name;
    }
    public setName(name: string):any{
        this.name = name;
    }
    public getColor():string{
        return this.color;
    }
    public setColor(color: string):any{
        this.color = color;
    }
    public getUrl():string{
        return this.url;
    }
    public setUrl(url: string):any{
        this.url = url;
    }
    public getTipe():string{
        return this.tipe;
    }
    public setTipe(tipe: string): any{
        this.tipe = tipe;
    }
    public getLocal(): string{
        return this.location_area;
    }
    public setLocal(local: string){
        this.location_area = local;
    }
}
