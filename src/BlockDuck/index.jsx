import './styles.css';

import React from 'react';

import {Loader as DefaultLoader} from './Loader';

export function BlockDuck({children, ...props}) {
    const {tag: Tag, loader: Loader, message, blocking, className} = props;
    const classes = blocking ? `block-duck ${className}` : className;
    return (
        <Tag className={classes}>
            {children}
            {blocking &&
            <div className='block-duck__container'>
                <div className='block-duck__overlay'/>
                <div className='block-duck__message'>
                    <div className="block-duck__message--content">
                        {React.isValidElement(Loader) ? Loader : <DefaultLoader/>}
                        {message}
                    </div>
                </div>
            </div>
            }
        </Tag>
    );
}
