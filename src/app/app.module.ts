import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { SettingsPage } from '../pages/settings/settings';
import { SearchPage } from '../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';
import { PerfilPage } from '../pages/perfil/perfil';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HistoricoPage } from '../pages/historico/historico';
import { HistoricoProvider } from '../providers/historico/historico';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ConfigPerfilPage } from '../pages/config-perfil/config-perfil';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ComentarioProvider } from '../providers/comentario/comentario';
import { ComentarioEmpresaPage } from '../pages/comentario-empresa/comentario-empresa';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    RegistroPage,
    SettingsPage,
    SearchPage,
    PerfilPage,
    HistoricoPage,
    NotificationsPage,
    ConfigPerfilPage,
    ChangePasswordPage,
    ForgotPasswordPage,
    ComentarioEmpresaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GooglePlaceModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'coloquesuaapikeyaqui'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    RegistroPage,
    SettingsPage,
    SearchPage,
    PerfilPage,
    HistoricoPage,
    NotificationsPage,
    ConfigPerfilPage,
    ChangePasswordPage,
    ForgotPasswordPage,
    ComentarioEmpresaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsuariosServiceProvider,
    Geolocation,
    HistoricoProvider,
    ComentarioProvider
  ]
})
export class AppModule { }
