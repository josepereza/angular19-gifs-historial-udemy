import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export default class SearchPageComponent {
  gifService=inject(GifsService)
  gifs=signal<Gif[]>([])
  onSearch(data:string){
    this.gifService.searchGifs(data).subscribe(resp=>{
      this.gifs.set(resp)
    })

  }

}
