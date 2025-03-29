import { Gif } from "../interfaces/gif";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {

    static mapGiphyItemtoGif(item:GiphyItem):Gif{
        return {
            id:item.id,
            title:item.title,
            url:item.images.original.url
        }
    }
    static mapGiphyItemtoGifArray(items:GiphyItem[]):Gif[]{
        return  items.map(this.mapGiphyItemtoGif)
            
        
    }
}