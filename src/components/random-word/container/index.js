import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchRandomWord } from "../action-creators";
import { selectRandomWord } from "../selectors";

import RandomWord from "../presentation";

const RandomWordContainer = () => {
  // Pega referência do dispatch da store
  const dispatch = useDispatch();

  // Cria o handler de ação
  const handler = useCallback(() => {
    dispatch(fetchRandomWord());
  }, [dispatch]);

  // Chama a ação assim que o componente é montado
  useEffect(handler, []);

  // Seleciona os dados da store
  const data = useSelector(selectRandomWord);
  console.log("data", data);
  return <RandomWord {...data} onClick={handler} />;
};

export default RandomWordContainer;
