import {Component} from '@angular/core';
import {UIChart, DataTable, Column, Header} from 'primeng/primeng';

@Component({
               moduleId: module.id,
               selector: 'app-root',
               templateUrl: 'app.component.html',
               styleUrls: ['app.component.css'],
               directives: [
                   UIChart,
                   DataTable,
                   Column,
                   Header
               ]
           })
export class AppComponent {
    title = 'app works very well!';
    
    data: any;
    
    cars: Array<any>;
    
    selectedCar: any;
    
    constructor() {
        this.data = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July'
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [
                        65,
                        59,
                        80,
                        81,
                        56,
                        55,
                        40
                    ],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [
                        28,
                        48,
                        40,
                        19,
                        86,
                        27,
                        90
                    ],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        
        this.cars = [
            {"brand": "VW", "year": 2012, "color": "White", "vin": "dsad231ff"},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
            {"brand": "Mercedes", "year": 1995, "color": "White", "vin": "hrtwy34"},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
            {"brand": "Jaguar", "year": 2013, "color": "White", "vin": "greg34"},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
        ];
    }
}
