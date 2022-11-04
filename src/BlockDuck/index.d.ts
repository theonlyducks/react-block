import * as React from 'react';

interface BlockDuckProps extends HTMLElement {
    tag: string
    loader: React.ReactNode
    message: string,
    blocking: boolean,
    className: string
}

export class BlockDuck extends React.Component<BlockDuckProps> {}
