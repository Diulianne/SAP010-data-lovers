

function filtrarCategorias(dados, categoria) {
  return dados.filter(i => i.category === categoria);
}

function filtrarStatus(dados, status) {
  return dados.filter(i => i.status === status);
}

function ordenar(dadosFiltrados, abobrinha) {
  if(abobrinha === "A-Z") {
    dadosFiltrados.sort((a, b) => a.name > b.name ? 1 : -1);
  } else if(abobrinha === "Z-A") {
    dadosFiltrados.sort((a, b) => a.name < b.name ? 1 : -1);
  }
  return dadosFiltrados;
}

export default {
  filtrarCategorias: filtrarCategorias, 
  filtrarStatus: filtrarStatus,
  ordenar: ordenar
};