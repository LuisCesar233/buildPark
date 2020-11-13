import { AnimalService } from './../services/animal.service';
import { RutaPage } from './../pages/ruta/ruta.page';
import { ScannerPage } from './../pages/scanner/scanner.page';
import { Component } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { DetailPage } from '../pages/detail/detail.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animal: any;
  images: Array<{id: string; link: string; nombreId: string; nombre: string}> = [];

  slidesOpt: {
    initialSlide: 0,
    speed: 100,
    autoplay: true,
  };

  constructor(
    private modalCtrl: ModalController,
    private animalService: AnimalService
  ) {
    this.loadGalery();
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  async modalQR() {
    const modal = await this.modalCtrl.create({
      component: ScannerPage,
      cssClass: 'my-custo-m-class'
    });
    return await modal.present();
  }
  async modalMap() {
    const modal = await this.modalCtrl.create({
      component: RutaPage,
      cssClass: 'my-custo-m-class'
    });
    return await modal.present();
  }

  loadGalery() {
    this.animal = this.animalService.getAnimal();
    console.log(this.animal);
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.animal.length; index++) {
      const ani = this.animal[index].imagen;
      for (let j = 0; j < ani.length; j++) {
        // tslint:disable-next-line: max-line-length
        const aniid = { id: ani[j].id, link: ani[j].link, nombreId: this.animal[index].id, nombre: this.animal[index].nombre  };
        console.log(aniid);
        if (aniid.id === '0') {
          this.images.push(aniid);
        }
      }
      // console.log(ani);
      // this.images.push(ani);
      // console.log(this.images);
    }
    console.log(this.images);
  }
  async ver(id) {
     const modal = await this.modalCtrl.create({
       component: DetailPage,
       componentProps: {
         id
       }
     });
     return await modal.present();
     console.log(id);
   }

   modalinfo() {

   }
}
