import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
private http=inject(HttpClient)
trendingGifs=signal<Gif[]>([])
trendingGifsResource=signal<Gif[]>([])


searchHistory=signal<Record<string, Gif[]>>({})
searchHistoryKeys=computed(()=>Object.keys(this.searchHistory()))
  constructor() { 
    this.loadTrendingGifs()
    
  }
/*  getGifResource(){
return  httpResource<GiphyResponse>(() => ({
  url: `${environment.giphyUrl}/gifs/trending`,
  params: { api_key:environment.giphyApikey,
    limit:20, },
}))
 } */
  
  loadTrendingGifs(){
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,

     {
      params:{
        api_key:environment.giphyApikey, 
        limit:20,
      }
     } ).subscribe(resp=>{
      console.log(resp)
     const gifs=GifMapper.mapGiphyItemtoGifArray(resp.data)
    this.trendingGifs.set(gifs)
     })

      }

  searchGifs(query:string):Observable<Gif[]>{
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,

      {
       params:{
         api_key:environment.giphyApikey,
         limit:20,
         q:query,
       }
      } ).pipe(
map(({data})=>data),
map((items)=> GifMapper.mapGiphyItemtoGifArray(items))
,tap((items)=>{
  this.searchHistory.update((history)=>({
    ...history, [query.toLowerCase()]:items,
  }))
})

      )
      
    /*   .subscribe(resp=>{
       console.log('patada en el culo',resp)
      const gifs=GifMapper.mapGiphyItemtoGifArray(resp.data)
     this.trendingGifs.set(gifs)
      }) */
  }    
    
    getHistoryGifs(query:string):Gif[]{
      return this.searchHistory()[query] ?? [];
    }
}
