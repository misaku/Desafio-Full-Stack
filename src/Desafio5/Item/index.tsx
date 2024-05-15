import React from "react";
import { useItemController } from "./useItemController";

interface ItemProps {
  valor: number;
  parOuImpar(num: number): string;
}
export const Item: React.FC<ItemProps> = ({ valor, parOuImpar }) => {
  const { renderCounter, count, addCount } = useItemController();
  return (
    <li>
      <button onClick={addCount}>
        adiciona + 1 na contagem do item {valor}
      </button>
      <p>
        contagem: {count} é {parOuImpar(count)}
      </p>
      <p>renderizou: {renderCounter}</p>
    </li>
  );
};
