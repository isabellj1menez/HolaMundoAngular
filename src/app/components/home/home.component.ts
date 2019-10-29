
import { Component, OnInit } from '@angular/core';


//decorador sirve para no escribir la funcnion componen({})
@Component({
  //se encarga de comunicar/ conectar los componentes 
  selector: 'app-home',
  //sirve para no llenar de basura el typescript `vbvbc`solo reconoce archivos html 
  templateUrl: './home.component.html',
  //acepta  varios links
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public Mostrar = false;
  // public Mostrar: boolean = false;

  public Frase: any ={
    mensaje: 'Un gran poder conlleva una gran responsabilidad',
    autor: 'el chistorete'
  }

  public personajes: string[]=['Spiderman','Venom', 'Dr. Octopus']


  constructor() { }

  ngOnInit() {
  }

 public MetodoCambiar(){
  //  es la negacion de una variable
   this.Mostrar=!this.Mostrar;
   console.log(this.Mostrar)
  }

}
