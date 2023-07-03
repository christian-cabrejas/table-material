import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSortModule} from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableShowcasePageComponent } from './pages/table-showcase-page/table-showcase-page.component';
import { TableShowcaseComponentComponent } from './components/table-showcase-component/table-showcase-component.component';
import { TableJsonShowcaseComponentComponent } from './components/table-json-showcase-component/table-json-showcase-component.component';
import { TableJsonShowcasePageComponent } from './pages/table-json-showcase-page/table-json-showcase-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TableShowcasePageComponent,
    TableShowcaseComponentComponent,
    TableJsonShowcaseComponentComponent,
    TableJsonShowcasePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
