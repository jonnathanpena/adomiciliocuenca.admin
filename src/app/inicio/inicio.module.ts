import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioRoutes } from './inicio.routing';
import { ChartistModule} from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { InicioComponent } from './inicio.component';
import { IncomeCounterComponent } from '../dashboards/dashboard-components/income-counter/income-counter.component';
import { ProjectCounterComponent } from '../dashboards/dashboard-components/project-counter/project-counter.component';
import { ProjectComponent } from '../dashboards/dashboard-components/project/project.component';
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

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        Ng2SmartTableModule,
    	RouterModule.forChild(InicioRoutes)
    ],
	declarations: [
        IncomeCounterComponent,
        ProjectCounterComponent, 
        ProjectComponent, 
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
        ActivityComponent,
        InicioComponent
    ]
})
export class InicioModule { }