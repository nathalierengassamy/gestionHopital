import { Component, OnInit } from '@angular/core';

declare const $: any;
/*declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}*/
export const ROUTES = [
    { path: '/dashboard', title: 'Accueil',  icon: 'home', class: '' },
    { path: '/user-profile', 
      title: 'Connexion',  
      icon:'person', 
      class: '',
      children : [
        {
          path:'/user-profile/patient', title:'Je suis un patient', icon:'personal_injury',class:''
        },
        {
          path:'/user-profile/medecin', title:'Je suis un médecin', icon:'person',class:''
        },
        {
          path:'/user-profile/administrateur', title:'Je suis un administrateur', icon:'person',class:''
        },
      ]},
    { path: '/table-list', title: 'Prendre un rendez-vous',  icon:'calendar_month', class: '' },
    { path: '/typography', title: 'Infos pratiques',  icon:'info', class: '' },
    { path: '/icons', title: 'Faire un don',  icon:'favorite', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path : '/login', title: "Login" },
    { path: '/notifications', title: 'Statistiques',  icon:'content_paste', class: '' },
    { path: '/maps', title: 'Message',  icon:'contact_support', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  selected: any;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  select(item){
    this.selected = (this.selected === item ? null : item);
 }
 isActive(item){
   return this.selected === item;
 }
}
