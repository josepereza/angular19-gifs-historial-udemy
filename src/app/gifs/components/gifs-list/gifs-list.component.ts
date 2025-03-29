import { Component, input } from '@angular/core';
import { GifsListItemComponent } from '../gifs-list-item/gifs-list-item.component';
import { Gif } from '../../interfaces/gif';

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css'
})
export class GifsListComponent {
img=input.required<Gif[]>()
}
