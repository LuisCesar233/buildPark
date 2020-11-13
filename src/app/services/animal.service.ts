import { Injectable } from '@angular/core';

export interface Animal {
  id?: string;
  nombre: string;
  nombreC: string;
  tipo: string;
  imagen: Array<imag>;
  coments: comments;
}
// tslint:disable-next-line: class-name
interface imag {
  id: string;
  link: string;
}

// tslint:disable-next-line: class-name
interface comments {
  descripcion: string;
  habitos: string;
  reproducion: string;
  alimentacion: string;
  habitad: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animal: Array<Animal>;
  private imaga: Array<imag>;

  constructor() {
    this.imaga = [
      {
        id: '1',
        link: 'assets/vidio/bioparque.mov'
      },
      {
        id: '0',
        link: 'assets/img/DSC05863.JPG'
      }, {
        id: '0',
        link: 'assets/img/DSC02.JPG'
      }
    ];

    this.animal = [
    {
      id: '1',
      nombre: 'puma',
      nombreC: 'puma Concolor',
      tipo: 'felino',
      imagen: this.imaga,
      coments: {
        descripcion: 'pelo cortoLos machos adultos miden entre 1.5 y 2.75 metros de largo, abarcando desde la punta de la cola hasta la nariz. Pueden pesar de 53 a 100 kilos. Lo más grandes han pesado más de 120 kg. Las hembras suelen ser de menor tamaño y peso variando entre 29 y 64 kilos. Su pelaje por lo general es dorado, pero puede tener variaciones en gris o tonos rojizos. Son carnívoros se alimentan de vertebrados grandes y medianos, particularmente venados. De hábitos diurnos y nocturnos, es solitario',
        habitos: 'Diurnos y nocturnos, es solitario',
        reproducion: 'Reproducción 繁殖 Un puma no se aparea hasta que no haya encontrado un territorio apto y cómodo para hacerlo. La hembra en celo emite sonidos que son respondidos por el macho de la misma manera al mismo tiempo que huele el área genital de esta. En una hora pueden copular hasta nueve veces, aunque este acto dure sólo menos de un minuto. Las hembras son maduras sexualmente entre el año y medio y los tres años. Los machos lo son a los tres años. El período de gestación dura aproximadamente 91 días y comúnmente preñan cada dos a tres años. Hay casos de monogamia en las hembras pero mayormente se relacionan con diferentes parejas. Las camadas van de uno a seis cachorros, pero por lo regular se dan de tres a cuatro. Su peso al nacer varía de 226 a 453 gramos y lo hacen con los ojos cerrados que después de diez días logran abrir. Después de 40 días son destetados y permanecen junto a la madre los próximos 15 meses como mínimo.',
        alimentacion: 'Son carnívoros se alimentan de vertebrados grandes y medianos, particularmente venados.',
        habitad: ''},
    },
    {
      id: '2',
      nombre: 'jaguar',
      nombreC: 'pantera onca',
      tipo: 'felino',
      imagen: [
                {id: '0', link: 'assets/img/DSC02.JPG'},
                {id: '0', link: 'assets/img/DSC02.JPG'}
              ],
      coments: {
        descripcion: 'pelo corto',
        habitos: 'come carne',
        reproducion: '',
        alimentacion: '',
        habitad: ''
      },
    },
    {
      id: '3',
      nombre: 'paraba castana',
      nombreC: 'ara serveru',
      tipo: 'ave',
      imagen: [
        {id: '0', link: 'assets/img/1582285631.jpg'},
      ],
      coments: {
        descripcion: 'ES CONSIDERADO UN GUACAMAYO PEQUEÑO: DE ADULTO MIDE ENTRE 40 Y 50 CM DE LONGITUD; LOS MACHOS PESAN ENTRE 350 Y 390 G Y LAS HEMBRAS DE 300 A 360 G.RNRNEN SU PLUMAJE PREDOMINA EL COLOR VERDE, EXCEPTO POR LA PARTE INFERIOR DE LAS ALAS, QUE ES ROJA, Y LA PARTE SUPERIOR DE LAS PRIMARIAS, QUE ES AZUL; LAS PLUMAS DE LA COLA TAMBIÉN SON ROJAS Y AZULES.',
        habitos: 'EN PAREJAS O BANDADAS PEQUEÑAS DE HASTA 10 AVES, PER PUEDE SER ENCONTRADA EN MAYOR NÚMERO EN DORMIDEROS. SE ALIMENTA EN EL DOSEL.',
        reproducion: '',
        alimentacion: '',
        habitad: ''
      },
    },
  ];
  }
  getAnimal() {
    return this.animal;
  }
  getAnimalId(id: string) {
    return {...this.animal.find(ani => {
        return ani.id === id;
      })
    };
  }
}
