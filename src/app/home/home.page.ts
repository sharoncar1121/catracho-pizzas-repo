import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonText, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent,
    CommonModule,
    IonButton,
    IonText,
    IonAlert],
})
export class HomePage {
  orderButtons= [
    {
      text: 'No, gracias',
      role: 'cancel',
      cssClass: 'secondary',
      handler:()=>{
        alert("No se envió la orden")
      }
    },
    {
      text: 'Enviar Orden',
      role: 'send',
      cssClass: 'secondary',
      handler:()=>{
        alert("Se envió la orden")
      }
    }
  ];
  tittleCard:string= 'BIG NEW YORKER BACON & BANANA PEPPERS';
  subtittle:string= 'Es una pizza de gran tamaño, inspirada al new yor con rebanadas grandes de pepperoni y trocitos de bacon, con abundante chile banana peppers';
  contador:number=1;
 
  constructor() {}

  aumentar(): void{
    console.log('aumenta works!')
    this.contador++;
    console.log(this.contador)
  }

  disminuir(): void{
    console.log('disminuir works!')
    this.contador--;
    console.log(this.contador)
  }
}
