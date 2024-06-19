import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slogan : string = "Your one stop shop for everything"
  imageUrl : string = "https://i.pinimg.com/564x/23/78/d2/2378d22e3e1b32d2c8a84cd220140337.jpg"

  getSlogan() : string {
    return "Your new slogan for everything."
  }
}
