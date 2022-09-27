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

Esse projeto foi desenvolvido com o intuito de explorar a implementação do Dynamic Links com Firebase em aplicações React Native, na Rotina de Compartilhamento #9 da Liven.

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
- Configurar seu Dynamic Link.
- Definir o comportamento do link para a Apple.
- Definir o comportamento do link para Android.

<p align="center">
  <img alt="Create Dynamic Link on Firebase" src="https://github.com/isabelamoraes/rotina-de-compartilhamento/blob/main/assets/firebase.gif?raw=true" width="100%">
</p>

## 🛠 Configuração Android

Após realizar o setup do React Native Firebase conforme descrito na seção **Pré-requisitos**, é necessário realizar apenas uma configuração nativa no Android para garantir que o Dynamic Links vá funcionar no seu projeto.

Para isso, acesse o arquivo `AndroidManifest.xml` localizado no diretório `[sua-aplicação]/android/app/src/main/` e insira o trecho a seguir:

```xml
  ...

    <activity
      android:name=".MainActivity"
      ...
      android:exported="true">  <!-- Adicionar essa linha -->
      <!-- Início - Adicionar esse bloco -->
      <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="rotinacompartilhamento" android:host="rotinacompartilhamento" />
        <data android:scheme="https" android:host="rotinacompartilhamento.page.link" />
      </intent-filter>
      <!-- Fim -->
    </activity>

  ...

```

Um objeto [Intent](https://developer.android.com/guide/components/intents-filters) carrega as informações que o sistema Android usa para determinar o componente que irá iniciar, além de informações que o componente receptor usa para realizar a ação adequadamente. Dito isso, caso o usuário tenha o aplicativo instalado, os links de e-mails ou de outras páginas que apontem para esse site deverão abrir o app Android ao invés da página web.

## 🛠 Configuração iOS

Antes de começar com as configurações nativas, é importante lembrar que é necessário adicionar a opção **Associated Domain** no certificado de *provisioning profile* do seu aplicativo iOS no [Apple Developer Console](https://developer.apple.com/account/).

Prosseguindo, faça as seguintes inserções no seu `AppDelegate.m`. Essas alterações farão com que o app seja capaz de ouvir os links vindo de outras aplicações.

```objective-c

  // Adicionar importação no início do arquivo
  #import <React/RCTLinkingManager.h>

  // Adicionar trecho dentro de `@implementation AppDelegate`, antes do `@end`:
  - (BOOL)application:(UIApplication *)application
    openURL:(NSURL *)url
    options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
  {
    return [RCTLinkingManager application:application openURL:url options:options];
  }

```

Em seguida, é necessário adicionar ao arquivo `Info.plist` o prefixo da URL do seu Dynamic Link conforme configurado no Firebase, para que, ao invocar o Dynamic Link, seu app seja capaz de receber os dados e o link.

```xml

  <key>FirebaseDynamicLinksCustomDomains</key>
	<array>
		<string>https://rotinacompartilhamento.page.link</string>
	</array>

```

Para finalizar as configurações, abra seu projeto `.xcworkspace` no Xcode, selecione seu projeto em `TARGETS`, clique na aba `Signing and Capabilities`, `+ Capability` e adicione `Associated Domains`. Em seguida, adicione seu Dynamic Link conforme configurado no Firebase em `Domains`:

<p align="center">
  <img alt="Associated Domain" src="https://github.com/isabelamoraes/rotina-de-compartilhamento/blob/main/assets/xcode1.JPG?raw=true" width="100%">
</p>

Em seguida, acesse a tab `Info` e informe a `URL Schemes`:

<p align="center">
  <img alt="URL Schemes" src="https://github.com/isabelamoraes/rotina-de-compartilhamento/blob/main/assets/xcode2.JPG?raw=true" width="100%">
</p>

## 🛠 Configuração React Native

Realizada as configurações nativas no Android e iOS, basta implementar as configurações no projeto React Native e enfim, usufruir do uso do Dynamic Links.

Para começar, é necessário criar um objeto e definir os prefixos do seu Dynamic Link e as configurações de quais telas deverão ser abertar dependendo do link recebido:

```javascript

  ...

  export const navigationLinking: LinkingOptions<RootStackParamList> = {
    prefixes: [
      'rotinacompartilhamento://rotinacompartilhamento',
      'https://rotinacompartilhamento.page.link',
    ],
    config: {
      screens: {
        Example1: 'example1', //Rota: 'link'
        Example2: 'example2',
      },
    },
  };

```

Em seguida, passe esse objeto como parâmetro para a propriedade `linking` do seu `NavigationContainer` do React Navigation:

```javascript

  ...

  <NavigationContainer linking={navigationLinking}>
    <StackRoutes />
  </NavigationContainer>

  ...

```

Para finalizar, adicione a seguinte estrutura: 

```javascript

  const handleDynamicLink = async (
    link: FirebaseDynamicLinksTypes.DynamicLink | null,
  ) => {
    const URL = link?.url.split('/__/')[1];

    if (URL) {
      Linking.openURL(`rotinacompartilhamento://rotinacompartilhamento/${URL}`);
    }
  };

  useEffect(() => dynamicLinks().onLink(handleDynamicLink), []);

  useEffect(() => {
    dynamicLinks().getInitialLink().then(handleDynamicLink);
  }, []);

```

A função `handleDynamicLink` será responsável por lidar com o link recebido e fazer o direcionamento para determinada tela do app. Enquanto isso, os métodos `onLink` e `getInitialLink` são responsáveis por ouvir os eventos em Foreground (app aberto) e Background/Quit (app em segundo plano ou fechado), respectivamente, e chamar a função handleDynamicLink quando um evento for recebido. 


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
