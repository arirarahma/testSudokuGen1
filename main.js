import { hello1, hello2} from 'square.js';
import defaultFunction from 'square.js';

let output1 = hello1();

let output2 = hello2();

let output3 = 'Output3';

let outputDefault = defaultFunction();

document.getElementById('default').innerHTML = 'Test test test html default' ;
document.getElementById('demo').innerHTML = output3;
