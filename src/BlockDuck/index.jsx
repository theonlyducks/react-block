import './style.css';

import React from 'react';

import { Loader as DefaultLoader } from  './Loader';

export function BlockDuck({ children, ...props }) {
    const { tag: Tag, loader: Loader, blocking, className } = props;
    const classes = blocking ? `block-duck ${className}` : className;
    return (
        <Tag className={classes}>
            {children}
            {blocking &&
                <div className='block-duck__container'>
                    <div className='block-duck__overlay' />
                    <div className='block-duck__message'>
                        {React.isValidElement(Loader) ? Loader : <DefaultLoader/>}
                    </div>
                </div>
            }
        </Tag>
    );
}
