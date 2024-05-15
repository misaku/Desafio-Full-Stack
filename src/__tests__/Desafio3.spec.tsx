import {Desafio3} from '../Desafio3';
import {render} from '@testing-library/react'
describe('Desafio3',()=>{
  it('Deve ser Renderizado',()=>{
    const  component = render(<Desafio3 />)
    expect(component).toMatchSnapshot()
  })
})
