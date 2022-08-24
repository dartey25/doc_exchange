import React, {ReactElement} from 'react';
import {ButtonUnstyled} from "@mui/base";

interface IconButtonProps {
    icon: string | ReactElement;
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
    marginLeft?: number;
    title?: string;
    other?: any;
}

const IconButton: React.FC<IconButtonProps> = ({icon, type = 'secondary', id, onClick, marginLeft = 2, title, other}) => {
    return (
        <ButtonUnstyled
            id={id}
            onClick={onClick}
            componentsProps={{root: {className: `btn btn-${type}-100 text-${type} btn-icon ml-${marginLeft}`}}}
            title={title}
            {...other}
        >
            {
                typeof icon === 'string' ?
                    <i className={`icon ${icon}`}></i>
                    :
                    <div style={{height: '18px', width: '18px'}}>
                        {icon}
                    </div>
            }
        </ButtonUnstyled>
    );
};

export default IconButton;