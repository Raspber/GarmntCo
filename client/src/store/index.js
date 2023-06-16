import { proxy } from 'valtio';
import pc54ShirtColors from './pc54ShirtColors'


const logoDecals = [
  './Ecode.png',
  './Fonolib.png',
  './Gear.png',
  './Huckleberry.png',
  './Jerries.png',
  './Olive.png',
  './Pathway.png',
  './Ray.png',
  './Tiptoe.png'
]



const products = [
  { 
    id:'1',
    modelUrl: '/shirt_baked.glb',
    geometryKey: 'T_Shirt_male',//example
    img: '/male_shirt.png'
  },
  { 
    id: '2',
    modelUrl: '/pants_baked.glb',
    geometryKey: 'Pants_male',//example
    img: '/female_shirt.png'
  },

]

const state = proxy({
  intro: true,
  color: '#242424',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: logoDecals[Math.floor(Math.random() * logoDecals.length)],
  customizer: false,
  workorder: false,
  products,
  pc54ShirtColors,
  shirtColorTitle: 'Black'
});

export default state;