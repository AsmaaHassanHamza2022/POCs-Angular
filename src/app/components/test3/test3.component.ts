import { Component } from '@angular/core';
import { MainService } from 'src/app/Services/main-.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component {
  constructor(private mainService:MainService){
    this.mainService.chanableText="Iam Test 3 component";


  }

}
