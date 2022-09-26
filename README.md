<h2 align="center">
  Dynamic Links com Firebase no React Native
</h2>

<h3 align="center">
  Rotina de Compartilhamento #9 - Liven
</h3>

<p align="center">
  <img alt="Mobile Application Demo" src="https://github.com/isabelamoraes/rotina-de-compartilhamento/blob/main/demo/rotina.gif?raw=true" width="60%">
</p>

## 🔗 Dynamic Links

O Dynamic link é um recurso que permite definir o comportamento de um link dependendo da plataforma em que ele for acessado, proporcionando uma melhor experiência ao usuário.

Através dele, podemos definir qual tela do app nativo deverá ser aberta quando o usuário acessar o Dynamic Link por um dispositivo iOS ou Android, qual o comportamento caso o usuário não possua o app instalado e como ele deverá funcionar caso seja aberto em navegador desktop.

## 📁 Projeto

Esse projeto foi desenvolvido com o intuito de explorar a implementação do Dynamic Links com Firebase em aplicações React Native, na Rotina de Compartilhamento #9 na Liven.

O projeto consiste em duas aplicações: web e mobile. Enquanto essa primeira busca disponibilizar os dynamic links para acesso, essa segunda tem o intuito de ilustrar o comportamento nativo ao clicar sobre esses links.

- **Web**: a aplicação web foi desenvolvida em [React](https://reactjs.org/) e disponibilizada através do recurso Hosting do Firebase. 

- **Mobile**: o aplicativo Android e iOS foi desenvolvido utilizando o framework [React Native](https://reactnative.dev/).

## 🔧 Pré-requisitos

**Criar o projeto no Firebase**
- Configurar web app e [Firebase Hosting](https://firebase.google.com/docs/hosting/).
- Criar Android e iOS app e seguir as instruções de configuração do SDK.

**React Native Firebase**
- Para iniciar com a lib [React Native Firebase](https://rnfirebase.io/) é necessário instalar o módulo `app` e realizar o setup na aplicação Android e iOS. Em seguida, para configurar o Dynamic Links no seu projeto, é necessário prosseguir com a instalação dos módulos `analytics` e `dynamic-links`.

## 🛠 Configuração Firebase Console
No menu `Engajamento`, selecionar a opção `Dynamic Links` e clicar em `Vamos começar`. 
Definir o domínio (Ex: `rotinacompartilhamento.page.link`) e prosseguir com as etapas.
Com o domínio criado, é hora de começar a criar os dynamic links. Para isso, clique em `Criar link dinâmico` e complete as etapas abaixo:
- Configurar seu link de URL curto.
@TODO - Adicionar imagem
- Configurar seu Dynamic Link.
@TODO - Adicionar imagem
- Definir o comportamento do link para a Apple.
@TODO - Adicionar imagem
- Definir o comportamento do link para Android.
@TODO - Adicionar imagem


## 🛠 Configuração Android
`@TODO`

## 🛠 Configuração iOS
`@TODO`

## 🛠 Configuração React Native
`@TODO`

## 📃 Instruções

Para clonar essa aplicação, execute os seguintes comandos:

```bash
# Clonar o repositório
$ git clone https://github.com/isabelamoraes/rotina-de-compartilhamento.git

```

Para rodar a aplicação web, execute os comandos a seguir:

```bash
# Instalar as dependências
$ yarn

# Executar a aplicação web
$ yarn dev

# Realizar a build
$ yarn build

# Fazer o deploy
firebase deploy --only hosting:rotina-de-compartilhamento

```

Para rodar a aplicação mobile, execute os seguintes comandos:

```bash
# Instalar as dependências
$ yarn

# Inicializar a aplicação
yarn start

# Executar para Android
yarn android

# Executar para iOS
yarn ios

```

## 📚 Referências

Esse conteúdo foi criado com base nas documentações abaixo:

- [React Native Firebase - Dynamic Links](https://rnfirebase.io/dynamic-links/usage)
- [Firebase - Dynamic Links](https://firebase.google.com/docs/dynamic-links)
- [React Navigation - Deep Linking](https://reactnavigation.org/docs/deep-linking#set-up-with-bare-react-native-projects)
