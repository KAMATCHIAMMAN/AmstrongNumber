import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
  styleUrls: ['./mychild.component.css']
})
export class MychildComponent {
  @Input() CheckAmstrongOrNot:number=0;

  Amstrong():boolean{
    let answer=0;
    let num=this.CheckAmstrongOrNot;
    const totalnumbers=num.toString.length;
    while(num>0)
    {
      const digits=num%10;
      answer=answer+(Math.pow(digits,totalnumbers));
      num=Math.floor(num/10);
    }
    return answer===this.CheckAmstrongOrNot;

  }
 

}
