import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableShowcasePageComponent } from './pages/table-showcase-page/table-showcase-page.component';
import { TableJsonShowcasePageComponent } from './pages/table-json-showcase-page/table-json-showcase-page.component';

const routes: Routes = [
  { path: "table1", component: TableShowcasePageComponent },
  { path: "json", component: TableJsonShowcasePageComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
