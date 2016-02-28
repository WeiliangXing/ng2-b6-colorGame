import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {InstructionComponent} from './instruction.component';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
        })

@RouteConfig([
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
  {path: '/instruction', name: 'Instruction', component: InstructionComponent}
])
export class AppComponent {
  public title = 'Color Game Title';
}
