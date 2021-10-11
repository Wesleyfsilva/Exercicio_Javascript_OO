import { ContaCorrente } from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";


const cliente1 = new Cliente("Wesley Ferreira", 46728701893);
const cliente2 = new Cliente("Ana Beatriz Ferreira Da Silva",46828701893);


const contaCorrenteWesley = new ContaCorrente(cliente1,1001);
contaCorrenteWesley.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);


let valor = 200;

contaCorrenteWesley.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
