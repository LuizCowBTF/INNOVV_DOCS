import { documentosColecao } from "./dbConnect.js";

function obterDocumentos(){
  const documentos = documentosColecao.find().toArray();
  return documentos;
};

function adicionarDocumento(nome) {
  const resultado = documentosColecao.insertOne({
    nome,
    texto: ""
  })
}

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome
  });
  return documento;
}

function ataulizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({
    nome
  },
    {
      $set: { texto }
    });

  return atualizacao;
}

export { encontrarDocumento, ataulizaDocumento, obterDocumentos, adicionarDocumento };