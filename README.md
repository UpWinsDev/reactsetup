This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Deploy no HEROKU

[https://app-reactsetup.herokuapp.com/]

-Para um aplicativo existente

```bash
heroku git:remote -a example-app

```

- Implante seu código

```bash
git push heroku main

```

- Implante suas alterações
Faça algumas alterações no código que você acabou de clonar e implante-as no Heroku usando o Git.

```bash
$ git add .
$ git commit -am "make it better"
$ git push heroku main

```

# Como inicio meus apps com ReactJS - SETUP

[https://www.youtube.com/watch?v=1nVUfZg2dSA]


## TypeScript is a language for application scale JavaScript development

```bash
yarn add typescript @types/react @types/node -D
```

## A minimal set of easy to install ESLint rules for your project

```bash
yarn eslint --init
```

1° To chck syntax, find problems, and enforce code style
2° JavaScript modules (import/export)
3° React
4° Does your project use TypeScript? » Yes
5° Where does your code run? · browser, node
6° Use a popular style guide
7° Standard: https://github.com/standard/standard
8° JSON
9° intall npm

Após remover package-lock.json e rodar
Parar o servidor antes de executar o yarn
```bash
yarn
```

Adicionar vscode: settings.json
baixar extenção: eslint
"editor.codeActionsOnSave": {
        "source.fixAll.eslint":true
}

## Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

```bash
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```

## Configurar arquivo: .eslintrc.json

Adicionar: jest
"env":{
    ++
"jest": true
}

"extends": [
    ++
"plugin@typescript-eslint/recommended",
"prettier/@typescript-eslint",
"prettier/standard",
"prettier/react"
]

"plugins": [
    +++
"prettier"
]

"rules": {
    "prettier/prettier":"error",
    "space-before-function-paren":"off",
    "react/prop-types": "off"
}

## Criar arquivo: .eslintignore

Ele evita editar texto

Escrever:

node_modules
.next
/*.js

## Criar arquivo: .prettier.config

Evitar conflitos

modules.exports = {
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    trailingComma: 'none',
    endOfLine: 'auto'
}

## Intalar extenção: EditorConfig for VS Code

mantem padrão de edição vscode

end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true

## Styled components

https://github.com/vercel/next.js/tree/canary/examples/with-styled-components

copiar arquivo: _document.js

```bash
yarn add styled-components
```

Criar arquivo: babel.config.js

module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "styled-components", { "ssr": true }
        ]
    ]
}

```bash
yarn add @types/styled-components -D

```

https://dev.to/rffaguiar/nextjs-typescript-styled-components-1i3m

## Criar pasta src

criar pasta styles/globals.ts

import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
`;

## Tratativas de imagem

[https://insideblock.com/blog/lidando-com-imagens-no-nextjs/]

[https://www.npmjs.com/package/next-images]

```bash
yarn add next-images

```

Adincionar na pasta: next.config.js

const withImages = require('next-images')
module.exports = withImages({ esModule: true })

Adincionar na pasta: next-env.d.ts
/// <reference types="next-images" />

- Importar o svg, colocar em inline

[https://github.com/airbnb/babel-plugin-inline-react-svg]

```bash
yarn add babel-plugin-inline-react-svg

```

Adicionar: babel.config.js
{
  "plugins": [
    "inline-react-svg"
  ]
}

#Get started with Tailwind CSS 


```bash
yarn add -D tailwindcss postcss autoprefixer

```

- Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.

```bash
yarn tailwindcss init -p

```

- Crie componentes de reação CSS tailwind como componentes estilizados com nome de classes em várias linhas


```bash
yarn add -D tailwind-styled-components
```