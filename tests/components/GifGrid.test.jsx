import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe mostrar el Loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={category} /> );
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se cargan las img useFetchGifs', () => {

        const gifs = [
            {
                id: '1',
                title: 'Saitama',
                url: 'laurl1'
            },
            {
                id: '2',
                title: 'Goku',
                url: 'laurl2'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category} /> );
        expect(screen.getAllByRole('img').length).toBe(2);

    });
});