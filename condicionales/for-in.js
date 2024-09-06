const regalosDeNavidad={
    play5: 2,
    moto: 2,
    casa: 4,
    finca: 6
}
let lista = ["comer", "dormir", "programar", "repetir"]

for(compras in regalosDeNavidad){
    console.log(compras)
}

for(compras in regalosDeNavidad){
    console.log(`${compras}: ${regalosDeNavidad[compras]}`)
}

for(compras of lista){
    console.log(lista)
}