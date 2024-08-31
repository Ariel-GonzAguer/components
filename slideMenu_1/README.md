# Basic Slide Menu React component
Hello\
This component provides a slideable menu that can be easily integrated into your application. It is accessible and easy to use for developers, and allows easy customization through a prop.\
It's somewhat opinionated but easy to use.
## Installation
This component needs React Router and FontAwesome to work correctly, so before using it your project must have at least the following dependencies:
```code
{
 "@fortawesome/fontawesome-svg-core": "^6.5.2",
 "@fortawesome/free-solid-svg-icons": "^6.5.2",
 "@fortawesome/react-fontawesome": "^0.2.2",
 "react": "^18.2.0",
 "react-dom": "^18.2.0",
 "react-router-dom": "^6.22.3"
 },
```

If you don't have them yet, you can copy the content of the above object and paste them into your package.json, and then in the console execute:
```code
npm i
```

Then you can clone the repository to your project:

```bash
git clone https://github.com/tuusuario/....git
```

For a more direct understanding, the repository contains an example of using the component.\
To add it to your project extract the SlideMenuComponent folder and add it to your components folder.
## Usage
Import the component and use it in your application (possibly in App.jsx or some root component):
```code
import SlideMenuComponent from './route-to-component/BurgerMenuComponent';

/* The following array is recommended to be created in a separate file called option.js.
In this file you need to import the icons that will be used in the menu. 
If you gonna make the object inside App.jsx, you need to import the icon there. Visit [FontAwesome](https://fontawesome.com) */
const options = [
  { key: 'home', label: 'Home', to: '/', icon: 'faHome' },
  { key: 'about', label: 'About', to: '/about', icon: 'faInfo' },
  // more options
];

//This can be inside the option.js
const colors = {
  background: '#ffffff',
  text: '#000000'
};

function App() {
  return (
    <BurgerMenuComponent options={options} colors={colors} />
  );
}
```



## Props
With the prop **options**, the component receives all the information it needs, making it essential for its operation.\
Props has a format like the following:
```code
import { faHouse, faUniversalAccess, faLemon} from '@fortawesome/free-solid-svg-icons'

const options = [
 {
 label: 'homePage',
 to: '/',
 icon: faHouse,
 key: 0,
 },
 {
 label: 'Component_0',
 to: '/component_0',
 icon: faUniversalAccess,
 key: 1,
 },
 {
 label: 'Component_1',
 to: '/component_1',
 icon: faLemon,
 key: 2,
 }

export const colors = {
 background: 'black',
 text: 'white',
}

export default options
```
Each menu option is an object composed of:
- key: (string or number) A unique key for the menu option.
- label: (string) The text to display for the menu option.
- to: (string) The path to be directed to when the option is clicked.
- icon: (string) The name of the FontAwesome icon to use for the option.

The colors will be used as follows:
- background: will be the background color of the slide menu.
- text: will be the color of the menu text.

Easy to use ✨
## Contributing

Contributions are welcome!\
If you would like to contribute, please fork the repository and submit a pull request with your changes.
