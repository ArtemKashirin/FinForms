import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public finForms: FormGroup;


  constructor() {
    this.finForms = new FormGroup({
      balanceForm: new FormGroup({
        currentFixedAssets: new FormGroup({
          code1110: new FormControl('1', [Validators.required, Validators.minLength(1)],),
          code1120: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code1130: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code1140: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code1150: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code1160: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code1170: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code1180: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code1190: new FormControl('1', [Validators.required, Validators.minLength(1)])
        }),
        currentAssets: new FormGroup({
          code1210: new FormControl('3', [Validators.required, Validators.minLength(1)]),
          code1220: new FormControl('3', [Validators.required, Validators.minLength(1)]),
          code1230: new FormControl('3', [Validators.required, Validators.minLength(1)]),
          code1240: new FormControl('3', [Validators.required, Validators.minLength(1)]),
          code1250: new FormControl('3', [Validators.required, Validators.minLength(1)]),
          code1260: new FormControl('3', [Validators.required, Validators.minLength(1)])
        }),
        currentCapitalReserves: new FormGroup({
          code1310: new FormControl('5', [Validators.required, Validators.minLength(1)]),
          code1320: new FormControl('5', [Validators.required, Validators.minLength(1)]),
          code1340: new FormControl('5', [Validators.required, Validators.minLength(1)]),
          code1350: new FormControl('5', [Validators.required, Validators.minLength(1)]),
          code1360: new FormControl('5', [Validators.required, Validators.minLength(1)]),
          code1370: new FormControl('5', [Validators.required, Validators.minLength(1)])
        }),
        currentLongTermDuties: new FormGroup({
          code1410: new FormControl('7', [Validators.required, Validators.minLength(1)]),
          code1420: new FormControl('7', [Validators.required, Validators.minLength(1)]),
          code1430: new FormControl('7', [Validators.required, Validators.minLength(1)]),
          code1450: new FormControl('7', [Validators.required, Validators.minLength(1)])
        }),
        currentShortTermLiabilities: new FormGroup({
          code1510: new FormControl('9', [Validators.required, Validators.minLength(1)]),
          code1520: new FormControl('9', [Validators.required, Validators.minLength(1)]),
          code1530: new FormControl('9', [Validators.required, Validators.minLength(1)]),
          code1540: new FormControl('9', [Validators.required, Validators.minLength(1)]),
          code1550: new FormControl('9', [Validators.required, Validators.minLength(1)])
        }),
        previousFixedAssets: new FormGroup({
          c1110: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c1120: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c1130: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c1140: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c1150: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c1160: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c1170: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c1180: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c1190: new FormControl('2', [Validators.required, Validators.minLength(1)])
        }),
        previousAssets: new FormGroup({
          c1210: new FormControl('4', [Validators.required, Validators.minLength(1)]),
          c1220: new FormControl('4', [Validators.required, Validators.minLength(1)]),
          c1230: new FormControl('4', [Validators.required, Validators.minLength(1)]),
          c1240: new FormControl('4', [Validators.required, Validators.minLength(1)]),
          c1250: new FormControl('4', [Validators.required, Validators.minLength(1)]),
          c1260: new FormControl('4', [Validators.required, Validators.minLength(1)])
        }),
        previousCapitalReserves: new FormGroup({
          c1310: new FormControl('6', [Validators.required, Validators.minLength(1)]),
          c1320: new FormControl('6', [Validators.required, Validators.minLength(1)]),
          c1340: new FormControl('6', [Validators.required, Validators.minLength(1)]),
          c1350: new FormControl('6', [Validators.required, Validators.minLength(1)]),
          c1360: new FormControl('6', [Validators.required, Validators.minLength(1)]),
          c1370: new FormControl('6', [Validators.required, Validators.minLength(1)])
        }),
        previousLongTermDuties: new FormGroup({
          c1410: new FormControl('8', [Validators.required, Validators.minLength(1)]),
          c1420: new FormControl('8', [Validators.required, Validators.minLength(1)]),
          c1430: new FormControl('8', [Validators.required, Validators.minLength(1)]),
          c1450: new FormControl('8', [Validators.required, Validators.minLength(1)])
        }),
        previousShortTermLiabilities: new FormGroup({
          c1510: new FormControl('10', [Validators.required, Validators.minLength(1)]),
          c1520: new FormControl('10', [Validators.required, Validators.minLength(1)]),
          c1530: new FormControl('10', [Validators.required, Validators.minLength(1)]),
          c1540: new FormControl('10', [Validators.required, Validators.minLength(1)]),
          c1550: new FormControl('10', [Validators.required, Validators.minLength(1)])
        })
      }),
      profitStatement: new FormGroup({
        currentGrossProfit: new FormGroup({
          code2110: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2120: new FormControl('1', [Validators.required, Validators.minLength(1)])
        }),
        currentSalesRevenue: new FormGroup({
          code2210: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2220: new FormControl('1', [Validators.required, Validators.minLength(1)])
        }),
        currentProfitBeforeTax: new FormGroup({
          code2310: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2320: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2330: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2340: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2350: new FormControl('1', [Validators.required, Validators.minLength(1)])
        }),
        currentNetIncome: new FormGroup({
          code2410: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2430: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2450: new FormControl('1', [Validators.required, Validators.minLength(1)]),
          code2460: new FormControl('1', [Validators.required, Validators.minLength(1)])
        }),
        previousGrossProfit: new FormGroup({
          c2110: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2120: new FormControl('2', [Validators.required, Validators.minLength(1)])
        }),
        previousSalesRevenue: new FormGroup({
          c2210: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2220: new FormControl('2', [Validators.required, Validators.minLength(1)])
        }),
        previousProfitBeforeTax: new FormGroup({
          c2310: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2320: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2330: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2340: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2350: new FormControl('2', [Validators.required, Validators.minLength(1)])
        }),
        previousNetIncome: new FormGroup({
          c2410: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2430: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2450: new FormControl('2', [Validators.required, Validators.minLength(1)]),
          c2460: new FormControl('2', [Validators.required, Validators.minLength(1)])
        })
      })
    });

  }

  ngOnInit(): void {
    console.log(this.finForms)

  }

  summarizesResultSection(...formGroup: any[]): number {
    let sum: number = 0;
    formGroup.forEach(values => {
      for (let value in values) {
        sum += +values[value]
      }
    })
    return sum;
  }

}
