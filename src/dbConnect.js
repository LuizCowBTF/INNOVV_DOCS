import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://admin:admin@clusterdocs.9c3nvbn.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDocs");

let documentosColecao;

try {
  await cliente.connect();
  const db = cliente.db("innovv-websockets");
  documentosColecao = db.collection("documentos");
  console.log("CONNECT DATABANK!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };

