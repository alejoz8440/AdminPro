import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {


    this.contarTres().then(
      mensaje => console.log('Termino!', mensaje)
    )
    .catch( error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    return new Promise( (resolve, reject) => {

      let itervalo = setInterval( () => {

        let contador = 0;

        contador += 1;
        console.log(contador);

        if ( contador === 3) {
          resolve(true);
          clearInterval(itervalo);
        }
      }, 1000);

    });


  }

}
