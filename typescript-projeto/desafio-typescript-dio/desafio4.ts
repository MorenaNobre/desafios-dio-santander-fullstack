console.log("Olá desafio 4!");
// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?

// A ideia dessa atividade é criar um aplicativo que:
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela

// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction

var apiKey = "3d235d155d6fc50e439c1ec0346560f4";
// let apiKey;
let requestToken: number;
let username: string;
let password: string;
let sessionId: number;
let listId = "7101979";

let inputLogin = document.getElementById("login") as HTMLInputElement;
let inputSenha = document.getElementById("senha") as HTMLInputElement;
let inputApiKey = document.getElementById("api-key") as HTMLInputElement;
let loginButton = document.getElementById("login-button") as HTMLButtonElement;
let searchButton = document.getElementById("search-button")!;
let inputSearch = document.getElementById("search") as HTMLInputElement;
let searchContainer = document.getElementById("search-container") as HTMLInputElement;

//sem erros
if (loginButton) {
  loginButton.addEventListener("click", async () => {
    await criarRequestToken();
    await logar();
    await criarSessao();
  });
}

//sem erros - pesquisa filmes
searchButton.addEventListener("click", async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }

  let query = inputSearch.value;
  let listaDeFilmes = await procurarFilme({ query });
  let ul = document.createElement("ul");
  ul.id = "lista";
  
  for (const item of listaDeFilmes.results) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.original_title));
    ul.appendChild(li);
  }

  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
});

//sem erros
function preencherSenha(): void {
  password = inputSenha.value;
  validateLoginButton();
}

//sem erros
function preencherLogin(): void {
  username = inputLogin.value;
  validateLoginButton();
}

//sem erros
function preencherApi(): void {
  apiKey = inputApiKey.value;
  validateLoginButton();
}

//sem erros
function validateLoginButton(): void {
  if(loginButton) {
    if (password && username && apiKey) {
      loginButton.disabled = false;
    } else {
      loginButton.disabled = true;
    }
  }
}

//sem erros, mas declarado como any. e o typescript inferiu a tipagem em outras partes do código.
class HttpClient {
  static async get({ url, method, body }: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText,
          });
        }
      };
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText,
        });
      };

      if (body) {
        request.setRequestHeader(
          "Content-Type",
          "application/json;charset=UTF-8"
        );
        body = JSON.stringify(body);
      }
      request.send(body);
    });
  }
}

//sem erros
async function procurarFilme({ query }: { query: string; }): Promise<any> {
  query = encodeURI(query);
  console.log(query);
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET",
  });
  return result;
}

//sem erros
async function adicionarFilme({ filmeId }: { filmeId: number; }): Promise<void> {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET",
  });
  console.log(result);
}

//sem erros
async function criarRequestToken(): Promise<void> {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET",
  });
  requestToken = result.request_token;
}

//sem erros
async function logar(): Promise<void> {
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`,
    },
  });
}

//sem erros
async function criarSessao(): Promise<void> {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET",
  });
  sessionId = result.session_id;
}

//sem erros
async function criarLista({ nomeDaLista, descricao }: { nomeDaLista: string; descricao: string; }): Promise<void> {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br",
    },
  });
  console.log(result);
}

//sem erros
async function adicionarFilmeNaLista({ filmeId, listaId }: { filmeId: number; listaId: number; }): Promise<void> {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId,
    },
  });
  console.log(result);
}

//sem erros
async function pegarLista(): Promise<void> {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET",
  });
  console.log(result);
}
