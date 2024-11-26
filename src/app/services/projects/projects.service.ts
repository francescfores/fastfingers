import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root', // Hace que el servicio sea accesible en toda la aplicación
})
export class ProjectsService {
  // Define la array como propiedad del servicio
  projectsData = [
     {
      id: 0,
        title: 'CodeBlog',
      category: 'Web Application',
      img: '/assets/../assets/images/projects/blog_web.png',
      ProjectHeader: {
        title: 'Project Management UI - From Context',
        publishDate: 'Jul 26, 2021',
        tags: 'UI / Frontend',
      },
    },
    {
      id: 2,
      title: 'easy2bwise',
      category: 'Web Application',
      img: '/assets/../assets/images/projects/easy2bwise_mokup3-Photoroom.png',
      ProjectHeader: {
        title: 'Project Management UI - From Context',
        publishDate: 'Jul 26, 2021',
        tags: 'UI / Frontend',
      },
    },
    {
      id: 1,
      title: 'Les dunes restaurant',
      category: 'UI/UX Design',
      img: '/assets/../assets/images/projects/dunes_mockup5-Photoroom.png',
      ProjectHeader: {
        title: 'Project Management UI - From Context',
        publishDate: 'Jul 26, 2021',
        tags: 'UI / Frontend',
      },
    },
    {
      id: 3,
      title: 'Datandtec web app & API',
      category: 'Web Application',
      img: '/assets/../assets/images/projects/datantec_mokup4-Photoroom.png',
      ProjectHeader: {
        title: 'Project Management UI - From Context',
        publishDate: 'Jul 26, 2021',
        tags: 'UI / Frontend',
      },
    },
    {
      id: 4,
      title: 'Datandtec Mobile Application',
      category: 'Mobile Application',
      img: '/assets/../assets/images/projects/datandtec_app_2.png',
    },
    {
      id: 6,
      title: 'Captio web app',
      category: 'Web Application',
      img: '/assets/../assets/images/projects/captio_web_2.png',
      ProjectHeader: {
        title: 'Project Management UI - From Context',
        publishDate: 'Jul 26, 2021',
        tags: 'UI / Frontend',
      },
    },
    {
      id: 7,
      title: 'Captio mobile app',
      category: 'Mobile Application',
      img: '/assets/../assets/images/projects/captio_app_4.png',
      ProjectHeader: {
        title: 'Project Management UI - From Context',
        publishDate: 'Jul 26, 2021',
        tags: 'UI / Frontend',
      },
    },
  ];
// Import images
images = [
    '../../assets/images/projects/dunes_2.png',
    '../../assets/images/projects/dunes3.png',
    '../../assets/images/projects/easy2bwise2.png',
    '../../assets/images/projects/easy2bwise3.png',
    '../../assets/images/projects/datantec1.png',
    '../../assets/images/projects/datandtec2.png',
    '../../assets/images/projects/datandtec_app1.png',
    '../../assets/images/projects/datandtec_app6.png',
    '../../assets/images/projects/captioweb.png',
    '../../assets/images/projects/captioweb3.png',
    '../../assets/images/projects/captioapp12.png',
    '../../assets/images/projects/captioapp10.png',
    '../../assets/images/projects/captioapp12.png',
    '../../assets/images/projects/blog_img.png',
    '../../assets/images/projects/blog_app_video.mp4',
  ];

singleProjectData = [
      {
      id: 0,
      ProjectHeader: {
        title: 'CodeBlog',
        publishDate: 'Nov, 2024',
        tags: 'Web Application',
      },
      ProjectImages: [
        {
          id: 1,
          title: '',
          img: this.images[13],
        },
        {
          id: 2,
          title: '',
          video: this.images[14],
        },
      ],
      ProjectInfo: {
        ClientHeading: 'Acerca del proyecto',
        CompanyInfo: [
          {
            id: 1,
            title: 'Autor',
            details: 'Francesc Fores',
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://blog-front-new.vercel.app/',
          }

        ],
        ObjectivesHeading: 'Objetivo',
        ObjectivesDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        Technologies: [
          {
            title: 'Herramientas y Tecnologías',
            techs: [
              '../../assets/logos/Angular.svg',
              '../../assets/logos/TypeScript.svg',
              '../../assets/logos/Laravel.svg',
              '../../assets/logos/PHP.svg',
              '../../assets/logos/HTML5.svg',
              '../../assets/logos/CSS3.svg',
              '../../assets/logos/Tailwind CSS.svg',
              '../../assets/logos/JavaScript.svg',
              '../../assets/logos/MySQL.svg',
              '../../assets/logos/aws-svgrepo-com.svg',
              '../../assets/logos/Docker.svg',
            ],
          },
        ],
        ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
        ProjectDetails: [
          {
            id: 1,
            title:'Introducción',
            details:
                'Desde el principio, busqué crear un blog modular y dinámico, lejos de los diseños tradicionales, '+
                'permitiendo a los usuarios crear contenido dinámico y reutilizable.'+
                ''
          },
          //{
          //  id: 2,
          //   title:'Contexto',
          //  details:'Mi objetivo con este proyecto fue superar estas limitaciones, ofreciendo una plataforma donde los usuarios puedan construir sus publicaciones a partir de bloques reutilizables y dinámicos.'
          //},
          {
            id: 3,
             title:'Funcionalidad',
            details:'Desarrollado con Angular para gestionar la arquitectura modular y reutilización de componentes, Tailwind CSS para una estilización rápida y flexible, y Laravel en el backend, proporcionando una API robusta.'

          },
          {
            id: 3,
             title:'Tecnologías',
            details: 'La plataforma permite a los usuarios seleccionar y personalizar componentes básicos predefinidos, como tarjetas, imágenes y texto. Estos componentes se pueden reorganizar y combinar para crear diseños únicos. Los usuarios también pueden crear subcomponentes personalizados, lo que permite una mayor flexibilidad y creatividad en la creación de contenido dinámico y atractivo.'

          },
          {
            id: 3,
             title:'Conclusión',
            details: 'El proyecto sigue en desarrollo y tengo planes para seguir mejorándolo. En el futuro, planeo agregar más componentes, creando una herramienta aún más poderosa para crear blogs dinámicos y únicos.'
          },
        ],
      },
    },
    {
      id: 1,
      ProjectHeader: {
        title: 'Dunes Restaurant',
        publishDate: 'Jul, 2021',
        tags: 'Web Application',
      },
      ProjectImages: [
        {
          id: 1,
          title: '',
          img: this.images[0],
        },
        {
          id: 2,
          title: '',
          img: this.images[1],
        },

      ],
      ProjectInfo: {
        ClientHeading: 'Acerca del cliente',
        CompanyInfo: [
          {
            id: 1,
            title: 'Empresa',
            details: 'Les Dunes Restaurant',
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://lesdunesrestaurant.com/',
          }

        ],
        ObjectivesHeading: 'Objetivo',
        ObjectivesDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        Technologies: [
          {
            title: 'Herramientas y Tecnologías',
            techs: [
              '../../assets/logos/wordpress-logo-svgrepo-com.svg',
              '../../assets/logos/PHP.svg',
              '../../assets/logos/MySQL.svg',
              '../../assets/logos/HTML5.svg',
              '../../assets/logos/CSS3.svg',
              '../../assets/logos/JavaScript.svg',
              '../../assets/logos/jQuery.svg',
            ],
          },
        ],
        ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
        ProjectDetails: [
          {
            id: 1,
            details:
                'Página web con gestión de reservas creada con WordPress.' +
              ' Lo primero fue pensar en el diseño  los apartados de la pagina web y en el sistema de reserva. ' +
              ' El objetivo principal era facilitar el proceso de las reservas tanto al cliente como al empresario ' +
              'utilizando un calendario con las fechas disponibles, las mesas, horarios etc.'
          },
          {
            id: 2,
            details:
              ' Ayudando a atraer más publico con un diseño responsive,  atractivo y limpio, una web básica y funcional.\n'
          }
        ],
      },
    },
    {
      id: 2,
      ProjectHeader: {
        title: 'Easy2bwise',
        publishDate: 'Sep, 2019',
        tags: 'Web Application',
      },
      ProjectImages: [
        {
          id: 1,
          title: 'Kabul Project Management UI',
          img: this.images[2],
        },
        {
          id: 2,
          title: 'Kabul Project Management UI',
          img: this.images[3],
        }
      ],
      ProjectInfo: {
        ClientHeading: 'Acerca del cliente',
        CompanyInfo: [
          {
            id: 1,
            title: 'Empresa',
            details: 'Easy2bwise',
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://easy2bwise.com/',
          }

        ],
        Technologies: [
          {
            title: 'Herramientas y Tecnologías',
          techs: [
              '../../assets/logos/Laravel.svg',
              '../../assets/logos/PHP.svg',
              '../../assets/logos/MySQL.svg',
              '../../assets/logos/HTML5.svg',
              '../../assets/logos/CSS3.svg',
              '../../assets/logos/Bootstrap.svg',
              '../../assets/logos/JavaScript.svg',
              '../../assets/logos/jQuery.svg',
            ],
          },
        ],
        ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
        ProjectDetails: [
          {
            id: 1,
            details:
              'Aplicacion Web construida con el framework de Laravel,  ' +
              'este fue de mis primeros proyectos como freelance echos con Laravel, ' +
              'en general es una herramienta interna para gestionar los cursos impartidos por la empresa. ' +
              'Lo primero que pensamos con el cliente fue las fases que tendria el proyecto, luego el backend,' +
              ' la base de datos y los roles de cada usuario' +
              '' +
              '' +
              ''
          },
          {
            id: 2,
            details:
              'Basado en los principales de SOLID, utilizando el patron repositorio, inyeccion de dependencias, autentificacion de usuarios, entre otras funcionalidades. '+
              'Para facilitar el desarollo cree las migraciones y los seeders con los datos d\'ejemplo basicos para el funcionamiento.' +
              ' Los principales apartados de l\'aplicacion son: usuarios, categorias, departamentos, cursos,herramientas, temas, version de tema, etc, '
          },
          {
            id: 3,
            details:
              'Donde cada rol visualizaria unos apartados concretos, el rol admin tendria todos los permisos para administrar toda la app, ' +
              'el rol gestor podria dirigir unos ciertos apartados definidos, como los cursos o los temas y ' +
              'el alumno podria visualizar y editar algunas cosas como los cursos a los que esta apuntado'
          },
          {
            id: 4,
            details:
              'El frontend esta echo con el framework de bootstrap ' +
              'y el motor PHP de plantillas integrado de Laravel, Blade.' +
              ''
          }
        ],
      },
    },
    {
      id: 3,
      ProjectHeader: {
        title: 'Datandtec',
        publishDate: '2020 - 2022',
        tags: 'Web Application',
      },
      ProjectImages: [
        {
          id: 1,
          title: 'Kabul Project Management UI',
          img: this.images[4],
        },
        {
          id: 2,
          title: 'Kabul Project Management UI',
          img: this.images[5],
        }
      ],
      ProjectInfo: {
        ClientHeading: 'Acerca del cliente',
        CompanyInfo: [
          {
            id: 1,
            title: 'Empresa',
            details: 'Datandtec',
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://datandtec.com/',
          }

        ],
        Technologies: [
          {
            title: 'Herramientas y Tecnologías',
            techs: [
              '../../assets/logos/Laravel.svg',
              '../../assets/logos/PHP.svg',
              '../../assets/logos/MySQL.svg',
              '../../assets/logos/Python.svg',
              '../../assets/logos/aws-svgrepo-com.svg',
              '../../assets/logos/Angular.svg',
              '../../assets/logos/TypeScript.svg',
              '../../assets/logos/HTML5.svg',
              '../../assets/logos/CSS3.svg',
              '../../assets/logos/Bootstrap.svg',
              '../../assets/logos/JavaScript.svg',
              '../../assets/logos/jQuery.svg',
            ],
          },

        ],
        ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
        ProjectDetails: [
          {
            id: 1,
            details:
              'Desarrollo de un proyecto para fidelizar los clientes de los comercios locales afiliados a una federaciones o grupos de cada localidad. Los clientes escanean los tickets al hacer una compra en algún negocio, a través del OCR o manualmente, seguidamente el negocio valida el ticket y se añade la transacción al sistema, finalmente el cliente obtiene unos puntos dependiendo del total del ticket, que podrá utilizar para conseguir obsequios en todos los negocios, definidos por ellos mismos.'

          },
          {
            id: 2,
            details:
              'El proyecto está formado por una Web app como frontend utilizando el framework de Angular 8, ' +
              'el backend con una API Laravel para consumir la Base de datos, ' +
              'la parte del escaneo de tickets desarrollada con Python contiene un OCR principal con Tesseract y uno secundario Amazon Textract por si falla el principal,' +
              'y finalmente l\'aplicación móvil explicada como otro proyecto en otro apartado.'

          },
          {
            id: 3,
            details:
              'Resumiendo la plataforma tiene unos roles definidos, super admin, admin, empresario y cliente.'
          },
          {
            id: 4,
            details:
              'El rol super admin puede gestionar toda la plataforma, puede visualizar y extraer analiticas apartir de graficas, añadir federaciones, crear las categorias y subcategorias de los negocios, mapas de densidad '
          },
          {
            id: 5,
            details:
              'El admin gestiona la federacion/grupo, analiticas pudiendo filtrar entre una fecha inicia y fecha final, con gráficas como el consumo por categorías de negocio entre muchas otras más, gestionar los negocios, los premios, mapas de densidad donde se podría visualizar, los negocios, el consumo , etc. '

          },
          {
            id: 6,
            details:
              'El empresario es el encargado de validar los tickets escaneados,visualizar las transacciones, gestionar premios/usuarios, visualizar los clientes y las valoraciones de su negocio.'

          },
        ],
  
      },

    },
    {
      id: 4,
      ProjectHeader: {
        title: 'Datandtec',
        publishDate: '2020 - 2022',
        tags: 'Mobile Application',
      },
      ProjectImages: [
        {
          id: 1,
          title: 'Kabul Project Management UI',
          img: this.images[6],
        },
        {
          id: 2,
          title: 'Kabul Project Management UI',
          img: this.images[7],
        }
      ],
      ProjectInfo: {
        ClientHeading: 'Acerca del cliente',
        CompanyInfo: [
          {
            id: 1,
            title: 'Empresa',
            details: 'Datandtec',
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://datandtec.com/',
          }

        ],
        Technologies: [
          {
            title: 'Herramientas y Tecnologías',
            techs: [
              '../../assets/logos/Ionic.svg',
              '../../assets/logos/TypeScript.svg',
              '../../assets/logos/HTML5.svg',
              '../../assets/logos/CSS3.svg',
              '../../assets/logos/JavaScript.svg',
              '../../assets/logos/Laravel.svg',
              '../../assets/logos/PHP.svg',
              '../../assets/logos/MySQL.svg',
            ],
          },

        ],
        ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
        ProjectDetails: [
          {
            id: 1,
            details:
                'La apliacion mobil de Datantec sirve como ventana comercial para los negocios, ' +
                'ayudando aumentar la satisfacción y captar nuevos clientes.' +
                'Los principales apartados a destacar de la app son: negocios, escanear, premios y transacciones'+
                'Los usuarios al hacer una compra en un negocio pueden escanear un ticket atraves del OCR o manualmente ' +
                'y ver el resultado directamente o en el apartado de transaciones. ' +
                'Los clientes obtienen puntos al escanear el ticket, los cuales pueden ver en' +
                'su perfil y utilizar para canjear los por premios establecidos por los negocios en el apartado de premios'
          },
          {
            id: 5,
            details:
              'Empece con este proyecto desde 0 trabajando con un equipo de 2 programadores en presencial y en remoto. ' +
              'De mis primeros proyectos con Angular 8, aun que con Ionic ' +
              'ya havia trabajado anteriormente.' +
              'El frontend de la app esta echo con Ionic 5 Angular 8, ' +
              'consumiendo una API echa con Symfony actualizada a Laravel. '+
              'Resumen de tareas: ' +
              'Creación y maquetacion total del disenyo. '+
              'Integracion de los modelos de la API. '+
              'Correcion de errores. '+
              'Definir las rutas de toda la app entre muchas otras.'
          },
        ],
      },
    },
    {
      id: 6,
      ProjectHeader: {
        title: 'Captio',
        publishDate: '2017 - 2018',
        tags: 'Web Application',
      },
      ProjectImages: [
        {
          id: 1,
          title: 'Kabul Project Management UI',
          img: this.images[8],
        },
        {
          id: 2,
          title: 'Kabul Project Management UI',
          img: this.images[9],
        }
      ],
      ProjectInfo: {
        ClientHeading: 'Acerca del cliente',
        CompanyInfo: [
          {
            id: 1,
            title: 'Empresa',
            details: 'Captio',
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://www.captio.net/',
          }

        ],
        Technologies: [
          {
            title: 'Herramientas y Tecnologías',
            techs: [
              '../../assets/logos/C_sharp.svg',
              '../../assets/logos/PostgresSQL.svg',
              '../../assets/logos/HTML5.svg',
              '../../assets/logos/CSS3.svg',
              '../../assets/logos/JavaScript.svg',
              '../../assets/logos/jQuery.svg',
            ],
          },

        ],
        ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
        ProjectDetails: [
          {
            id: 1,
            details:
              'La plataforma web de Captio es una herramienta en línea que se utiliza para controlar y automatizar ' +
              'los gastos de una empresa. Con ella los administradores pueden tener una visión completa de todos los ' +
              'gastos de la empresa, pueden aprobar o rechazar las entradas de gastos registradas por los empleados y ' +
              'también pueden configurar reglas de gastos y límites de presupuesto para cada uno de los departamentos o empleados.'
          },
          {
            id: 2,
            details:
              'Trabando con un equipo de 10 o más desarrolladores, escribiendo código tanto' +
              ' en backend como en frontend como programador junior,' +
              'Especialmente en .Net, C#, Javascript, HTML, CSS.'+
              'Mis principales tareas en la apliación web eran desarollo de funcionalidades y coreccion de bugs.'

          },
        ],
      },
    },
    {
      id: 7,
      ProjectHeader: {
        title: 'Captio',
        publishDate: '2017 - 2018',
        tags: 'Mobile Application',
      },
      ProjectImages: [
        {
          id: 1,
          title: 'Kabul Project Management UI',
          img: this.images[10],
        },
        {
          id: 2,
          title: 'Kabul Project Management UI',
          img: this.images[11],
        }
      ],
      ProjectInfo: {
        ClientHeading: 'Acerca del cliente',
        CompanyInfo: [
          {
            id: 1,
            title: 'Empresa',
            details: 'Captio',
          },
          {
            id: 3,
            title: 'App',
            details: 'https://play.google.com/store/apps/details?id=captio.ongest.com&hl=es&gl=US',
          }

        ],
        Technologies: [
          {
            title: 'Herramientas y Tecnologías',
            techs: [
              '../../assets/logos/C_sharp.svg',
              '../../assets/logos/PostgresSQL.svg',
              '../../assets/logos/Xamarin.svg',
              '../../assets/logos/Swift.svg',
              '../../assets/logos/Android.svg',
            ],
          },

        ],
        ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
        ProjectDetails: [
          {
            id: 1,
            details:
              'Captio aplicación móvil, permite a los usuarios capturar' +
              ' gastos de negocios de forma fácil y rápida. Los usuarios pueden tomar ' +
              'fotos de recibos y registrar detalles como el monto del gasto, ' +
              'la fecha y la categoría. La aplicación también permite a los usuarios asociar ' +
              'gastos con proyectos específicos y generar informes de gastos para su uso interno o ' +
              'para compartir con clientes'
          },
          {
            id: 2,
            details:
              'Trabando como programador junior,en un equipo de 5 desarrolladores, utilizando el gestor de tareas Wrike y metodologias agiles como Scrum.' +
              'El proyecto Mobile esta compuesto por una API y l\'aplicacion multiplatafroma.'

          },
          {
            id: 2,
            details:
              'Utilizando C#,Xamarin Classic,Xamarin Forms, Android, IOS.\n' +
              'Desarrollando en la parte frontend y backend, mis funciones entre otras eran ' +
              'crear nuevas funcionalidades, maquetacion de los diseños para l\'apliacion, ' +
              ', correcion de bugs y hacer pruebas con el ocr.'+
              '\n'
          }

        ],
     
      },
    },
];

  // Agrega métodos si necesitas manipular la data
  constructor() {}
}
