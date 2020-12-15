//aqui definimos os passsos para rodar dentro do container

FROM node:lts    //gerando a aplicação

WORKDIR /usr/src/app  // definimos em qual diretorio sera colocada a aplicação

COPY package*.json ./     //o primeiro a se copiar foi o package.json (com * a gente pega td que começa com package e termina com .json e salvamos td no ./ que é a raiz do projeto)

RUN npm install //feito isso roda o npm install

COPY . .  //os arquivos ponto corrente e o diretorio da nossa imagem sao copiados e uma cópia de todos os arquivos do projeto vao para a pasta no WORKDIR

EXPOSE 5000  //é informado ao container qual porta expor

CMD [ "node", "index.js" ]