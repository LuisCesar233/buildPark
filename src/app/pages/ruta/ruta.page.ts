import { LoadingController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.page.html',
  styleUrls: ['./ruta.page.scss'],
})
export class RutaPage implements OnInit {
  map: any;
  mapEle: any;
  ruta: 'https://drive.google.com/file/d/1U6eUORMuMly5gOgSQrSnfIM4wOFQynbG/view?usp=sharing';
  rt3: 'https://doc-0k-50-docs.googleusercontent.com/docs/securesc/hh2nvdd13351ijpcl83t6o7na6k6jh3u/ghehk8ortjt8nd0kkrr4f9tstdjsps28/1605158925000/12674676346621710395/12674676346621710395/1U3LKQlYJQ2ql6ksPk4GhZ8m0ORRSUrMM?e=download&authuser=0&nonce=50ng2g4s183bi&user=12674676346621710395&hash=6rhhd5g69ejaocfb45mue3m3samd5b98';
  ruta2: 'https://doc-0c-50-docs.googleusercontent.com/docs/securesc/hh2nvdd13351ijpcl83t6o7na6k6jh3u/9nti9ofvg0seopmvf4hj02ndeu3vmepu/1605156675000/12674676346621710395/12674676346621710395/1U6eUORMuMly5gOgSQrSnfIM4wOFQynbG?e=download&authuser=0&nonce=fokspnh74bdee&user=12674676346621710395&hash=hkosfeiedrba4hc13mbn9257ogo4j6gr';

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.loadMap();
  }

  getLocation(){}

  async loadMap() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const rta = await this.geolocation.getCurrentPosition();
   /* const myLatLng = {
      lat: rta.coords.latitude,
      lng:  rta.coords.longitude,
    };*/
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude,
    };
    const myLatLng1 = { 
      lat: -21.7226626,
      lng: -64.5982039,
    };
    const myLatLng2 = { 
      lat: -21.5070587,
      lng: -64.7486252,
    };
    const mapEle: HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 18,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      scaleControl: false,
      mapTypeControl: false,
      streetViewControl: false,
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      loading.dismiss();
      const marker = new google.maps.Marker({
        position: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        map: this.map,
        title: 'Estas Aqui',
        /*icon:'https://sites.google.com/site/juanbraian7/resources/pin2.png',
        animation:google.maps.Animation.BOUNCE*/
      });
    });
    const ctaLayer = new google.maps.KmlLayer({
      url: this.ruta2,
      map: this.map,
    });
  }

  alertaPosition(lon1,lon2,lat1,lat2) {
    if(this.calculateDistance(lon1,lon2,lat1,lat2)>0.03) {
      alert('vea esto..')
    } else {
      console.log(this.calculateDistance(lon1,lon2,lat1,lat2));
    }
  }

  calculateDistance(lon1, lon2, lat1, lat2){
      let p = 0.017453292519943295;
      let c = Math.cos;
      let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
      let dis = (12742 * Math.asin(Math.sqrt(a)));
      return Math.trunc(dis);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
