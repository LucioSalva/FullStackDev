import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public alterego: string = 'Hulk';
  public name: string = 'vaner';
  public age: number = 45;

  get capitalizedName(): string{

    return this.name.toUpperCase();
  }
    getHeroDescription(): string{

      return `${ this.name } - ${ this.age }`;
    }

    changeHero(): void{

      this.alterego = 'Spider-Man';

    }

    changeName(): void{

      this.name = 'Peter Parker';

    }

    changeAge(): void{

      this.age = 23;

    }


}
