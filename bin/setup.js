//
//Database setup file for testing and initial setup
//


db.Pokemon.drop();

db.Pokemon.insert(
    [
        { _id: 1, name: "bulbasaur", type1: "grass", type2: "poison"},
        { _id: 2, name: "ivysaur", type1: "grass", type2: "poison"},
        { _id: 3, name: "venusaur", type1: "grass", type2: "poison"},
        { _id: 4, name: "charmander", type1: "fire", type2: ""},
        { _id: 5, name: "charmeleon", type1: "fire", type2: ""},
        { _id: 6, name: "charizard", type1: "fire", type2: "flying"},
        { _id: 7, name: "squirtle", type1: "water", type2: ""},
        { _id: 8, name: "wartortle", type1: "water", type2: ""},
        { _id: 9, name: "blastoise", type1: "water", type2: ""},
        { _id: 10, name: "caterpie", type1: "bug", type2: ""},
        { _id: 11, name: "metapod", type1: "bug", type2: ""},
        { _id: 12, name: "butterfree", type1: "bug", type2: "flying"},
        { _id: 13, name: "weedle", type1: "bug", type2: "poison"},
        { _id: 14, name: "kakuna", type1: "bug", type2: "poison"},
        { _id: 15, name: "beedrill", type1: "bug", type2: "poison"},
        { _id: 16, name: "pidgey", type1: "normal", type2: "flying"},
        { _id: 17, name: "pidgeotto", type1: "normal", type2: "flying"},
        { _id: 18, name: "pidgeot", type1: "normal", type2: "flying"},
        { _id: 19, name: "rattata", type1: "normal", type2: ""},
        { _id: 20, name: "raticate", type1: "normal", type2: ""},
        { _id: 21, name: "spearow", type1: "normal", type2: "flying"},
        { _id: 22, name: "fearow", type1: "normal", type2: "flying"},
        { _id: 23, name: "ekans", type1: "poison", type2: ""},
        { _id: 24, name: "arbok", type1: "poison", type2: ""},
        { _id: 25, name: "pikachu", type1: "electric", type2: ""},
        { _id: 26, name: "raichu", type1: "electric", type2: ""},
        { _id: 27, name: "sandshrew", type1: "ground", type2: ""},
        { _id: 28, name: "sandslash", type1: "ground", type2: ""},
        { _id: 29, name: "nidoran ♀", type1: "poison", type2: ""},
        { _id: 30, name: "nidorina", type1: "poison", type2: ""},
        { _id: 31, name: "nidoqueen", type1: "poison", type2: "ground"},
        { _id: 32, name: "nidoran ♂", type1: "poison", type2: ""},
        { _id: 33, name: "nidorino", type1: "poison", type2: ""},
        { _id: 34, name: "nidoking", type1: "poison", type2: "ground"},
        { _id: 35, name: "clefairy", type1: "normal", type2: ""},
        { _id: 36, name: "clefable", type1: "normal", type2: ""},
        { _id: 37, name: "vulpix", type1: "fire", type2: ""},
        { _id: 38, name: "ninetales", type1: "fire", type2: ""},
        { _id: 39, name: "jigglypuff", type1: "normal", type2: ""},
        { _id: 40, name: "wigglytuff", type1: "normal", type2: ""},
        { _id: 41, name: "zubat", type1: "poison", type2: "flying"},
        { _id: 42, name: "golbat", type1: "poison", type2: "flying"},
        { _id: 43, name: "oddish", type1: "grass", type2: "poison"},
        { _id: 44, name: "gloom", type1: "grass", type2: "poison"},
        { _id: 45, name: "vileplume", type1: "grass", type2: "poison"},
        { _id: 46, name: "paras", type1: "bug", type2: "grass"},
        { _id: 47, name: "parasect", type1: "bug", type2: "grass"},
        { _id: 48, name: "venonat", type1: "bug", type2: "poison"},
        { _id: 49, name: "venomoth", type1: "bug", type2: "poison"},
        { _id: 50, name: "diglett", type1: "ground", type2: ""},
        { _id: 51, name: "dugtrio", type1: "ground", type2: ""},
        { _id: 52, name: "meowth", type1: "normal", type2: ""},
        { _id: 53, name: "persian", type1: "normal", type2: ""},
        { _id: 54, name: "psyduck", type1: "water", type2: ""},
        { _id: 55, name: "golduck", type1: "water", type2: ""},
        { _id: 56, name: "mankey", type1: "fighting", type2: ""},
        { _id: 57, name: "primeape", type1: "fighting", type2: ""},
        { _id: 58, name: "growlithe", type1: "fire", type2: ""},
        { _id: 59, name: "arcanine", type1: "fire", type2: ""},
        { _id: 60, name: "poliwag", type1: "water", type2: ""},
        { _id: 61, name: "poliwhirl", type1: "water", type2: ""},
        { _id: 62, name: "poliwrath", type1: "water", type2: "fighting"},
        { _id: 63, name: "abra", type1: "psychic", type2: ""},
        { _id: 64, name: "kadabra", type1: "psychic", type2: ""},
        { _id: 65, name: "alakazam", type1: "psychic", type2: ""},
        { _id: 66, name: "machop", type1: "fighting", type2: ""},
        { _id: 67, name: "machoke", type1: "fighting", type2: ""},
        { _id: 68, name: "machamp", type1: "fighting", type2: ""},
        { _id: 69, name: "bellsprout", type1: "grass", type2: "poison"},
        { _id: 70, name: "weepinbell", type1: "grass", type2: "poison"},
        { _id: 71, name: "victreebel", type1: "grass", type2: "poison"},
        { _id: 72, name: "tentacool", type1: "water", type2: "poison"},
        { _id: 73, name: "tentacruel", type1: "water", type2: "poison"},
        { _id: 74, name: "geodude", type1: "rock", type2: "ground"},
        { _id: 75, name: "graveler", type1: "rock", type2: "ground"},
        { _id: 76, name: "golem", type1: "rock", type2: "ground"},
        { _id: 77, name: "ponyta", type1: "fire", type2: ""},
        { _id: 78, name: "rapidash", type1: "fire", type2: ""},
        { _id: 79, name: "slowpoke", type1: "water", type2: "psychic"},
        { _id: 80, name: "slowbro", type1: "water", type2: "psychic"},
        { _id: 81, name: "magnemite", type1: "electric", type2: "steel"},
        { _id: 82, name: "magneton", type1: "electric", type2: "steel"},
        { _id: 83, name: "farfetch'd", type1: "normal", type2: "flying"},
        { _id: 84, name: "doduo", type1: "normal", type2: "flying"},
        { _id: 85, name: "dodrio", type1: "normal", type2: "flying"},
        { _id: 86, name: "seel", type1: "water", type2: ""},
        { _id: 87, name: "dewgong", type1: "water", type2: "ice"},
        { _id: 88, name: "grimer", type1: "poison", type2: ""},
        { _id: 89, name: "muk", type1: "poison", type2: ""},
        { _id: 90, name: "shellder", type1: "water", type2: ""},
        { _id: 91, name: "cloyster", type1: "water", type2: "ice"},
        { _id: 92, name: "gastly", type1: "ghost", type2: "poison"},
        { _id: 93, name: "haunter", type1: "ghost", type2: "poison"},
        { _id: 94, name: "gengar", type1: "ghost", type2: "poison"},
        { _id: 95, name: "onix", type1: "rock", type2: "ground"},
        { _id: 96, name: "drowzee", type1: "psychic", type2: ""},
        { _id: 97, name: "hypno", type1: "psychic", type2: ""},
        { _id: 98, name: "krabby", type1: "water", type2: ""},
        { _id: 99, name: "kingler", type1: "water", type2: ""},
        { _id: 100, name: "voltorb", type1: "electric", type2: ""},
        { _id: 101, name: "electrode", type1: "electric", type2: ""},
        { _id: 102, name: "exeggcute", type1: "grass", type2: "psychic"},
        { _id: 103, name: "exeggutor", type1: "grass", type2: "psychic"},
        { _id: 104, name: "cubone", type1: "ground", type2: ""},
        { _id: 105, name: "marowak", type1: "ground", type2: ""},
        { _id: 106, name: "hitmonlee", type1: "fighting", type2: ""},
        { _id: 107, name: "hitmonchan", type1: "fighting", type2: ""},
        { _id: 108, name: "lickitung", type1: "normal", type2: ""},
        { _id: 109, name: "koffing", type1: "poison", type2: ""},
        { _id: 110, name: "weezing", type1: "poison", type2: ""},
        { _id: 111, name: "rhyhorn", type1: "ground", type2: "rock"},
        { _id: 112, name: "rhydon", type1: "ground", type2: "rock"},
        { _id: 113, name: "chansey", type1: "normal", type2: ""},
        { _id: 114, name: "tangela", type1: "grass", type2: ""},
        { _id: 115, name: "kangaskhan", type1: "normal", type2: ""},
        { _id: 116, name: "horsea", type1: "water", type2: ""},
        { _id: 117, name: "seadra", type1: "water", type2: ""},
        { _id: 118, name: "goldeen", type1: "water", type2: ""},
        { _id: 119, name: "seaking", type1: "water", type2: ""},
        { _id: 120, name: "staryu", type1: "water", type2: ""},
        { _id: 121, name: "starmie", type1: "water", type2: "psychic"},
        { _id: 122, name: "mr. mime", type1: "psychic", type2: ""},
        { _id: 123, name: "scyther", type1: "bug", type2: "flying"},
        { _id: 124, name: "jynx", type1: "ice", type2: "psychic"},
        { _id: 125, name: "electabuzz", type1: "electric", type2: ""},
        { _id: 126, name: "magmar", type1: "fire", type2: ""},
        { _id: 127, name: "pinsir", type1: "bug", type2: ""},
        { _id: 128, name: "tauros", type1: "normal", type2: ""},
        { _id: 129, name: "magikarp", type1: "water", type2: ""},
        { _id: 130, name: "gyarados", type1: "water", type2: "flying"},
        { _id: 131, name: "lapras", type1: "water", type2: "ice"},
        { _id: 132, name: "ditto", type1: "normal", type2: ""},
        { _id: 133, name: "eevee", type1: "normal", type2: ""},
        { _id: 134, name: "vaporeon", type1: "water", type2: ""},
        { _id: 135, name: "jolteon", type1: "electric", type2: ""},
        { _id: 136, name: "flareon", type1: "fire", type2: ""},
        { _id: 137, name: "porygon", type1: "normal", type2: ""},
        { _id: 138, name: "omanyte", type1: "rock", type2: "water"},
        { _id: 139, name: "omastar", type1: "rock", type2: "water"},
        { _id: 140, name: "kabuto", type1: "rock", type2: "water"},
        { _id: 141, name: "kabutops", type1: "rock", type2: "water"},
        { _id: 142, name: "aerodactyl", type1: "rock", type2: "flying"},
        { _id: 143, name: "snorlax", type1: "normal", type2: ""},
        { _id: 144, name: "articuno", type1: "ice", type2: "flying"},
        { _id: 145, name: "zapdos", type1: "electric", type2: "flying"},
        { _id: 146, name: "moltres", type1: "fire", type2: "flying"},
        { _id: 147, name: "dratini", type1: "dragon", type2: ""},
        { _id: 148, name: "dragonair", type1: "dragon", type2: ""},
        { _id: 149, name: "dragonite", type1: "dragon", type2: "flying"},
        { _id: 150, name: "mewtwo", type1: "psychic", type2: ""},
        { _id: 151, name: "mew", type1: "psychic", type2: ""}
    ]
);

db.Sightings.drop();
db.Display.drop();

//Breaks input
db.Sightings.createIndex({ location: "2dsphere" });