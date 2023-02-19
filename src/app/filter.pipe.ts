import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values:any[],filters:string,propertyname:string): any[] {
    const result:any=[];
    if(!values||filters==''||propertyname==''){
      return values;
    }
    values.forEach((a:any)=>{
      if(a[propertyname].trim().toLowerCase().includes(filters.toLowerCase())){
        result.push(a);
      }
    })
    return result;
  }

}
