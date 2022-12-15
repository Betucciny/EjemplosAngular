import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nicolas';
  age = 18;
  myImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  btnDisable = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  }
  names= ['Nico', 'Julie', 'Santi'];
  newName = '';
  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }

  incriseAge(){
    this.person.age ++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName)
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index,1);
  }
}
