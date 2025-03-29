import { Component, computed, inject, input } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gif-history',
  imports: [GifsListComponent],
  templateUrl: './gif-history.component.html',
  styleUrl: './gif-history.component.css'
})
export default class GifHistoryComponent {
query = input<string>('')
gifService=inject(GifsService)
gifsByKey=computed (()=> this.gifService.getHistoryGifs(this.query()))
}
