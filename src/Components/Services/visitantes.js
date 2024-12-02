import axios from "./axioServices";

export function GetVisitantes(body) {
  let token = localStorage.getItem("datos");
  token = token ? token.replace(/"/g, "") : "";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);
  return axios.post("Visitantes", body, config);
}
