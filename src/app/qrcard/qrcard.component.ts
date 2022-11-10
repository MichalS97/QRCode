import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-qrcard',
  templateUrl: './qrcard.component.html',
  styleUrls: ['./qrcard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QRCardComponent implements OnInit {

  @Input() header: string = '';
  @Input() image: string = '';
  @Input() altImageText: string = '';

  constructor() {
  }


  ngOnInit(): void {

  }

}
