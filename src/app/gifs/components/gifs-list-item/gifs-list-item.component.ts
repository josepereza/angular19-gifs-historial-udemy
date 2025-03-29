import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif';

@Component({
  selector: 'app-gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
  styleUrl: './gifs-list-item.component.css'
})
export class GifsListItemComponent {
img=input.required<Gif>()
}
