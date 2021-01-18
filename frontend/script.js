const table_resposta_json = {};
const perguntas_json = {};
const url_perguntas = "http://localhost:4000/perguntas"
const url_respostas = "http://localhost:4000/respostas"
var fields = document.querySelectorAll("input, select")
var select_fields = document.querySelectorAll('select')
const form = document.getElementById("formPesquisa")
const msg = document.getElementById("msgForm")
const table = document.getElementById("table_resultados")
const tr = document.querySelectorAll("tr")



const handleSubmit = async (e) => {
  e.preventDefault()
  const body = JSON.stringify(Object.fromEntries(new FormData(e.target)))

  // console.log(body)

  var xhr = new XMLHttpRequest()
  xhr.open("POST", url_respostas, true)
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

  xhr.send(body)

  // 4. This will be called after the response is received
  xhr.onload = function () {
    if (xhr.status != 204) { // analyze HTTP status of the response
      msg.innerHTML = `Error ${xhr.status}: ${xhr.statusText}`; // e.g. 404: Not Found
      // alert(`Error ${xhr.status}: ${xhr.statusText}`); 
    } else { // show the result
      msg.innerHTML = `Pesquisa concluída!, (got ${xhr.response.length} bytes)`; // response is the server response
      
      for (var i = 0; i < fields.length; i++) {
        fields[i].disabled = true
      }
      
      setTimeout(() => {
        for (var i = 0; i < fields.length; i++) {
          fields[i].disabled = false
        }
        msg.innerHTML = "Nota: Preencha todos os campos."
        location.reload()
      }, 3000)
      // alert(`Done, got ${xhr.response.length} bytes`); 
    }
  };

  // xhr.onloadend = function () {
  //   for (var i = 0; i < fields.length; i++) {
  //     fields[i].disabled = true
  //   }
  //   msg.innerHTML = "<b>Formulário enviado com sucesso!<b>";
  //   setTimeout(() => {
  //     for (var i = 0; i < fields.length; i++) {
  //       fields[i].disabled = false
  //     }
  //     msg.innerHTML = "Nota: Preencha todos os campos."
  //     location.reload()
  //   }, 3000)
  // }

}


function getDataFromUrl(url, variable, option) {
  // Verificação do suporte a solicitação do fetch
  if (self.fetch) {
    fetch(url)
      .then(function (response) {
        response.json().then(function (data) {
          variable = data;
          console.log(new Date().toLocaleTimeString() + " | Fetch suportado | " + url);
          console.log(variable);
          if (option == "select-one") {
            createOptionsForm(data)
          } else if (option == "tabela") {
            createTable(data)
          }
          document.getElementById('criado_emField').value = new Date().toLocaleDateString()
        });
      })
      .catch(function (err) {
        console.error("Json não encontrado, url: ", err);
      });
  } else {
    // Fetch não suportado, utilizando o recurso do XMLHttpRequest
    console.log("Fetch não é suportado");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        variable = JSON.parse(this.responseText);
        console.log(new Date().toLocaleTimeString() + " | Fetch não suportado | " + url);
        console.log(variable);
        if (option == "select-one") {
          createOptionsForm(variable)
        } else if (option == "tabela") {
          createTable(variable)
        }
        document.getElementById('criado_emField').value = new Date().toLocaleDateString()
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
}

function createOptionsForm(data) {
  for (let u = 0; u < select_fields.length; u++) {
    for (let o = 0; o < data.length; o++) {
      if (data[o].tipo == "resposta") {
        if (data[o].grupo == select_fields[u].name) {
          let x = select_fields[u]
          let option2 = document.createElement("option")
          option2.text = data[o].texto
          x.add(option2)
        }
      }
    }
  }
  console.log('Criado options nos campos select')
}

function createTable(data) {
  for (let i = 0; i < data.length; i++) {
    var row = table.insertRow(-1)
    var cell1 = row.insertCell(0).innerHTML = data[i].id
    var cell2 = row.insertCell().innerHTML = data[i].nome
    var cell3 = row.insertCell().innerHTML = data[i].cpf
    var cell4 = row.insertCell().innerHTML = data[i].idade
    var cell5 = row.insertCell().innerHTML = data[i].convenio
    var cell6 = row.insertCell().innerHTML = data[i].renda
    var cell7 = row.insertCell().innerHTML = data[i].motivo
    var cell8 = row.insertCell().innerHTML = data[i].criado_em
  }

  console.log('Criado options nos campos select')
}

// Função que retorna as configurações iniciais do formulário
function resetForm() {
  msg.innerHTML = "Nota: Preencha todos os campos.";
  location.reload()
}



form.addEventListener("submit", handleSubmit)

getDataFromUrl(url_perguntas, perguntas_json, "select-one")

getDataFromUrl(url_respostas, table_resposta_json, "tabela")