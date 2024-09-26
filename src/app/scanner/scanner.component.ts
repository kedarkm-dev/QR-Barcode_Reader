import { Component } from '@angular/core';
import { BarcodeScanner } from 'dynamsoft-javascript-barcode';
import { VideoDecodeComponent } from "../video-decode/video-decode.component";

import { CommonModule } from '@angular/common';
import '../dbr';
import { ImageDecodeComponent } from '../image-decode/image-decode.component';
@Component({
    selector: 'app-scanner',
    standalone: true,
    templateUrl: './scanner.component.html',
    styleUrl: './scanner.component.scss',
    imports: [VideoDecodeComponent, CommonModule, ImageDecodeComponent]
})
export class ScannerComponent {
  bShowScanner = true;
  bShowImgDecode = false;
  async ngOnInit(): Promise<void> {
    // Load the library on page load to speed things up.
    try {
      await BarcodeScanner.loadWasm();
    } catch (ex: any) {
      let errMsg;
      if (ex.message?.includes("network connection error")) {
        errMsg = "Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.";
      } else {
        errMsg = ex.message||ex;
      }
      console.error(errMsg);
      alert(errMsg);
    }
  }
  showScanner(): void {
    this.bShowScanner = true;
    this.bShowImgDecode = false;
  }
  showImgDecode(): void {
    this.bShowScanner = false;
    this.bShowImgDecode = true;
  }
}
