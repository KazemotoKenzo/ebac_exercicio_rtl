import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve adicionar dois comentarios na lista', () => {
        const { debug } = render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Comentario 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Comentario 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        debug();
        expect(screen.getByText('Comentario 1')).toBeInTheDocument()
        expect(screen.getByText('Comentario 2')).toBeInTheDocument()
    })
});