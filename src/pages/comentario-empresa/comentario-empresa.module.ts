import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentarioEmpresaPage } from './comentario-empresa';

@NgModule({
  declarations: [
    ComentarioEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentarioEmpresaPage),
  ],
})
export class ComentarioEmpresaPageModule {}
