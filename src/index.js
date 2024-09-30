import { saludar } from "./js/componentes";
import './styles.css';

// Se crea el elemento del DOM para el mensaje de bienvenida
let nombre = prompt('escriba su nombre:');
saludar(nombre);