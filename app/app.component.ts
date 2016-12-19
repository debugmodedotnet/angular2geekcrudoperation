import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
<div class='container'>
<nav class="navbar navbar-default ">
  <ul class="nav navbar-nav">
    <li><a routerLink="/home">Home</a></li>
     <li><a routerLink="/geeks">Geeks</a></li>
    <li><a routerLink="/addgeek">Add Geek</a></li>
  </ul>
</nav>


<h1 class="text-center">{{appTitle}}</h1>
<br/>
<router-outlet></router-outlet>
<div>
  
  `,
})
export class AppComponent  { 
  appTitle = 'The ng-geek App';
 }
