## Buscador de personajes RICK & MORTY :earth_americas:

Esta aplicación web es una web de búsqueda de personajes de la serie Rick & Morty, con la que el usuario puede buscar un personaje por su nombre y también filtrar los resultados por género. Al seleccionar el personaje, aparecerá una tarjeta con más información acerca del mismo.

Este proyecto ha sido llevado a cabo utilizando **React**, en el que he tratado de trabajar con una estructura organizada con node y npm. Npm instalará las dependencias en la carpeta node_modules, de donde podremos importar módulos de JS como react, react-dom y react-router a nuestro código.

### Componentes

El código se agrupa dentro de la carpeta src, excepto el único archivo HTML que usaremos, que estará en public/index.html. Los componentes de React irán en la carpeta src/components, cada uno en su fichero.

- **App.js** es desde el que se llama al resto de componentes de la aplicación.

- **Character.js** es el que se encarga de pintar la imagen, el nombre, la especie y el género de cada personaje con la información que recibimos de la llamada a la API.

- **CharacterDetail.js** es el que recoge una información más detallada sobre cada personaje y aparece en pantalla cuando hacemos click sobre uno de ellos.

- **CharacterList.js** es el que recoge la lista de los personajes importando la información del componente Character.js.

- **Filters.js** es el encargado del formulario formado por los 2 filtros: **FilterByName.js** y **FilterByGender.js**. Este componente envía a los filtros toda la información y funcionalidades necesarias para que realicen su trabajo.
