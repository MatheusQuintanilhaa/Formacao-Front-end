//  Requisicao
postsFetch.interceptors.request.use(
  function (config) {
    console.log("Antes da requisicao...");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)


// Resposta
postsFetch.interceptors.response.use(
  function (response) {
    console.log("Antes da reposta...");
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
)
