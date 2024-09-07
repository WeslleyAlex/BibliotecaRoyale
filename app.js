//realiza a busca através da interação do usuário
function buscar(){

let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value

//se campoPesquisa for uma string sem nada
if(campoPesquisa == ""){
    section.innerHTML = "<p>Desculpe, digite novamente</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

//variável que recebe todos os dados da estrutura de repetição
let resultados = "";
let name = "";
let rarity = "";

//para cada dado dentro da lista de dados
for (let dado of dados) {

    name = dado.name.toLowerCase();
    rarity = dado.rarity.toLowerCase();

    //se titulo includes campoPesquisa
    if(name.includes(campoPesquisa) || rarity.includes(campoPesquisa)){

        //Cria um elemento html para cada resultado    
        resultados += `
            <div class="card-resultado">
                <img class="img-card" src="${dado.image}" alt="">
                <div class="text-card-resultado">
                    <h3 class="card-name">${dado.name}</h3>
                    <span class="card-rarity">${dado.rarity}</span>
                    <span class="card-type">${dado.type}</span>
                    <div class="card-info">
                        <span class="card-hitpoints">❤️️: ${dado.hitpoint}</span>
                        <span class="card-dmg">⚔️: ${dado.damage}</span>
                        <span class="card-hit-speed">🪃:${dado.hitspeed}</span>
                    </div>
                </div>
            </div>
        `
    }
}

if(!resultados){
    resultados = "<p>Desculpe, não conheço esta carta.</p>"
}

//impressão na página web
section.innerHTML = resultados

}