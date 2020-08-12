import { greetJohn } from './modules/user.js';

let var1 = 'Bondan';

document.getElementById('demo1').innerHTML = greetJohn();

document.getElementById('demo2').innerHTML = 'Hello ' + var1;
