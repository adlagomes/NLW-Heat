import axios from "axios";
/*
 * Receber code(string)
 *Recuperar o acess_token no github
 * Verificar se o usuário existe no DB
 * ----SIM = Gera Token
 *-----NÃO = Cria no DB, gera um token
 * Retornar o token com as infos do user
 */

interface IAccessTokenResponse{
   
 }

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";
    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "aplication/json",
      },
    });
    return response.data;
  }
}

export { AuthenticateUserService };
