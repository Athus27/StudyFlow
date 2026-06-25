const URL_LOCALIDADES = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

export async function recuperarListaDeEstados() {
  const response = await fetch(URL_LOCALIDADES);
  return response.json();
}

export async function recuperarListaDeCidades(estadoId) {
  const url = `${URL_LOCALIDADES}/${estadoId}/municipios`;
  const response = await fetch(url);

  return response.json();
}

export async function carregarEstados() {
  const estados = await recuperarListaDeEstados();
  const selectEstados = document.getElementById("estados");

  if (!selectEstados) {
    return;
  }

  selectEstados.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.innerText = "Selecione o estado";
  placeholder.disabled = true;
  placeholder.selected = true;
  selectEstados.appendChild(placeholder);

  for (const estado of estados) {
    const { id, sigla } = estado;
    const itemOption = document.createElement("option");

    itemOption.value = id;
    itemOption.innerText = sigla;
    selectEstados.appendChild(itemOption);
  }
}

export async function carregarCidades(estadoId) {
  const cidades = await recuperarListaDeCidades(estadoId);
  const selectCidades = document.getElementById("cidades");

  if (!selectCidades) {
    return;
  }

  selectCidades.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.innerText = "Selecione a cidade";
  placeholder.disabled = true;
  placeholder.selected = true;
  selectCidades.appendChild(placeholder);

  for (const cidade of cidades) {
    const { id, nome } = cidade;
    const itemOption = document.createElement("option");

    itemOption.value = id;
    itemOption.innerText = nome;
    selectCidades.appendChild(itemOption);
  }
}
