'use strict'

async function pesquisarCep(cep){
    const url = `http://viacep.com.br/ws/${cep}/json`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
async function preecherCampos ({target}){
  const infoCep = await pesquisarCep(target.value)
  console.log(infoCep)
  document.getElementById('endereco').value = infoCep.logradouro
  document.getElementById('bairro').value = infoCep.bairro
  document.getElementById('cidade').value = infoCep.cidade
  document.getElementById('estado').value = infoCep.estado
}
document.getElementById('cep')
    .addEventListener('focusout', preecherCampos)