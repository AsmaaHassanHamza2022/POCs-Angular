import { Component } from '@angular/core';
import { MainService } from 'src/app/Services/main-.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  constructor(private mainService:MainService){
    this.mainService.chanableText="Iam Test 2 component";


  }

}
