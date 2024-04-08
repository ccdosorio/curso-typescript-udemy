import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");
// Expandiendo la clase (mostrar que el decorador lo bloqueara)
// (Pokemon.prototype as any).customName = "Pikachu";
// console.log(charmander);
// charmander.savePokemonToBD(50);
// console.log(charmander);

charmander.publicApi = "test";
