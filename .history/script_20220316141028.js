/*** Fetching data -> refactor into module later ***/
import { getstarterData } from "./modules/getData.js";

getstarterData();

const p = document.querySelector('main > p');

p.textContent = p.slice(5);