"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(id, name, color, url, tipe, location_area) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.url = url;
        this.tipe = tipe;
        this.location_area = location_area;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getUrl() {
        return this.url;
    }
    setUrl(url) {
        this.url = url;
    }
    getTipe() {
        return this.tipe;
    }
    setTipe(tipe) {
        this.tipe = tipe;
    }
    getLocal() {
        return this.location_area;
    }
    setLocal(local) {
        this.location_area = local;
    }
}
exports.Pokemon = Pokemon;
