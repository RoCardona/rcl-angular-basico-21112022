import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css'],
})
export class DadoComponent implements OnInit {

  @Input() valor: number | string | undefined;
  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;


  constructor() {}

  ngOnInit() {
    this.valor1 = Math.trunc(Math.random() * 6) + 1;
    this.valor2 = Math.trunc(Math.random() * 6) + 1;
    this.valor3 = Math.trunc(Math.random() * 6) + 1;

  }
}
