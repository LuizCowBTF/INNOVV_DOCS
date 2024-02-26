import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto) {
  socket.emit("texto_editor", texto);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome);
}


export { emitirTextoEditor, selecionarDocumento };
