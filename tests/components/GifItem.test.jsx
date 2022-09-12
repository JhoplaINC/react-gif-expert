import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {
    
    const title = 'saitama';
    const url = 'https://www.urlgenerico.com/foto.png';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el UR y ALT indicados', () => {
        render(<GifItem title={ title } url={ url } />);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText(title)).toBeTruthy();
    });
});