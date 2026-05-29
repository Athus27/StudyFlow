//recuperar dados a partir da API de Localidades do IBGE
// https://servicodados.ibge.gov.br/api/v1/localidades/estados

const URL_LOCALIDADES = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

export async function recuperarListaDeEstados() {
	const response = await fetch(URL_LOCALIDADES);
	const estados = await response.json();
	// console.log(estados);
	return estados;
}

export async function carregarEstados() {
	const estados = await recuperarListaDeEstados();
	const select_estados = document.getElementById("estados");

	if (!select_estados) {
		return;
	}

	select_estados.innerHTML = "";

	const placeholder = document.createElement("option");
	placeholder.value = "";
	placeholder.innerText = "Selecione o estado";
	placeholder.disabled = true;
	placeholder.selected = true;
	select_estados.appendChild(placeholder);

	for (const estado of estados) {
		const { id, nome, sigla } = estado;
		const item_option = document.createElement("option");
		item_option.value = id;
		item_option.innerText = nome;
		select_estados.appendChild(item_option);
	}
}

export async function recuperarListaDeCidades(estado_id) {
	const URL_CIDADES = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`;
	const response = await fetch(URL_CIDADES);
	const cidades = await response.json();
	console.log(cidades);
	return cidades;
}

export async function carregarCidades(estado_id) {
	const cidades = await recuperarListaDeCidades(estado_id);
	const select_cidades = document.getElementById("cidades");
	
	if (!select_cidades) {
		return;
	}

	select_cidades.innerHTML = "";

	const placeholder = document.createElement("option");
	placeholder.value = "";
	placeholder.innerText = "Selecione a cidade";
	placeholder.disabled = true;
	placeholder.selected = true;
	select_cidades.appendChild(placeholder);

	for (const cidade of cidades) {
		const { id, nome } = cidade;
		const item_option = document.createElement("option");
		item_option.value = id;
		item_option.innerText = nome;
		select_cidades.appendChild(item_option);
	}
	console.log(cidades);
}
