import io from "./server.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "texto de Javacsript"
  },
  {
    nome: "Node",
    texto: "texto de Node"
  },
  {
    nome: "Socket.io",
    texto: "texto de Socket"
  }
];

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID: ", socket.id);

  socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = encontrarDocumento(nomeDocumento);
    if(documento){
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", ({texto, nomeDocumento}) => {
    socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
  });

});

function encontrarDocumento(nome) {
  const documento = documentos.find((documento) => {
    return documento.nome === nome;
  });
  return documento;
}