import { useState, useEffect } from "react";

/*export const useFetch = () => {
  const [delicias, setDelicias] = useState([]);
  useEffect(() => {
    fetch(
      "https://maps.googleapis.com/maps/api/place/details/json?language=es&placeid=ChIJ8zOztFsnQg0Rw7BEDPTZQQI&key=AIzaSyBfjtp2uF9HUlxszuopGxGFG2unuDWj7Lw"
    )
      .then((response) => response.json())
      .then((delicias) => {
        setDelicias(delicias);
      });
  }, []);
  return {
    delicias,
  };
};*/

export const useFetchDelicias = () => {
  const [delicias, setDelicias] = useState([]);
  useEffect(() => {
    fetch(
      "https://currencymarket.es/archivos-cache/cached-place_id-delicias.txt"
    )
      .then((response) => response.json())
      .then((delicias) => {
        setDelicias(delicias);
      });
  }, []);
  return {
    delicias,
  };
};

export const useFetchTirso = () => {
  const [tirso, settirso] = useState([]);
  useEffect(() => {
    fetch(
      "https://currencymarket.es/archivos-cache/cached-place_id-tirsodemolina.txt"
    )
      .then((response) => response.json())
      .then((tirso) => {
        settirso(tirso);
      });
  }, []);
  return {
    tirso,
  };
};

export const useFetchAlcala = () => {
  const [alcala, setAlcala] = useState([]);
  useEffect(() => {
    fetch("https://currencymarket.es/archivos-cache/cached-place_id-alcala.txt")
      .then((response) => response.json())
      .then((alcala) => {
        setAlcala(alcala);
      });
  }, []);
  return {
    alcala,
  };
};

export const useFetchBernardo = () => {
  const [bernardo, setBernardo] = useState([]);
  useEffect(() => {
    fetch(
      "https://currencymarket.es/archivos-cache/cached-place_id-sanbernardo.txt"
    )
      .then((response) => response.json())
      .then((bernardo) => {
        setBernardo(bernardo);
      });
  }, []);
  return {
    bernardo,
  };
};

export const useFetchCaminos = () => {
  const [caminos, setCaminos] = useState([]);
  useEffect(() => {
    fetch(
      "https://currencymarket.es/archivos-cache/cached-place_id-cuatrocaminos.txt"
    )
      .then((response) => response.json())
      .then((caminos) => {
        setCaminos(caminos);
      });
  }, []);
  return {
    caminos,
  };
};

export const useFetchTetuan = () => {
  const [tetuan, setTetuan] = useState([]);
  useEffect(() => {
    fetch("https://currencymarket.es/archivos-cache/cached-place_id-tetuan.txt")
      .then((response) => response.json())
      .then((tetuan) => {
        setTetuan(tetuan);
      });
  }, []);
  return {
    tetuan,
  };
};
