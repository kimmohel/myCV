import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'body'},
    {title: 'Personal Project', pageName: 'HomePage', tabComponent: 'TargetedPage', index: 1, icon: 'cog'},
    {title: 'Team project', pageName: 'HomePage', tabComponent: 'ProjectPage', index: 2,  icon: 'logo-steam'},
    {title: 'Technical Skills', pageName: 'HomePage', tabComponent: 'TechnicalPage', index: 3,  icon: 'attach'},
    {title: 'Soft Skills', pageName: 'HomePage', tabComponent: 'SoftPage', index: 4,  icon: 'jet'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }
//basic menu.ts
  openPage(page: PageInterface){
let params ={};

if(page.index){
  params = {tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index != undefined) {
  this.nav.getActiveChildNav().select(page.index);
} else {
  this.nav.setRoot(page.pageName, params);
}
  }

    isActive(page: PageInterface){
      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;

      }
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
      }
  }
  logout(){
    
    this.app.getRootNav().setRoot(MyApp);   
} 
} 
 