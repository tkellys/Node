const fs = require("fs");

function salvarArquivo(nomeArquivo, conteudo) {
  fs.writeFile(nomeArquivo, conteudo, (error) => {
    if (error) {
      console.log(error);
    }
  });
}

function addNoArquivo(nomeArquivo, conteudo) {
  fs.appendFile(nomeArquivo, conteudo, (error) => {
    if (error) {
      console.log(error);
    }
  });
}

fs.mkdir("pasta", (err) => {
  if (err) {
    addNoArquivo(
      "error.txt",
      "\n" + JSON.stringify(Date() + JSON.stringify(err))
    );
  }
});
