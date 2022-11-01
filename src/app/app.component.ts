import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurrConvertor';
  amount:number=0;

  public dropDownValue = "";
  SetDropDownValue(drpValue : any){
    this.dropDownValue = drpValue.target.value;
  }
}
