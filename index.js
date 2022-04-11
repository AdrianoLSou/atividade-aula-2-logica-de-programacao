//1-  Armazenar o nome da empresa. sempre que executar o sistema, ele deverá ser exibido no console. 
//Essa informação nunca deverá ser alterada durante o uso do sistema.

const nomeEmpresa = "Sistema Omma"
console.log(nomeEmpresa);
console.log("-------------------------------------");

//2- Armazenar a lista de receitas no sistema, usar array. Ela deve possuir acesso global para
//todas as funcionalidades do sistema.

//3- Deixaremos previamente cadastrada uma receita dentro da lista de receitas. Ao cliente, será 
//livre a escolha da receita.
//Uma receita será representada por um objeto cujo deverá conter os seguintes atributos:
//  a. Um identificador único que não pode se repetir no sistema;
//  b. o titulo da receita;
//  c. o nível dificuldade ( com a escala de simples, moderada e complexa);
//  d. a lista de ingredientes já com as medidas (Ex: 1 colher de açúcar);
//  e. as instruções de preparo;
//  f. um link do video de preparo;
//  g. informar se é vegana ou não.

let listaDeReceitas = [
  {
    id: 1,
    titulo: "Cachorro quente",
    dificuldade: "simples",
    ingredientes: ["1 pão de leite;", "1 salsicha;", "1 colher de batata palha.".toString()],
    preparo: "cortar, cozinhar, montar e comer.",
    link: "http://youtube.com",
    vegano: false,
  },
];
//console.log("--------------------------------");
// 4- Criar uma função que permita cadastrar uma receita dentro da lista de receitas.
// Seguir os padrões estipulados no objeto da etapa anterior.
// A função deve se chamar cadastrarReceita e deverá receber cada informação da receita
// por parâmetro e devolver um feedback no console informando que o cadastro foi concluído.

const cadastrarReceita = (
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano
) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    };

    listaDeReceitas.push(novaReceita);

  

    //console.log(`Cadastro da receita ${titulo} feito com sucesso!`);

};

cadastrarReceita(
    2,
    "Ovo frito",
    "simples",
    ["1 ovo", "1 colher de azeite", "sal a gosto".toString()],
    "ponha o azeite na frigideira em fogo médio, não deixe aquecer muito. Quebre os ovos e jogue na frigideira com o sal.",
    "https://google.com",
    false
);
//console.log("--------------------------------");

//5- Criar uma função chamada de exibirReceitas para listar no console todas as receitas cadastradas.
//Ao exibir cada receita, apenas os seguintes atributos devem ser mostrados:
//a. Título da Receita;
//b. Lista de Ingredientes;
//c. Se é vegana ou não.




function exibirReceitas(){
    for (let i = 0; i < listaDeReceitas.length; i++) {
        const receita = listaDeReceitas[i];

        console.log("-----------------------------");
        console.log(`Título: ${receita.titulo}`);

        console.log("Ingredientes:");
        for (let j = 0; j < receita.ingredientes.length; j++) {
            console.log (`- ${receita.ingredientes[j]}`);
        }

        console.log("É vegano? ", receita.vegano ? "Sim" : "Não");
        console.log("-----------------------------");
    }
}

        console.log(listaDeReceitas);
       // console.log("-----------------------------");

//6- Criar uma função que permita deletar uma receita. O nome da função será "deletarReceita".
//Ela receberá como parâmetro o identificador da receita e, caso o identificador não seja 
//encontrado, exibirá a seguinte mensagem: "Receita não encontrada". Se a receita for encontrada, 
//deverá ser deletada da lista e exibir uma mensagem de sucesso no console.


function deletarReceita(id) {
    let novaListaDeReceitas = [];

    for (let i = 0; i < listaDeReceitas.length; i++) {
        const receita = listaDeReceitas[i];

        if (receita.id !== id) {
           novaListaDeReceitas.push(receita); 
        }
    }

    if (novaListaDeReceitas.length === novaListaDeReceitas.length) {
        return console.log("Receita não encontrada");
    }

    listaDeReceitas = novaListaDeReceitas;
    console.log("Receita deletada com sucesso");
}



//Exibe as receitas
exibirReceitas();

//Deleta a receita id 1
deletarReceita(1);

//Exibe a nova lista de re receitas
exibirReceitas()








