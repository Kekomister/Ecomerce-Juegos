import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdJuegosService {

  juegos: any = [
    {
      id: 1,
      nombre: 'Cyberpunk 2077',
      descripcion: 'Teniendo lugar en Night City, un mundo abierto ambientado en el universo Cyberpunk, los jugadores asumen el papel de un mercenario personalizable conocido como V, que puede adquirir habilidades en piratería y maquinaria con opciones de combate cuerpo a cuerpo y a distancia. La historia principal sigue la lucha de V mientras lidian con un misterioso implante cibernético que amenaza con sobrescribir su cuerpo con la personalidad y los recuerdos de una celebridad fallecida que solo V percibe; los dos deben trabajar juntos para separarse y salvar la vida de V.',
      precio: 5200,
      consolas: ['PS4', 'PC', 'PS5'],
      genero: ['Acción', 'Aventura', 'Arcade'],
      anioRelease: 2020,
      imagenes: ['assets/Cyber Punk.jpg'],
      requisitos: "Alto"
    },
    {
      id: 2,
      nombre: 'Batman',
      descripcion: 'Batman: Arkham Knight es un juego de acción y aventuras ambientado en un mundo abierto de Gotham City, que el jugador puede explorar libremente desde el comienzo del juego, lo que le permite viajar sin problemas a cualquier lugar dentro de sus límites. Muchos de los dispositivos y elementos de juego de los juegos anteriores de Arkham regresan, que incluyen la pistola de garfio, el lanzador de líneas, los batarangs, el sistema de contraataque, Detective Vision y el dispositivo de piratería remota. The Disruptor recibe actualizaciones de juegos anteriores, convirtiéndose en un rifle que se puede usar para desactivar o detonar armas enemigas y torretas de drones, cajas de armas trampa para electrocutar a los enemigos que intentan armarse y etiquetar vehículos para que Batman los rastree. El batarang controlado a distancia también se actualiza a incluir un escáner que se puede tirar para obtener información adicional sobre el área circundante.',
      precio: 3500,
      consolas: ['PC', 'Xbox'],
      genero: ['RPG', 'Estrategia', 'Simulación'],
      anioRelease: 2015,
      imagenes: ['assets/Batman.jpg'],
      requisitos: "Medio"
    },
    {
      id: 3,
      nombre: 'Minecraft',
      descripcion: 'En Minecraft, los jugadores exploran un mundo tridimensional de bloques generado por procedimientos con un terreno virtualmente infinito y pueden descubrir y extraer materias primas, crear herramientas y artículos, y construir estructuras, movimientos de tierra y máquinas. Según el modo de juego elegido, los jugadores pueden luchar contra turbas hostiles, así como cooperar o competir contra otros jugadores en el mismo mundo. Los modos de juego incluyen un modo de supervivencia (en el que los jugadores deben adquirir recursos para construir en el mundo y mantener la salud) y un modo creativo (en el que los jugadores tienen recursos ilimitados y acceso al vuelo). La gran comunidad del juego también ofrece una amplia variedad de contenido generado por los usuarios, como modificaciones, servidores, máscaras, paquetes de texturas y mapas personalizados, que agregan nuevas mecánicas y posibilidades al juego.',
      precio: 1200,
      consolas: ['XboxOne', 'Switch', 'PC'],
      genero: ['Terror', 'Deportivo'],
      anioRelease: 2011,
      imagenes: ['assets/Minecraft.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 4,
      nombre: 'Fortnite',
      descripcion: 'Fortnite es un juego de disparos en tercera persona en el que hasta 100 jugadores compiten para ser la última persona o equipo en pie. Puedes competir solo o unirte a un equipo de hasta cuatro. Progresas en el juego explorando la isla, recolectando armas, construyendo fortificaciones y enfrentándote a otros jugadores. Puedes hacer compras para acceder al juego completo o para obtener armas adicionales. Los jugadores se comunican con otros jugadores a través de mensajes en línea o chat de voz.',
      precio: 1000,
      consolas: ['PC', 'XboxOne', 'Xbox', 'Switch'],
      genero: ['Acción', 'Terror', 'Aventura'],
      anioRelease: 2017,
      imagenes: ['assets/Fortnine.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 5,
      nombre: 'Call of Duty: Warzone',
      descripcion: 'Warzone permite el combate multijugador en línea entre 150 jugadores y presenta tanto el juego en contra multiplataforma como la progresión multiplataforma. El juego presenta dos modos de juego principales: Battle Royale y Plunder. Warzone presenta un nuevo sistema de moneda en el juego que se puede usar en "Estaciones de compra" dentro y alrededor del mapa. Las caídas de "equipamiento" son un ejemplo de cómo se puede intercambiar efectivo para acceder a las clases personalizadas de los jugadores. Los jugadores también pueden usar efectivo para comprar artículos como "killstreaks" y máscaras antigás. El dinero se puede encontrar saqueando edificios y matando a los jugadores que tienen dinero en efectivo.',
      precio: 4860,
      consolas: ['XboxOne', 'PC', 'PS4'],
      genero: ['Arcade', 'Estrategia', 'RPG'],
      anioRelease: 2020,
      imagenes: ['assets/Call of Duty Warzone.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 6,
      nombre: 'Grand Theft Auto V',
      descripcion: 'El juego se juega desde una perspectiva en tercera persona o en primera persona, y su mundo se navega a pie y en vehículo. Los jugadores controlan a los tres protagonistas principales a lo largo del modo para un jugador y cambian entre ellos, tanto durante como fuera de las misiones. La historia se centra en las secuencias de atracos, y muchas misiones implican disparos y juegos de conducción. Un sistema de "se busca" rige la agresión de la respuesta policial a los jugadores que cometen delitos. Grand Theft Auto Online, el modo multijugador en línea del juego, permite que hasta 30 jugadores participen en una variedad de diferentes modos de juego cooperativos y competitivos.',
      precio: 4000,
      consolas: ['PS4', 'PS3', 'PS5', 'PC', 'XboxOne'],
      genero: ['Simulación', 'Musical', 'Aventura'],
      anioRelease: 2013,
      imagenes: ['assets/GTA V.jpg'],
      requisitos: "Medio"
    },
    {
      id: 7,
      nombre: 'The Witcher 3: Wild Hunt',
      descripcion: 'El juego tiene lugar en un mundo de fantasía ficticio basado en la mitología Eslava. Los jugadores controlan a Geralt de Rivia, un asesino de monstruos a sueldo conocido como Witcher, y buscan a su hija adoptiva, que huye de la Cacería Salvaje de otro mundo. Los jugadores luchan contra los muchos peligros del juego con armas y magia, interactúan con personajes que no son jugadores y completan misiones para adquirir puntos de experiencia y oro, que se utilizan para aumentar las habilidades de Geralt y comprar equipo. La historia del juego tiene tres finales posibles, determinados por las elecciones del jugador en puntos clave de la narrativa.',
      precio: 4000,
      consolas: ['PC', 'Switch', 'XboxOne'],
      genero: ['Deportivo', 'Arcade', 'Terror'],
      anioRelease: 2015,
      imagenes: ['assets/The Witcher 3.jpg'],
      requisitos: "Alto"
    },
    {
      id: 8,
      nombre: 'Super Mario Odyssey',
      descripcion: 'Super Mario Odyssey es un juego de plataformas en el que los jugadores controlan a Mario mientras viaja por muchos mundos diferentes, conocidos como "Reinos" dentro del juego, en el barco con forma de sombrero "The Odyssey", para rescatar a la Princesa Peach de Bowser, quien planea casarse con ella a la fuerza. Los reinos del juego vuelven al diseño de niveles basado en la exploración que se presenta en Super Mario 64. Cada Reino tiene a Mario buscando y limpiando varios objetivos para obtener elementos conocidos como Power Moons, que son la fuente de energía de "The Odyssey" y otorgan acceso a nuevos Reinos. Las banderas de los puntos de control esparcidas por cada reino permiten que Mario se deforme instantáneamente hacia ellas una vez que se activan.',
      precio: 5800,
      consolas: ['Switch'],
      genero: ['Simulación', 'Estrategia', 'Acción'],
      anioRelease: 2017,
      imagenes: ['assets/Super Mario.jpg'],
      requisitos: "Alto"
    },
    {
      id: 9,
      nombre: "Assassin's Creed Valhalla",
      descripcion: 'Assassin'+'s Creed Valhalla es un videojuego de rol de acción estructurado en torno a varios arcos de la historia principal y numerosas misiones secundarias opcionales, llamadas "Eventos mundiales". El jugador asume el papel de Eivor Varinsdottir, un asaltante vikingo, mientras lidera a sus compañeros vikingos contra los reinos anglosajones. El jugador tiene la opción de jugar a Eivor como hombre o mujer (con la voz de Cecilie Stenspil y Magnus Bruun respectivamente), o dejar que el juego alterné entre los dos en momentos clave de la historia (con el avatar femenino que representa la vida de Eivor y el avatar masculino que representa la apariencia física del Isu Odin, debido a su conexión con Eivor).',
      precio: 2700,
      consolas: ['PC', 'XboxOne', 'Xbox', 'PS5'],
      genero: ['Aventura', 'Arcade', 'Musical'],
      anioRelease: 2020,
      imagenes: ["assets/Assasin'S.jpg"],
      requisitos: "Alto"
    },
    {
      id: 10,
      nombre: 'Halo Infinite',
      descripcion: 'Halo Infinite es un juego de disparos en primera persona similar a los juegos anteriores de Halo. Los jugadores usan armas y vehículos que se encuentran comúnmente en la serie Halo, como el Warthog. El juego agrega nuevas habilidades para el personaje del jugador Master Chief, como Grapple Shot, que lo atrae hacia los enemigos o recupera objetos. La estructura de mundo semiabierto del modo de campaña permite a los jugadores explorar libremente partes del entorno de Zeta Halo del mundo del anillo, que están segmentadas entre sí e inicialmente intransitables. Dispersas por el entorno se encuentran las Bases de operaciones avanzadas (FOB), que se pueden capturar una vez limpias de enemigos. Las bases capturadas sirven como puntos de viaje rápido.',
      precio: 3421,
      consolas: ['XboxOne', 'PC', 'Xbox'],
      genero: ['Terror', 'RPG', 'Simulación'],
      anioRelease: 2021,
      imagenes: ['assets/Halo.jpg'],
      requisitos: "Alto"
    },
    {
      id: 11,
      nombre: 'God of War (2018)',
      descripcion: 'Muchos años después de derrotar a los dioses olímpicos,  Kratos vive con su hijo Atreus en el reino de Midgard y, a menudo, es abrasivo y pasivo agresivo con él. Después de incinerar el cuerpo de Faye, Kratos se enfrenta a un extraño con poderes divinos. Los dos pelean y Kratos aparentemente mata al extraño, después de lo cual Kratos y Atreus comienzan su viaje para honrar el último deseo de Faye: esparcir sus cenizas en el pico más alto de los nueve reinos. God of War es un videojuego de acción y aventura en tercera persona. Cuenta con una cámara libre sobre el hombro, una desviación de las entregas anteriores, que presentaban una cámara cinematográfica fija. Cinematográficamente, el juego se presenta en un plano continuo, sin cortes de cámara ni pantallas de carga. Aunque la entrega principal anterior, Ascension (2013), introdujo el modo multijugador en la serie, esta entrega es solo para un jugador.',
      precio: 4900,
      consolas: ['PS4'],
      genero: ['Acción', 'Estrategia', 'Deportivo'],
      anioRelease: 2018,
      imagenes: ['assets/God of War.jpg'],
      requisitos: "Medio"
    },
    {
      id: 12,
      nombre: 'FIFA 22',
      descripcion: 'FIFA 22 es un videojuego de simulación de fútbol publicado por Electronic Arts. El juego cuenta con más de 30 ligas con licencia oficial, más de 700 clubes y más de 17 000 jugadores. Por primera vez, se agregaron la Superliga india y sus once equipos, así como la UEFA Europa Conference League, el tercer nivel del fútbol europeo de clubes establecido en 2021. Los nuevos estadios agregados en el juego incluyen el Estádio da Luz, hogar de S.L. Benfica, el Estádio do Dragão del FC Porto y el Nuevo Mirandilla del Cádiz CF. Además, en enero de 2022 mediante una actualización, se agregó al juego el Brentford Community Stadium, sede del Brentford, lo que garantiza que los 20 equipos de la Premier League tengan sus respectivos estadios.',
      precio: 2980,
      consolas: ['PC', 'XboxOne', 'Xbox', 'PS4', 'PS5', 'Switch'],
      genero: ['Musical', 'Terror', 'Aventura'],
      anioRelease: 2021,
      imagenes: ['assets/FIFA 22.jpg'],
      requisitos: "Alto"
    },
    {
      id: 13,
      nombre: 'Resident Evil Village',
      descripcion: 'Años después de derrotar a Eveline & the Bakers. La esposa y la hija de Ethan Winters son secuestradas y llevadas a un pueblo en lo profundo de las montañas nevadas de Europa. Allí debe luchar contra varios monstruos como vampiros, licántropos, lobos, brujas, hombres peces, muñecas, zombis y abominaciones industriales para salvar a su familia de la malvada Madre Miranda. Al igual que su predecesor, Resident Evil 7: Biohazard, Resident Evil Village usa una perspectiva en primera persona, pero también tiene la opción de una perspectiva en tercera persona. Está ambientado en un pueblo europeo explorable cubierto de nieve, en Rumania, descrito como "extraído directamente de la época victoriana" y mucho más grande y envolvente que su predecesor. Las estructuras y los edificios del pueblo central se pueden escalar y usar para luchar contra los enemigos. En comparación con Biohazard, el juego se centra más en la acción, con el protagonista Ethan Winters ahora equipado con más habilidades de combate debido al entrenamiento militar.',
      precio: 1000,
      consolas: ['PS4', 'XboxOne', 'Xbox', 'Switch'],
      genero: ['Arcade', 'Simulación', 'RPG'],
      anioRelease: 2021,
      imagenes: ['assets/Resident.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 14,
      nombre: 'Ghost of Tsushima',
      descripcion: 'Ghost of Tsushima es un juego de acción y aventuras de 2020 desarrollado por Sucker Punch Productions y publicado por Sony Interactive Entertainment. El jugador controla a Jin Sakai, un samurái en una misión para proteger la isla Tsushima durante la primera invasión mongola de Japón. Jin debe elegir entre seguir el código guerrero para luchar con honor o usar métodos prácticos pero deshonrosos para repeler a los mongoles con bajas mínimas. El juego presenta un gran mundo abierto que se puede explorar a pie o a caballo. Al enfrentarse a los enemigos, el jugador puede optar por participar en una confrontación directa usando la katana de Jin o convertirse en un guerrero legendario conocido como "el Fantasma" usando tácticas de sigilo para asesinar a los oponentes. Un modo multijugador titulado Ghost of Tsushima: Legends se lanzó en octubre de 2020 y estuvo disponible por separado en septiembre de 2021.',
      precio: 3800,
      consolas: ['PS4', 'PS5'],
      genero: ['Estrategia', 'Acción', 'Musical'],
      anioRelease: 2020,
      imagenes: ['assets/Tsushima.jpg'],
      requisitos: "Medio"
    },
    {
      id: 15,
      nombre: 'Ratchet & Clank: Rift Apart',
      descripcion: 'El juego comparte muchas similitudes de juego con Ratchet & Clank (2016) y otras entradas de la serie. Conserva elementos de los juegos anteriores de Ratchet & Clank, como ametralladoras, disparos, recolección de pernos, actualizaciones automáticas de armas y salud, actualización manual de armas Raritanium y dispositivos. El personaje jugable principal es Ratchet. Lo acompaña su amigo robótico y compañero Clank, que está colgado de su espalda. Además, el juego tiene una Lombax femenina jugable llamada Rivet, así como un robot similar a Clank, Kit. El jugador navega por Ratchet y Rivet a través de diversos entornos a través de una multitud de niveles, derrotando a los enemigos con una variedad de armas y dispositivos variados, y atravesando obstáculos para completar los objetivos clave de la misión.',
      precio: 2900,
      consolas: ['PS5', 'PC'],
      genero: ['Deportivo', 'Terror', 'Aventura'],
      anioRelease: 2021,
      imagenes: ['assets/Ratcher.jpg'],
      requisitos: "Medio"
    },
    {
      id: 16,
      nombre: 'Animal Crossing: New Horizons',
      descripcion: 'En New Horizons, el jugador controla a un personaje que se muda a una isla desierta después de comprar un paquete de escapada de Tom Nook, cumple las tareas asignadas y desarrolla la isla a su elección. Pueden recolectar y fabricar artículos, personalizar la isla y convertirla en una comunidad de animales antropomórficos. Al igual que en los juegos anteriores de Animal Crossing, New Horizons es un juego de simulación de vida que se juega en tiempo real. El clima también se ajusta a las estaciones del hemisferio norte o sur, según la ubicación del jugador en el mundo real, una novedad en la serie Animal Crossing.',
      precio: 5220,
      consolas: ['Switch'],
      genero: ['Terror', 'RPG', 'Estrategia'],
      anioRelease: 2020,
      imagenes: ['assets/Animals.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 17,
      nombre: "Marvel's Spider-Man: Miles Morales",
      descripcion: 'El juego se presenta desde la perspectiva de la tercera persona con un enfoque principal en las habilidades transversales y de combate de Miles. Miles puede moverse libremente por la ciudad de Nueva York, interactuar con personajes, emprender misiones y desbloquear nuevos dispositivos y trajes al avanzar en la historia principal o completar tareas. Fuera de la historia, el jugador puede completar misiones secundarias para desbloquear contenido adicional y artículos coleccionables. El combate se centra en encadenar ataques y usar el entorno, las redes y los ataques de Venom para incapacitar a numerosos enemigos y evitar daños. El juego central de Marvel'+'s Spider-Man: Miles Morales es el mismo de su predecesor. Presenta el mismo mundo abierto, una versión ficticia del Manhattan moderno, que está cubierto de nieve porque el juego se desarrolla durante las vacaciones. Miles controla de manera similar a Peter Parker, pero con nuevas animaciones y habilidades, que se desbloquean a medida que avanza la historia.',
      precio: 4000,
      consolas: ['PC', 'PS5', 'PS4'],
      genero: ['Acción', 'Simulación', 'Musical'],
      anioRelease: 2020,
      imagenes: ['assets/Spiderman.jpg'],
      requisitos: "Alto"
    },
    {
      id: 18,
      nombre: 'Horizon Zero Dawn',
      descripcion: 'La trama sigue a Aloy, una joven cazadora en un mundo invadido por máquinas, que se propone descubrir su pasado. El jugador usa armas a distancia, una lanza y sigilo para combatir criaturas mecánicas y otras fuerzas enemigas. Un árbol de habilidades proporciona al jugador nuevas habilidades y bonificaciones. El jugador puede explorar el mundo abierto para descubrir ubicaciones y realizar misiones secundarias. Horizon Zero Dawn es un juego de rol de acción que se juega desde una vista en tercera persona. Los jugadores toman el control de Aloy, una cazadora que se aventura a través de una tierra posapocalíptica gobernada por criaturas robóticas. Aloy puede matar a los enemigos de varias formas: disparándoles con flechas, colocando trampas como cables trampa usando el Tripcaster, usando explosivos, y una lanza.',
      precio: 5780,
      consolas: ['PS4', 'PC'],
      genero: ['Arcade', 'Estrategia', 'Terror'],
      anioRelease: 2017,
      imagenes: ['assets/Horizon.jpg'],
      requisitos: "Alto"
    },
    {
      id: 19,
      nombre: 'Borderlands 3',
      descripcion: 'Borderlands 3 es un shooter de botín en primera persona. Los jugadores, ya sea jugando solos o en grupos de hasta cuatro personas, crean un personaje de una de las cuatro clases disponibles y asumen varias misiones asignadas por personajes no jugables (NPC) y en tableros de recompensas para ganar experiencia, recompensas monetarias del juego y artículos de recompensa. Los jugadores también pueden obtener estos elementos al derrotar a los enemigos a lo largo del juego. A medida que el jugador sube de nivel, gana puntos de habilidad para asignar a través de un árbol de habilidades. Los jugadores completan misiones y misiones secundarias, en un solo jugador o multijugador. Cuando mueren, los enemigos pueden dejar caer armas y equipos que pueden equiparse. Se desbloquean nuevas habilidades a medida que el jugador gana experiencia. La trama se centra en cuatro nuevos Vault Hunters reclutados por Crimson Raiders of Pandora para evitar que los gemelos Troy y Tyreen Calypso y sus locos seguidores de culto aprovechen el poder de las Bóvedas alienígenas repartidas por toda la galaxia.',
      precio: 1670,
      consolas: ['PC', 'Xbox', 'PS4', 'PS5', 'XboxOne'],
      genero: ['RPG', 'Aventura', 'Deportivo'],
      anioRelease: 2019,
      imagenes: ['assets/Borderlands.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 20,
      nombre: 'Elden Ring',
      descripcion: 'Elden Ring se presenta a través de una perspectiva en tercera persona; los jugadores recorren libremente su mundo abierto interactivo. Las seis áreas principales se recorren utilizando el corcel Torrent del personaje del jugador como modo principal de viaje. Se pueden explorar mazmorras lineales y ocultas para encontrar elementos útiles. Los jugadores pueden usar varios tipos de armas y hechizos mágicos, incluido el compromiso no directo habilitado por la mecánica de sigilo. En todo el mundo del juego, los puntos de control permiten viajar rápido y permiten a los jugadores mejorar sus atributos usando una moneda del juego llamada Runas. Elden Ring tiene un modo multijugador en línea en el que los jugadores pueden unirse para el combate cooperativo y de jugador contra jugador.',
      precio: 6000,
      consolas: ['PS4', 'PC', 'PS5', 'XboxOne'],
      genero: ['Acción', 'Simulación', 'Musical'],
      anioRelease: 2022,
      imagenes: ['assets/Elden.jpg'],
      requisitos: "Alto"
    },
  ];

  contenedorJuegos: any[] = this.juegos;
  newCarrito: any = [];
  cantidadItems : BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  getJuegos(): any[] {
    return this.contenedorJuegos;
  }

  restaurarJuegos(){
    this.contenedorJuegos = this.juegos;
  }

  getCarrito(): any[] {
    return this.newCarrito;
  }

  proximoValor(valor : number) : void {
    this.cantidadItems.next(this.cantidadItems.getValue() + valor);
    this.cantidadItems.next(this.getCantidadJuegos());
  }

  getCantidadJuegos():number{
    let res = 0
    for (let i = 0; i < this.newCarrito.length; i++) {
      res += this.newCarrito[i].cantidad  
    }
    return res
  }

  restarValor(valor : number) : void {
    let numero = this.cantidadItems.getValue();
    if((numero-valor) < 0){
      numero = 0;
    } else {
      numero = numero - valor;
    }
    this.cantidadItems.next(numero);
  }

  filtrarJuegosPor(caracteristica: string, opt: string): any[] {
    this.contenedorJuegos = [];

    switch (caracteristica) {

      case "genero":
        for (let i = 0; i < this.juegos.length; i++) {
          for (let j = 0; j < this.juegos[i].genero.length; j++) {
            if (this.juegos[i].genero[j] == opt) {
              this.contenedorJuegos.push(this.juegos[i]);
            }
          }
        }
        break;

      case "consola":
        for (let i = 0; i < this.juegos.length; i++) {
          for (let j = 0; j < this.juegos[i].consolas.length; j++) {
            if (this.juegos[i].consolas[j] == opt) {
              this.contenedorJuegos.push(this.juegos[i]);
            }
          }
        }
        break;

      case "precio":
        let inicio = this.rangoInicio(opt);
        let fin = this.rangoFin(opt);

        for (let i = 0; i < this.juegos.length; i++) {
          let precio = Number(this.juegos[i].precio);
          if (precio >= inicio && precio <= fin) {
            this.contenedorJuegos.push(this.juegos[i]);
          }
        }
        break;

      case "anio":
        for (let i = 0; i < this.juegos.length; i++) {
          if (this.juegos[i].anioRelease == opt) {
            this.contenedorJuegos.push(this.juegos[i]);
          }
        }
        break;

      case "requisito":
        for (let i = 0; i < this.juegos.length; i++) {
          if (this.juegos[i].requisitos?.toLocaleLowerCase() == opt) {
            this.contenedorJuegos.push(this.juegos[i]);
          }
        }
        break;

      case "busqueda":
        for (let i = 0; i < this.juegos.length; i++) {
          if (this.juegos[i].nombre?.toLowerCase().includes(opt.toLowerCase())) {
            this.contenedorJuegos.push(this.juegos[i]);
          }
        }
        break;

      default:
        alert("NO DEBERIA ENTRAR AQUI");
        break;
    }
    return this.contenedorJuegos;
  }

  private rangoInicio(p: string): number {
    let n = 0;
    let precios = ["1000 - 2000", "2000 - 3000", "3000 - 4000", "4000 - 5000", "5000 - 6000"];

    for (let i = 0; i < precios.length; i++) {
      if (precios[i] == p) {
        // el formato que lo tengo en el array:
        // [1000 - 2000]  EL 10 ME QUEDo FEO, PERO LO MOVI PARA QUE SEA MAS CLARO
        // [0123456789 10]
        let text = precios[i].substring(0, 5); // el segundo numero no es incluido (5)
        n = Number(text);
      }
    }
    return n;
  }

  private rangoFin(p: string): number {
    let n = 0;
    let precios = ["1000 - 2000", "2000 - 3000", "3000 - 4000", "4000 - 5000", "5000 - 6000"];

    for (let i = 0; i < precios.length; i++) {
      if (precios[i] == p) {
        // el formato que lo tengo en el array: [1000 - 2000]
        // [1000 - 2000]  EL 10 ME QUEDO FEO, PERO LO MOVI PARA QUE SEA MAS CLARO
        // [0123456789 10]
        let text = precios[i].substring(6, 11);  // el segundo numero no es incluido (11)
        n = Number(text);
      }
    }
    return n;
  }

  agregarJuegoCarrito(j: any): void {
    let yaEsta = false;
    if (this.newCarrito.length == 0) {
      this.newCarrito.push({
        nombre: j.nombre,
        precio: j.precio,
        cantidad: 1
      });
    } else {
      for (let i = 0; i < this.newCarrito.length && !yaEsta; i++) {
        if (this.newCarrito[i].nombre === j.nombre) {
          this.newCarrito[i].cantidad += 1;
          this.newCarrito[i].precio += j.precio;
          yaEsta = true;
        }
      }
      if (!yaEsta) {
        this.newCarrito.push({
          nombre: j.nombre,
          precio: j.precio,
          cantidad: 1
        });
      }
    }
  }

  sacarJuegoCarrito(index: number, item: any): void {
    console.log(item);
    
    if (item.cantidad > 1) {
      let resta =  item.precio / item.cantidad
      this.newCarrito[index].cantidad--;
      this.newCarrito[index].precio = this.newCarrito[index].precio - resta;
    }else{
      this.newCarrito.splice(index, 1);
    }
    this.restarValor(1);
  }

  vaciarCarrito(){
    this.newCarrito = [];
    this.restarValor(this.cantidadItems.getValue());
  }

}
