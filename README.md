# Country Explorer

Aplicação web desenvolvida em **Angular** para explorar informações sobre países utilizando a API pública **REST Countries**.

O objetivo do projeto é permitir que o usuário navegue pelos países do mundo, pesquisando por nome, filtrando por região e acessando informações detalhadas sobre cada país.

---

# Funcionalidades

### Busca por nome
Permite pesquisar países em tempo real através da barra de busca.

### Filtro por região
Possibilidade de filtrar os países por região do mundo.

### Página de detalhe do país
Ao clicar em um país, o usuário é direcionado para uma página com informações mais completas, como:

- bandeira
- capital
- população
- região e sub-região
- moedas
- idiomas
- países fronteiriços (com redirecionamento para outra página de detalhe)

### Componentização
Os países são exibidos através de um componente reutilizável de card.

### Estados de carregamento
A aplicação apresenta feedback visual enquanto os dados estão sendo carregados.

### Tratamento de erro
Caso ocorra falha na requisição da API, a interface informa o usuário.

### Layout responsivo
A interface foi adaptada para funcionar em diferentes tamanhos de tela.

---

# Comparação com os requisitos do desafio

| Requisito | Implementação |
|--------|--------|
| Listar países com informações relevantes | ✅ Implementado |
| Buscar países por nome em tempo real | ✅ Implementado |
| Filtrar por região | ✅ Implementado |
| Página de detalhe do país | ✅ Implementado |
| Exibir população, capital, moedas, idiomas e fronteiras | ✅ Implementado |
| Estados de loading e erro | ✅ Implementado |

---

# Tecnologias utilizadas

- Angular
- TypeScript
- Tailwind CSS
- REST Countries API

---

# API utilizada

REST Countries v3.1

https://restcountries.com/

---

# Decisões técnicas

A aplicação foi estruturada utilizando **Standalone Components**, seguindo o padrão mais moderno do Angular.

A organização do projeto foi feita por **feature**, agrupando componentes e páginas relacionadas à funcionalidade de países.

O card de país foi separado como um componente reutilizável, facilitando manutenção e reutilização.

A busca foi implementada localmente utilizando os dados já carregados da API, evitando múltiplas requisições a cada digitação.

---

# Sobre o desenvolvimento do projeto

vezes, mas não é tão diferente do React a ponto de não ser "praticável". O uso do Tailwind foi uma proposta muito bem-vinda; mesmo que eu já estivesse um pouco enferrujada, consegui fazer o projeto fluir e relembrar dessa ferramenta que sempre gostei de usar. Pretendo, claro, continuar estudando mais sobre esse framework, mas esse primeiro contato me mostrou que ele não é uma monstruosidade; na verdade, é um framework bem organizado e intuitivo.

Tive de usar por algumas vezes o auxílio da IA como ferramenta, para que fosse possível sair de travas e esclarecer conceitos, mas sempre buscando entender as razões de suas escolhas e aprender com o código.

O meu objetivo foi trazer um projeto com responsividade, funcional e organizado, manter o código legível e a UX o mais clara possível. Espero que tenham gostado do resultado do teste; de fato, foi uma boa experiência para apresentação ao Framework desenvolvido pelo Google.

---

# Como executar o projeto

- Clone o repositório: git-clone https://github.com/LuaSpecht/countries-explorer
- Acesse a pasta do projeto: cd countries-explorer
- Instale as dependências: npm install
- Execute o projeto: ng serve 
- Abra no navegador: http://localhost:4200/ 

---

# Autor

Luana Specht