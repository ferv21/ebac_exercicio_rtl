import { fireEvent, render, screen } from '@testing-library/react'

import PostComment from '.'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument() //botao
    })
    
    test('Adicionar 2 comentários via teste', () =>{
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comentario'),{
            target:{
                value: 'Comentário teste 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        
        fireEvent.change(screen.getByTestId('campo-comentario'),{
            target:{
                value:'Comentario teste 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    })
})