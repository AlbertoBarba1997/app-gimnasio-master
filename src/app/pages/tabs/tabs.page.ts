import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public pages = [
    { tab: 'tablas-ejercicios', name: 'Ejercicios', icon: 'calendar-outline' },
    { tab: 'reservar-clases', name: 'Clases', icon: 'accessibility-outline' },
    { tab: 'reservar-musculacion', name: 'Musculacion', icon: 'barbell-outline' },
    { tab: 'perfil', name: 'Perfil', icon: 'person-circle-outline' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
