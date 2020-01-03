//Obj short Syntax
const nome = "Eduardo";
const idade = 24;

const user = {
  // Quando o nome da propriedade é o mesmo da variavel que popula nao precisa utilizar o "nome: nome" por exemplo.
  nome,
  idade,
  filhos: false
};

console.log(user);

// -------------------------------------------------------------------------------------------------------------------------------

//Templade Literals | Notaçao - ` ` + ${} |
// const nome = 'Eduardo';
// const idade = 24;

// **console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);**

// --------------------------------------------------------------------------------------------------------------------------------

//REST SPREAD - Adicionar com yarn @babel/plugin-proposal-object-rest-spread e criar array de plugin no babelrc

//REST| notaçao - ... - |pega o resto do obj num outro obj, serve para array tb
// const user  = {
//     nome: 'Eduardo',
//     idade: 24,
//     empresa: "none"
// }

// const {nome, ...resto} = user;
// console.log(nome);
// console.log(resto);

// SPREAD propaga as infos de um obj ou array e passa pra outra estrutura de dados|notaçao - ...obj/arr - |

// const user1 = {
//     nome: "Eduardo",
//     idade: 24
// };

// const user2 = { ...user1, nome: "Lucas"};

// console.log(user1, user2);

// ---------------------------------------------------------------------------------------------------------------------------

//Desestruturacao de OBJS
// const usuario = {
//     nome: 'Eduardo',
//     idade: 24,
//     endereco: {
//         cidade: 'Curitiba',
//         estado: 'PR'
//     },
// };

// const { nome, idade, endereco: {cidade}} = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// -------------------------------------------------------------------------------------------------------------------------------------

//Aula arrow Functions
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const newArr = arr.map(item => item * 2);

// console.log(newArr);

// const teste = () => ({nome: "Eduardo"}) //Sintaxe para retornar um obj diretamente Utilizando parenteses envolta das chaves.

// console.log(teste());

// _------------------------------------------------------------------------------------------------------------------------------------

//Aula  de arrays
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const newArr = arr.map(function(item, index){
//     return item + index;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next){
//     return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(item){
//     return item === 9;
// });

// console.log(find);
