import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://admin:admin@clusterdocs.9c3nvbn.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDocs"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
