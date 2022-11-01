import './styles.css';

import React from 'react';

import { Loader as DefaultLoader } from './Loader';

export function BlockDuck({children, ...props}) {
    const {
        tag: Tag = 'div', loader: Loader, message, blocking, className, ...attributes
    } = props;
    const classes = blocking ? `block-duck ${className}` : className;
    return (
        <Tag {...attributes} data-testid="tag" className={classes}>
            {children}
            {blocking &&
                <div data-testid="loading" className='block-duck__container'>
                    <div className='block-duck__overlay'/>
                    <div className='block-duck__message'>
                        <div className="block-duck__message--content">
                            {React.isValidElement(Loader) ? Loader : <DefaultLoader />}
                            {message}
                        </div>
                    </div>
                </div>
            }
        </Tag>
    );
}
