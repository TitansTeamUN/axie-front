# Dev Rules
This file won't replace the ReadMe which contains info about the project, nevertheless is going to be ReadMe temporarily so you can check it easily right in  https://github.com/TitansTeamUN/axie-front.

These rules are meant to maximize (improve at least) the efficiency when you're coding, reducing the time you're reading code, and improving the quality/reusability of the code.

# Folder Structure

The project contains a variant of the basic structure of a React Project.
The folder /src contains source code,  inside of it, we're gonna find:
* ***/components***:  Here, should be all the components that are reusable, although in the root of this directory shouldn't contain any file but folders where the components are.  **Ex:** You want to create some basic components, the ones that are present in almost every view in the app, you should create  a folder /basic and put those components right there (*/components/basic)*. 
* ***/pages***:  Here are those components that you can think of as the views of your app. 
* ***/theme***:  This folder is generated by `ionic start` command contains some css variables, although we're gonna use Tailwind Framework for styles, this might be useful later.
* ***/utils***:  This folder will contain some useful pieces of code, functions, constants, etc. 

New folders could be added if we consider that is necessary.

## Tailwind CSS Framework

As we mentioned above, the framework for styles is going to be Tailwind,  it defines "countless" classes for a single style, and allow us to combining them even customizing to make exactly what we want to. 
Tailwind for Ionic-React projects requires a setup, however it's already done.

Would be ok that you check its docs [Tailwind Docs](https://tailwindcss.com/docs)

##  Code 

The formatter we're going to use is Prettier, if you're using Visual Studio Code, you can find/download it  in the Extensions tab, remember to format your code before you commit, in VS Code there is an option to Format On Save.

Using a Linter should be discussed or considered at least, the project doesn't use a linter currently though.

## Stylistic rules 

Except for strange cases this rules should be considered.

 - Use arrow functions  `const x = (args)=> {return y}` ( even for components ) check this for further info [Arrow Functions ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
 - For export modules use a file index.tsx in the folder where these are contained, this file imports ALL modules in the specific directory and export them as an object so we can use [Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to import them. There is an example of this in /components/basic.


Some extra rules might be added in the future.
