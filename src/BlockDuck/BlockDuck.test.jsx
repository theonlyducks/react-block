import { render, screen } from '@testing-library/react';

import { BlockDuck } from '.';

describe('BlockDuck test component', () => {

    describe('no blocking', () => {

        it('should render div tag', function () {
            const { container } = render(<BlockDuck tag="div">Hi!</BlockDuck>);
            expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
        });

        it('should render span tag', function () {
            const { container } = render(<BlockDuck tag="span">Hi!</BlockDuck>);
            expect(container.firstChild).toBeInstanceOf(HTMLSpanElement);
        });

        it('should render children', function () {
            const { getByText } = render(<BlockDuck tag="div">Hi!</BlockDuck>);
            const children = getByText(/Hi!/i);
            expect(children).toHaveTextContent('Hi!');
            expect(children).toBeInTheDocument();
        });

        it('should render just the className passed in', function () {
            const { container } = render(<BlockDuck tag="div" className="customClass">Hi!</BlockDuck>);
            expect(container.firstChild).toHaveClass('customClass');
        });

    });

    describe('blocking', () => {

        it('should contains message', function () {
            render(
                <BlockDuck tag="div" blocking={true} message="Loading" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida augue a massa ornare
                    sollicitudin. Aliquam a tortor finibus, fermentum justo ut, lobortis nisl. Curabitur suscipit lectus
                    metus, feugiat pulvinar lectus viverra a. Praesent tincidunt, ex consequat tempus aliquet, turpis ex
                    dapibus metus, a tempus sem lorem in eros. Donec nec rutrum mauris. Praesent iaculis gravida justo,
                    sed tempus ante luctus nec. Vivamus at dapibus elit. Duis vitae sapien rhoncus, convallis velit
                    eleifend, pretium nulla. In hac habitasse platea dictumst. Aenean id ante non nisl facilisis
                    lobortis ac eget dolor.
                </BlockDuck>
            );
            const message = screen.getByText(/Loading/i);
            expect(message).toBeInTheDocument();
        });

    });

});
