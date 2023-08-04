---
slug: 'how-to-create-a-project-with-next-13-app-directory-with-tailwind'
title: 'How to create a project with NextJS 13 using app directory and Tailwind'
description: 'This is a recipe to create a good and maintanable Next app'
image: '/static/images/posts/how-to-create-a-project-with-next-13-app-directory-with-tailwind.png'
video_url: ''
project_url: ''
figma_url: ''
tags: ["next-js", "react-js", "tailwind", "frontend"]
related: ["react-js", "next-js", "DOM", "typescript", "eslint", "prettier", "lint-staged", "husky", "tailwind"]
---

[NextJS](https://nextjs.org) is a powerfull framework used in a lot of sites. It can be really useful specially if you need a [SSR version](https://nextjs.org/docs/app/building-your-application/rendering) of your's [SPA react pages](https://stackoverflow.com/questions/62529631/why-is-react-js-called-as-single-page-application).

## Advantages of using NextJS

With user experience becaming the most important idea behind companies, it's clear that we need to have a lot of interactions that could change the interface. This can be achieved using only HTML, CSS and Javascript, but is hard and time consuming.

[React](https://react.dev/learn) was created mainly to solve this, using a virtual DOM (Think in [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_Document_Object_Model) as your interface, what you can see in your browser), that can be manipulated as you want using Javascript, basically using to create new interfaces or remove the older's ones.

This can be really good, specially because React algorithm is super fast and can detect what changed, so that way, it does not need to change the whole interface, but maybe just some part. E.g. You have a blog page that has a header and a footer, when you change the articles, the header/footer don't need to be changed or render again, this is awesome and it's one of the best parts of React.

All of this is good but using only Javascript to render the interface can bee very bad if you are worried about SEO, what can help your site to be found in search engines, like Google's.

This is bad because a lot of crawler robots disable javacript for better performance, and only use HTML and CSS to analyse your site. The problem is, if you only use React, your site will be a blank page with no content.

NextJS is a framework built in React's aiming to help with many React problems creating a middleware server using [NodeJS](https://nodejs.org/en) that serves the page already mounted to client, which means that crawlers can have map your site.

It's not only this, NextJS bring a lot more goodies, like [image optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images) and a [router systeam](https://nextjs.org/docs/app/building-your-application/routing/defining-routes).

That's why we are going to use this faboulous framework.

## Getting started

To get started with NextJS, you need to have a [node version](https://nodejs.org/en) installed on your machine. I recomend you to never install a current version, and always a LTS (Long-term support) to prevent unexpected behaviour.

After that [install NextJS](https://nextjs.org/docs/getting-started/installation) using:

```bash
npx create-next-app@latest
```

You will be asked about your project's configuration. You can choose what best suits you, but mine was the following:

```terminal
What is your project named? next-blog
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias? No
What import alias would you like configured? @/*
```

Explaning a little bit of each one:

1. [Typescript](https://www.typescriptlang.org) like the doc says:

> TypeScript is JavaScript with syntax for types.

Typescript can be difficult to understand at first, but belive me, it will be worthy, not just for the error catching but for the [IDE intelisense](https://code.visualstudio.com/docs/languages/typescript). Using Typescript can make you program faster and prevent errors. I recommend that you use typescript on EVERY project possible and forget about vanilla Javascript.

2. [Eslint](https://eslint.org) is a linting tool to help you find sintax errors. It's a very light package that bring so many advanges when writting code, like sintax verfication, imports/variables not used, object validation and much more. You can customize as you want adding or removing rules, and with [React Plugin](https://www.npmjs.com/package/eslint-plugin-react) you have a set of rules that helps you code in React. Another tool that is a must-have.

3. [Tailwind CSS](https://tailwindcss.com) is a CSS framework. I am gonna talk more about later in the article, but what you need to know is that Tailwind build their classes at build time and not run time like [CSS-In-JS](https://nextjs.org/docs/app/building-your-application/styling/css-in-js) solutions, which makes perfect duo to NextJS Server Render Strategy. I really love Tailwind and I am sure you will too.

4. Src directory is just to create a folder that contains all of your code insted letting routes, components and other stuff related to code stay at the same level as public folder or the configurations files.

5. [App router](https://nextjs.org/docs/app) is a new paradigm used to create NextJS applications using [React 18 Server components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components) this change is necessary because before this, all NextJS components were client, except routes pages, but with the server components, NextJS handles every component as server, except if you explicitly make the component client. This brought a lot of changes but, for good, and if you are started studing NextJS recently, I recommend to focus on app directory.

6. Customize the default import alias is a Typescript configuration to give an alias to imports. I personally like how NextJS was configured, but you can change the values and see what happened. I choose the default import alias `@` so my import will be:

```jsx
import { Header } from '@/components/Header'

...
```

## Configure Eslint and Prettier

As I said, Eslint has a really big set of rules you can choose, I am gonna show you the best Eslint configuration for me when using React and NextJS, but of course, you can change as you want.

First your Eslint configuration file is located at root project and called `.eslintrc.json`.

Here you can use as JSON or a Javascript module file. Personally I like to use as JSON, the only exception were when I created my [Eslint package](https://github.com/ofelipescherer/eslint-config) that's because were more easy to create, but this is history for another time.



```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': ["error", {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': false,
      'endOfLine': 'auto',
    }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}
```