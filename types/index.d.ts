import * as React from 'react';

export type BlockDuckProps = React.HTMLAttributes<HTMLElement> & {
    tag?: string
    children?: any,
    loader?: React.ReactNode | string,
    message?: React.ReactNode | string,
    blocking?: boolean,
    className?: string
}

declare class BlockDuck extends React.Component<BlockDuckProps> { }

export { BlockDuck };
