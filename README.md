# DESAFIO BEM PRODUTORA

## Objetivo do Desafio

A Bem Promotora é uma empresa com diversos produtos, tendo seu principal foco no Crédito Consignado, sendo de aposentados e pensionistas do INSS e funcionários públicos Federais. 

Assim ela gostaria de realizar uma pesquisa com seus clientes. Conforme abaixo:
1. Qual sua faixa de Idade:
+ Até 30 Anos
+ De 30 a 50 anos
+ De 50 a 65 anos
+ Acima de 65 anos

2. Qual seu convênio:
+ INSS
+ SIAPE
+ Forças Armadas
+ Outros

3. Qual sua faixa salarial:
+ Até 2 SM
+ De 2 a 4 SM
+ De 4 a 6 SM
+ Acima de 6 SM

4. Por que você realizou o empréstimo:
+ Pagar contas
+ Reforma da Casa
+ Compra de Carro
+ Outras


* Não há restrição de ferramenta e nem tecnologia ( Python, C#, Java, Node ) e nem de framworks (React, Django, ... ) .
* Deve utilizar um banco de dados (No-SQL ou SQL) para buscar as perguntas e opções e gravar as respostas.
Sinta-se a vontade para realizar questionamentos.


## FrontEnd

O frontend é um simples conjunto de 3 arquivos, sendo eles: `index.html`, `style.css` e `script.js`.

Não é necessário nenhum comando para de inicialização para o frontend, somente deve-se iniciar os serviços backend.

# Backend MySQL

## Serviço MySQL

O projeto do backend necessita do serviço do MySQL rodando na máquina servidora, para criação do banco de dados por favor utilize os arquivos da pasta `\backend\create_mysql\`. O backend utiliza o `knex` para conectar com o banco, a configuração do banco esta no pasta `\backend\knexfile.js`, lembre-se de atualizar com o usuário e senha da sua conexão.

## Clone e Instalação

Instalação: Realize o [clone do repositório](https://docs.github.com/pt/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository), após concluído acesse a pasta raiz do projeto e repita a operação abaixo na pasta `backend`:  

execute `npm install` para instalar as dependências:

"dependencies": {
    "body-parser": "^1.19.0",
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "knex": "^0.21.12",
    "mysql": "^2.18.1",
    "pm2": "^4.5.0"
  },
"devDependencies": {
    "nodemon": "^2.0.6"
  }


## Scripts

### Desenvolvimento

Execute `npm run serve` para rodar o servidor backend, que estará escutando a `http://localhost: 4000`.


## Pendências

Aumentar a documentação do projeto;
Inscluir mais comentários;


