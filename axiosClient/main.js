const btnGetMethod = document.querySelector("#btn-get-method");
const btnPostMethod = document.querySelector("#btn-post-method");

const instance = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

const getMethod = async (endpoint, option = {}) => {
  const apiRes = await instance.get(endpoint, option);
  console.log(apiRes);
};

const postMethod = async (endpoint, data) => {
  const apiRes = await instance.post(endpoint, data);
  console.log(apiRes);
};

btnGetMethod.onclick = () => {
  getMethod("/users?page=1");
};

btnPostMethod.onclick = () => {
  postMethod("/login", {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
};
