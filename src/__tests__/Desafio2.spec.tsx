import {Desafio2} from '../Desafio2';
import {render} from '@testing-library/react'
describe('Desafio2',()=>{
  it('Deve ser Renderizado',()=>{

      const  component = render(<Desafio2 />)
      expect(component).toMatchSnapshot()
      expect(component).toBeTruthy()

  })
})
