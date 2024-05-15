import { useState } from "react";

export const useDesafio5Controller = () => {
  const [list, setList] = useState<number[]>([]);
  const addItem = () => setList([...list, list.length]);
  const isPar = (valor: number) => valor % 2 === 0;
  const numero = list.length + 1;
  const parOuImpar = (valor: number) => (isPar(valor) ? "Par" : "Impar");

  return { list, addItem, numero, parOuImpar };
};
