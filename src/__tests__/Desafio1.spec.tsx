import {Desafio1} from '../Desafio1';
import {render} from '@testing-library/react'
describe('Desafio1',()=>{
  it('Deve ser Renderizado',()=>{
    const  component = render(<Desafio1 />)
    expect(component).toMatchSnapshot()
    expect(component).toBeTruthy()
  })
})
