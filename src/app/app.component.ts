import {Component} from '@angular/core';
import {UIChart} from 'primeng/primeng';

@Component({
               moduleId: module.id,
               selector: 'app-root',
               templateUrl: 'app.component.html',
               styleUrls: ['app.component.css'],
               directives: [UIChart]
           })
export class AppComponent {
    title = 'app works!';
    
    data: any;
    
    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    }
}
