import { Component } from '@angular/core';

declare var require: any;
const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=11000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontAddress';

  Pokedex = require('pokeapi-js-wrapper');

  // onChoose(event?: MouseEvent) {
  //   this.Pokedex = new this.Pokedex.Pokedex();
  //   const evtMsg = event
  //     ? ' Event target class is ' + (event.target as HTMLElement).className
  //     : // with await, be sure to be in an async function (and in a try/catch)
  //       (async () => {
  //         const Pokemon = await this.Pokedex.getPokemonByName('golduck');
  //         debugger;
  //         console.log(Pokemon);
  //       })();
  // }
  pokeAdd(event?: MouseEvent) {
    this.Pokedex = new this.Pokedex.Pokedex();
    debugger;
    var newpoke = document.getElementById('poke-autocomplete');
    // document.getElementById("a").innerHTML ="";
    // = "<img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + newpokeValue + ".gif\">";
  }
}
