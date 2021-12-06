import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme : Element = document.querySelector('#theme')!;

  constructor() {

    const localTheme: string = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.theme.setAttribute('href', localTheme!);

    console.log('settings service init');
  }

  changeTheme( theme: string ): void {
    const url: string = `./assets/css/colors/${theme}.css`;

    this.theme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }


  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');

    links.forEach( element => {
      
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.theme?.getAttribute('href');

      if ( btnThemeUrl === currentTheme ) { 
        element.classList.add('working');
      }

    });

      
  }

}
