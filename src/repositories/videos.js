import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  }).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }

    throw new Error('Não foi possivel cadastrar os dados :(');
  });
}

export default {
  create,
};
