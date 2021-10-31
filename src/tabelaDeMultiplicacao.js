function tabelamultiplicacao (){
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let tabela=[]
    for (let contador = 1; contador <=10; contador++){
        tabela[contador]=[]
        for (let linha=1; linha<=10;linha++){
            tabela[contador][linha]=contador*linha
        }
    }
    console.table(tabela)
    return tabela    
}
tabelamultiplicacao ()




function tabelamultiplos(a,b) { 

    let x = [];
    for (let index = 1; index <= a; index++) {
        x[index]=[]
        for (let indexj = 1; indexj <= b; indexj++){
            x[index][indexj]=(index)*(indexj)
        }
    }
    console.table(x)
    console.log(x)
    return x
}
tabelamultiplos(12,12)

