# Next.js example for Selvklart

## Included

* [Next JS](https://nodejs.org) and configured next.config with SWC support
* [MUI (or Joy)](mui.com/) with configured emotion cache and SWR support
* [Editorconfig](mui.com/) for Selvklart projects
* [Eslint](mui.com/) based on Selvklart Eslint

## Local development

To be able to work on the project locally, you'll need to set up a few things first.

### Pre-requisites

* [Git](https://git-scm.com/)
* [Node.js v16 or higher](https://nodejs.org)
* [GitHub CLI](https://cli.github.com/) (optional)
### Creating a new project

The project can be created from any directory you want, so where you install it is up to you. The command will prompt you for a project name. 

```sh
cd ~/<your project dir>
npx create-next-app@latest -e https://github.com/selvklart/selvklart-nextjs-example
```

This will pull down the project and ask for a project name. Upon completion you will have a ready to go NextJS project with certain Selvklart additions. 

#### Next steps

1. Create a Github project using the web or CLI 
```sh
    gh repo create selvklart/<app name>
```
2. Initialize the app folder
```sh
    cd ~/<your project dir> && git init -b main
```
3. Add and commit the files
```sh
    git add . && git commit -m "Initial Selvklart Next Example commit"
```
4. Push the commit to the repo
```sh
    git remote add origin <REMOTE_URL>
    # Sets the new remote
    git remote -v
    # Verifies the new remote URL
    git push -u origin main
    # Pushes the changes in your local repository up to the remote repository you specified as the origin
```
### Editing the example TODO

### TODO
- Agree on best practices and add it to this repo
- Create Klart project example?
- Add better readme