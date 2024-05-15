import React, {useEffect, useState} from 'react';

/* TODO
  Existe neste componente alguns problemas.

  1. A listagem não para de atualizar descontroladamente e exponencialmente.
  2. O total só mostra o valor real quando atualizado os estados das contagens 2 e 3 mas precisa considerar
     qualquer uma das 3 contagens.

  Critérios de aceite:

  - Não usar mais de um useEffect.
  - O cálculo do total deverá ser feito no useEffect.
  - As alterações do estados da lista e total deverá ocorrer no useEffect.
*/

export const Desafio4 = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [list, setList] = useState<number[]>([])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const totalCount = count1 + count2 + count3;
    setTotal(totalCount)
    setList([...list, totalCount])
  },[count3, count2, list])

  const addCount1 = ()=>setCount1(count1 + 1)
  const addCount2 = ()=>setCount2(count2 + 1)
  const addCount3 = ()=>setCount3(count3 + 1)

  return (
    <>
      <button onClick={addCount1} data-testid="btn1">adiciona + 1 na contagem 1</button><br/>
      <button onClick={addCount2} data-testid="btn2">adiciona + 1 na contagem 2</button><br/>
      <button onClick={addCount3} data-testid="btn3">adiciona + 1 na contagem 3</button><br/>
      <p data-testid="v1">v1: {count1}</p>
      <p data-testid="v2">v2: {count2}</p>
      <p data-testid="v3">v3: {count3}</p>
      <p data-testid="total">total: {total}</p>
      <p data-testid="length">tamanho da lista: {list.length}</p>
    </>
  )
}
