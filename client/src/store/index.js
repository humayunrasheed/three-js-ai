import { proxy } from "valtio";
const state = proxy({
    intro : true,
    color: '#AED233',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal:'./three.js.png',
    fullDecal:'./three.js.png',

});
export default state