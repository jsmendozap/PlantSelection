import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "https://api-seleccion.onrender.com";
//"http://localhost:5000";

export const obtenerEspecies = async (setEspecies) => {
  const options = {
    method: "GET",
    url: `${baseURL}/especies`,
  };

  await axios
    .request(options)
    .then(function (response) {
      setEspecies(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const crearEspecie = async (datos) => {
  const options = {
    method: "POST",
    url: `${baseURL}/especies/nuevo`,
    data: datos,
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success("Registro creado exitosamente");
    })
    .catch(function (error) {
      console.error(error);
      toast.error("Ocurrió un problema al crear el registro");
    });
};
