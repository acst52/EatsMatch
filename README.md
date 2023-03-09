# EatsMatch

## GIT FLOW

*PULL BEFORE YOU START WORKING!! Added a whole function? Taking a break? Time to push your work!*

### to facilitate pulling and pushing from the develop branch, clone the repo and checkout the develop branch as the current working branch

git clone -b develop <repo-url>

### Pull changes from the develop branch before pushing

git pull origin develop

### Push changes to your feature branch off of develop

git checkout -b feature/my-feature develop

### Make changes on your feature branch, commit them locally

git status to make sure you're on your feature branch
git add .
git commit -m "Added/worked on new feature"
git push -u origin feature/my-feature

### Once your feature is ready for develop, create a merge (pull) request! This way, the develop branch will always contain the latest changes that have been approved by 2 teammates and merged from feature branches. You can do this in the terminal using [git merge develop] or directly on GitHub

**********

## STEPS TO CREATE & SEED DB, THEN START SERVER

- create env file with your db name, user and pw variables
- install dependencies; npm i
- create the db schema: npm run schema
- seed the dev db w test data: npm run seed
- start the server: npm start

**********

## DEPLOYING FINISHED GITHUB PROJECT ON HEROKU - STEPS

1. make sure all your files are in main. Move contents of develop dir into main if needed.
    - Similarly to how GitHub needs an index file in main, Heroku needs server.js in main to deploy!
2. make sure all dependencies installed (incl [npm i -g heroku] if not yet done;
    - [heroku --version] should show version after you install).
3. make sure working tree clean: [git add .] / [git commit -m "msg"] / [git push origin main]
4. [heroku auth:login]
5. [heroku create]
6. [git remote -v] --> SHOULD SEE 4 LINKS (fetch & push for origin and heroku)
7. [git push heroku main]
8. [heroku open] --> deploys your project @ random link generated w/ heroku create!
9. IF YOU MAKE CHANGES YOU WANT DEPLOYED: repeat steps 3, 4, 7

**********

**let me know if you need git revert instructions or want a second pair of eyes to deal with conflicts**
