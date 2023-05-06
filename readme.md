```bash
mkdir manual-isomorphism
cd manual-isomorphism 
npm init -y
npm i webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react -D
mkdir server 
npx tsc --init
npm i typescript ts-loader -D
npm install webpack-node-externals --save-dev
```
开启jsx的编译；

ts:
添加lib,
开启jsx