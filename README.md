# Next.js con Material Design UI

Para empezar con Next.js y Material Design La manera mas sencilla es descargar el ejemplo del github de material-ui.

https://github.com/mui-org/material-ui/tree/master/examples/nextjs


una vez descargado se intalan las dependencias.\
`yarn` o `npm install`

Para probarlo.\
`yarn dev` o `npm run dev`


Sitio de material-ui.\
https://material-ui.com/

Aquí se pueden encontrar algunos ejemplos de páginas.\
https://material-ui.com/getting-started/page-layout-examples/

Hay ejemplos que utilizan la librería  @material-ui/icons, para instalarla.\
`yarn add @material-ui/icons` o `npm install @material-ui/icons`


Sitio de next.js.\
https://nextjs.org/learn/basics/getting-started

Ejemplos de next.js.\
https://github.com/zeit/next.js/tree/master/examples


El archivo _document.js esta explicado en:\
https://nextjs.org/docs/#custom-document

El archivo _app.js esta explicado en:\
https://nextjs.org/docs/#custom-app


Para la estructura del Layout se siguió el ejemplo de:\
https://github.com/zeit/next.js/tree/master/examples/layout-component



Para las urls dinámicas se utiliza la librería next-routes 

`yarn add next-routes`

https://www.npmjs.com/package/next-routes

Esto nos permite crear url amigables para el usuario y los buscadores, en vez de tener 
`/content/?id=2` se tiene `/contenido/2`

para esto es necesario definir el archivo `routes.js` y el `server.js`
también en el package.json hay que actualizar los scripts de la siguiente manera

``` 
"scripts": { 
"dev": "node server.js", 
"start": "NODE_ENV=production node server.js",
"build": "next build"
} 
```

así se levantará el servidor que es el que estará escuchando las peticiones.

Ahora para usar las rutas en el código, se importa el Link del archivo `router.js`

`import {Link} from '../routes'`

y puedes crear el Link con un nombre de ruta
y pasarle los parámetros
``` 
<Link route='content' params={{ id: 2 }} >
<Button variant="outlined" color="primary">
Content page
</Button>
</Link>
``` 

Por qué es necesario todo esto y no simplemente utilizar la propiedad `as` que brinda `next/link`. Es que esta propiedad solo funciona en la parte del cliente, cuando el usuario entre a un link desde la misma aplicación si funcionará. Pero si el usuario quiere ir directo por ejemplo a '/contenido/2' y lo pone en el navegador si no esta configurado el server le dará error 404. 


