import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ScannerComponent } from "./scanner/scanner.component";
// the scanner!
// import { ZXingScannerModule } from '@zxing/ngx-scanner';
// import { BarcodeFormat } from '@zxing/library';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ScannerComponent]
})

export class AppComponent {
  // qrResultString!: string | null;
  // title = 'genericReader-pwa';
  // formatsEnabled: BarcodeFormat[] = [
  //   BarcodeFormat.CODE_128,
  //   BarcodeFormat.DATA_MATRIX,
  //   BarcodeFormat.EAN_13,
  //   BarcodeFormat.QR_CODE,
  // ];
  // tryHarder = false;
  // hasPermission: boolean | undefined;


  // onCodeResult(resultString: string) {
  //   this.qrResultString = resultString;
  //   console.log(this.qrResultString);
  // }
  // clearResult(): void {
  //   this.qrResultString = null;
  // }
  // onHasPermission(has: boolean) {
  //   this.hasPermission = has;
  // }
}
