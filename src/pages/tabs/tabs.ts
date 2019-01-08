import { Component } from '@angular/core';

import { HistoricoPage } from '../../pages/historico/historico';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { SearchPage } from '../search/search';
import { NotificationsPage } from '../notifications/notifications';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab4Root = SearchPage;
  tab2Root = HistoricoPage;
  tab3Root = SettingsPage;
  tab5Root = NotificationsPage;
  // tab3Root = ContactPage;

  constructor() {

  }

}
