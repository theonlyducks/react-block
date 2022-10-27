import './style.css';

export function BlockDuck({ children, ...props }) {
    const { tag: Tag, blocking, className } = props;
    const classes = blocking ? `block-duck ${className}` : className;
    return (
        <Tag className={classes}>
            {children}
            {blocking &&
                <div className='block-duck__container'>
                    <div className='block-duck__overlay' />
                    <div className='block-duck__message'>

                    </div>
                </div>
            }
        </Tag>
    );
}
