import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import  { ChartsModule } from  'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { InformesRoutes } from './informes.routing';
import { ComisionesGeneradasComponent } from './comisiones-generadas/comisionesGeneradas.component';
import {EstadisticaComponent } from './estadistica/estadistica.component';
import { ReportesVentaComponent } from './reportes-venta/reportesVenta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* import { IncomeCounterComponent } from '../dashboards/dashboard-components/income-counter/income-counter.component';
import { ProjectCounterComponent } from '../dashboards/dashboard-components/project-counter/project-counter.component';
import { ProjectComponent } from '../dashboards/dashboard-components/project/project.component';
import { RecentcommentComponent } from '../dashboards/dashboard-components/recent-comment/recent-comment.component';
import { RecentmessageComponent } from '../dashboards/dashboard-components/recent-message/recent-message.component';
import { SocialSliderComponent } from '../dashboards/dashboard-components/social-slider/social-slider.component';
import { TodoComponent } from '../dashboards/dashboard-components/to-do/todo.component';
import { ProfileComponent } from '../dashboards/dashboard-components/profile/profile.component';
import { PageAnalyzerComponent } from '../dashboards/dashboard-components/page-analyzer/pa.component';
import { WidgetComponent } from '../dashboards/dashboard-components/widget/widget.component';
import { CustomerSupportComponent } from '../dashboards/dashboard-components/customer-support/cs.component';
import { TotalEarningComponent } from '../dashboards/dashboard-components/total-earnings/te.component';
import { FeedsComponent } from '../dashboards/dashboard-components/feeds/feeds.component';
import { EarningComponent } from '../dashboards/dashboard-components/earning-report/earning-report.component';
import { ActivityComponent } from '../dashboards/dashboard-components/activity-timeline/activity.component';
 
 */
@NgModule({
  imports: [ 
    CommonModule,
    ChartsModule,
    ChartistModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    RouterModule.forChild(InformesRoutes)
  ],
  declarations: [
    ComisionesGeneradasComponent,
    EstadisticaComponent,
    ReportesVentaComponent/* ,
    IncomeCounterComponent,
    ProjectCounterComponent, 
    ProjectComponent, 
    RecentcommentComponent,
    RecentmessageComponent, 
    SocialSliderComponent, 
    TodoComponent,
    ProfileComponent,
    PageAnalyzerComponent,
    WidgetComponent,
    CustomerSupportComponent,
    TotalEarningComponent,
    FeedsComponent,
    EarningComponent,
    ActivityComponent  */
  ]
})

export class InformeModule {}
