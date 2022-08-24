import React from 'react';
import {ButtonUnstyled} from "@mui/base";
import Icon from "./Icon";

interface ButtonProps{
    onClick: () => void;
    type?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success' | 'light';
    className?: string;
    children?: any;
    icon?: any;
}

const Button: React.FC<ButtonProps> = ({children, onClick, type, className, icon}) => {
    return (
        <ButtonUnstyled
            onClick={onClick}
            componentsProps={{ root: { className: `btn btn-${type ? type: 'primary'} ${className && className}` } }}
        >
            {icon && <Icon classNames={children && 'mr-1'} type={icon}/>}
            {children}
        </ButtonUnstyled>
    );
};

export default Button;