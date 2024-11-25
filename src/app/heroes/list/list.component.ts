import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroNames: string[] = ['Spider-Man','Hulk','Thor','Iron-Man', 'Deadpool'];
  // ! Arroga error de esta forma deletedHero: string = '';
  deletedHero?: string;

  removeHero(): void{
    this.deletedHero = this.heroNames.pop();
  }

}
