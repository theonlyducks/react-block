import './styles.css';

import React from 'react';

import { Loader as DefaultLoader } from './Loader';

export function BlockDuck({ children, ...props }) {
    const {
        message, blocking, className = '',
        opacity = 5, loader: Loader, tag: Tag = 'div', ...attributes
    } = props;
    const classNames = blocking ? `block-duck ${className}` : className;
    const settingOpacity = Math.min(10, Math.abs(opacity)) / 10; /* 0.1 or 1 */
    return (
        <Tag {...attributes} data-testid="tag" className={classNames}>
            <div
                data-testid="opacity"
                className="block-duck__overlay"
                style={blocking ? { opacity: settingOpacity } : {}}
            >
                {children}
            </div>
            {blocking &&
                <div data-testid="loading" className='block-duck__container'>
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
