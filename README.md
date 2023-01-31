# module-federation-with-many-angular-versions

Following this guide, it should be possible to load Angular apps as Web Components into a shell app, using Module Federation:

https://www.angulararchitects.io/en/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-your-4-steps-guide/

Like that it is possible to load e.g. an Angular 12 Micro Frontend into an Angular 14 shell.

### However, there are still some issues:

- ng13 MF does not work in ng14 shell
- ng14 MR does not work properly in an ng14 shell

I created this repo in the hope to fix the issues.

# Getting started

- `npm install` in all folders: "shell", "ng-12-mf"...
- Start all apps: Open the folders in separate terminals and run `ng serve -o`

The shell app and the Micro Frontends ("ng-12-mf" etc) will open in the browser:

Shell:

![image](https://user-images.githubusercontent.com/1272446/215782369-521688ef-edf8-4470-943c-4478b21f9143.png)


The Micro Frontends look like this:

![image](https://user-images.githubusercontent.com/1272446/215782521-24d7c70c-072d-464a-87c0-4a8be925f584.png)


## Shell:

### Angular 12 Micro Frontend

Navigate to Angular 12: Everything looks great and as expected

![image](https://user-images.githubusercontent.com/1272446/215782718-0ee4aa21-b89a-49d6-94bc-eb43b5ad49a8.png)

### Angular 13 Micro Frontend

Navigate to Angular 13: Oh nooo! We see an error: `TypeError: m[e].get is not a function` and the Micro Frontend is not displayed:

![image](https://user-images.githubusercontent.com/1272446/215783459-6fba6257-1922-4ce1-884b-cfe23b3e7081.png)

### Angular 14 Micro Frontend

Navigate to Angular 14: Oh nooo! We see an error: `Error: Uncaught (in promise): Error: NG04002`, but the Micro Frontend is displayed:

![image](https://user-images.githubusercontent.com/1272446/215783849-a8885a2c-1919-404e-a1ad-ca5f3fffb7f6.png)



