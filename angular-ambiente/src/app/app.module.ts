import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './directives/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListApiComponent } from './components/list-api/list-api.component';
import { ListComponent } from './shared/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListComponent,
    ListApiComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
