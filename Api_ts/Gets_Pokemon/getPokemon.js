"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonColors = exports.getPokemonNameFind = exports.getPokeNameAndUrlAll = void 0;
const axios_1 = __importDefault(require("axios"));
const Pokemon_1 = require("../Models/Pokemon");
let pokeId = 0;
let pokeName = '';
let pokeColor = 'white';
let pokeUrl = '';
let pokeTipe = '';
let pokeLocal = '';
const PokeClass = new Pokemon_1.Pokemon(pokeId, pokeName, pokeColor, pokeUrl, pokeTipe, pokeLocal);
pokeId = PokeClass.id;
pokeName = PokeClass.name;
pokeColor = PokeClass.getColor();
PokeClass.url = pokeUrl;
PokeClass.tipe = pokeTipe;
function getPokeNameAndUrlAll(link) {
    const treatmentLink = `${link}?offset=0&limit=100`;
    (0, axios_1.default)(treatmentLink)
        .then((resp) => {
        try {
            const nomePoke = resp.data.results.map(function (names) {
                let nameUrl = {
                    name: names.name,
                    url: names.url
                };
                return nameUrl;
            });
            console.log(nomePoke);
            return nomePoke;
        }
        catch (erro) {
            console.error(erro, 'DEU PAU');
        }
        console.log(resp.status);
    });
}
exports.getPokeNameAndUrlAll = getPokeNameAndUrlAll;
function getPokemonNameFind(link, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let linkTreatment = `${link}${name}`;
            const resp = yield (0, axios_1.default)(linkTreatment);
            let pokeName = resp.data.forms[0];
            if (resp.status === 200) {
                return pokeName;
            }
        }
        catch (erro) {
            console.error(erro, 'Deu erro');
        }
    });
}
exports.getPokemonNameFind = getPokemonNameFind;
function getPokemonColors(link) {
    return __awaiter(this, void 0, void 0, function* () {
        axios_1.default.get(link)
            .then((resp) => {
            try {
                let colorsStyle = resp.data;
                if (colorsStyle.next !== null && colorsStyle.previous !== null) {
                    colorsStyle.results.map((cores) => {
                        PokeClass.setColor(cores.name);
                        console.log('entro', true);
                        console.log(PokeClass.getColor());
                        return cores.name;
                    });
                }
                else {
                    console.log('não entro', false);
                    console.log('teste');
                }
            }
            catch (erro) {
                console.error(erro, 'ERRO');
            }
        });
    });
}
exports.getPokemonColors = getPokemonColors;
