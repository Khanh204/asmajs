import {Component, Input} from "@angular/core";

@Component({
  selector:"student",
  templateUrl: `./student.component.html`
})
export class StudentComponent{
  @Input()
  classN?: string;
  bangai = 1;
  thembangai(){
    this.bangai++;
  }
  giambangai(){
    if(this.bangai>0){
      this.bangai--;
    }
  }

}
