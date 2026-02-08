import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../const/players';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(playersArr: Iplayers[], serchPlayers: string) : Iplayers[]{
    return playersArr.filter(p=>{
     return   p.team.toLowerCase().includes(serchPlayers)
    });
  }

}
