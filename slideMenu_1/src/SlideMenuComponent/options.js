import { faHouse, faUniversalAccess, faLemon, faShieldHeart, faFlask } from '@fortawesome/free-solid-svg-icons'

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
  },
  {
    label: 'Component_2',
    to: '/component_2',
    icon: faShieldHeart,
    key: 3,
  },
  {
    label: 'Component_3',
    to: '/component_3',
    icon: faFlask,
    key: 4,
  }
]

export const colors = {
  background: 'black',
  text: 'white',
} 

export default options