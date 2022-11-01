import { render, screen } from '@testing-library/react';

import { BlockDuck } from '.';

describe('BlockDuck test component', () => {

    describe('no blocking', () => {

        it('should render div tag by default', function () {
            const { container } = render(<BlockDuck>Hi!</BlockDuck>);
            expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
        });

        it('should render span tag', function () {
            const { container } = render(<BlockDuck tag="span">Hi!</BlockDuck>);
            expect(container.firstChild).toBeInstanceOf(HTMLSpanElement);
        });

        it('should render children', function () {
            const { getByText } = render(<BlockDuck>Hi!</BlockDuck>);
            const children = getByText(/Hi!/i);
            expect(children).toHaveTextContent('Hi!');
            expect(children).toBeInTheDocument();
        });

        it('should render with the props passed in', function () {
            const { container } = render(<BlockDuck style={{ textAlign: 'center' }}>Hi!</BlockDuck>);
            expect(container.firstChild).toHaveStyle('text-align:center');
        });

        it('should render just the className passed in', function () {
            const { container } = render(<BlockDuck className="customClass">Hi!</BlockDuck>);
            expect(container.firstChild).toHaveClass('customClass');
        });

    });

    describe('blocking', () => {

        it('should render div tag by default', function () {
            const { container } = render(<BlockDuck blocking>Yo!</BlockDuck>);
            expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
        });

        it('should render span tag', function () {
            const { container } = render(<BlockDuck blocking tag="span">Hi!</BlockDuck>);
            expect(container.firstChild).toBeInstanceOf(HTMLSpanElement);
        });

        it('should render children', function () {
            const { getByText } = render(<BlockDuck blocking>Hi!</BlockDuck>);
            const children = getByText(/Hi!/i);
            expect(children).toHaveTextContent('Hi!');
            expect(children).toBeInTheDocument();
        });

        it('should render with the props passed in', function () {
            const { container } = render(<BlockDuck blocking style={{ textAlign: 'center' }}>Hi!</BlockDuck>);
            expect(container.firstChild).toHaveStyle('text-align:center');
        });

        it('should render just the className passed in', function () {
            const { container } = render(<BlockDuck blocking className="customClass">Hi!</BlockDuck>);
            expect(container.firstChild).toHaveClass('customClass');
        });

        it('should append container div', function () {
            const { getByTestId } = render(<BlockDuck blocking>Hi!</BlockDuck>);
            const loadingContainer = getByTestId("loading");
            expect(loadingContainer).toBeInstanceOf(HTMLDivElement);
            expect(loadingContainer).toBeInTheDocument();
        });

        it('should contains message', function () {
            render(<BlockDuck tag="div" blocking message="Loading" >Hi!</BlockDuck>);
            const message = screen.getByText(/Loading/i);
            expect(message).toBeInTheDocument();
        });

    });

});
