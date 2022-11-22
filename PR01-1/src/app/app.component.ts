import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PR01-1';

  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string | undefined;
  
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }
  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }
  tirar1() {
    this.valor1 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
      this.resultado = 'Ganaste';
    else this.resultado = 'Perdiste';
  }
  tirar2() {
    this.valor2 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
      this.resultado = 'Ganaste';
    else this.resultado = 'Perdiste';
  }
  tirar3() {
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
      this.resultado = 'Ganaste';
    else this.resultado = 'Perdiste';
  }
}
