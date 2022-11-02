import Time from "./Time.js";
import Partida from "./Partida.js";


const avai =  new Time('Avaí', 'AVA', 0, 0, 0, 0, 0)
const figueira =  new Time('Figueirense', 'FIG', 0, 0, 0, 0, 0)

const partida_1 = new Partida('AVA', 2, 'FIG', 0)

const partida_2 = new Partida('AVA', 3, 'FIG',  1)

const partida_3 = new Partida('AVA', 3, 'FIG',  3)

const partida_4 = new Partida('AVA', 7, 'FIG',  1)

console.log('Partida 1')
avai.computarPartida(partida_1)
avai.exibirSituacao()

figueira.computarPartida(partida_1)
figueira.exibirSituacao()

console.log('Partida 2')
avai.computarPartida(partida_2)
avai.exibirSituacao()

figueira.computarPartida(partida_2)
figueira.exibirSituacao()

console.log('Partida 3')
avai.computarPartida(partida_3)
avai.exibirSituacao()

figueira.computarPartida(partida_3)
figueira.exibirSituacao()

console.log('Partida 4')
avai.computarPartida(partida_4)
avai.exibirSituacao()

figueira.computarPartida(partida_4)
figueira.exibirSituacao()