import React from 'react';


interface IconProps{
    type: string;
    classNames?: string
}

const Icon:React.FC<IconProps> = ({type, classNames }) => {
    return (
        <i className={classNames ? [type, classNames].join(' ') : type}></i>
    );
};

export default Icon;