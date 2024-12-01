import axios from "./axioServices";

export function GetVisitantes(body) {
  return axios.post("Visitantes", body);
}
