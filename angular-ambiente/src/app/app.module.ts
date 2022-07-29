import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './directives/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListComponent } from './shared/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
