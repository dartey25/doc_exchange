import * as React from 'react';
import { styled, Theme } from '@mui/system';
import Fade from '@mui/material/Fade';
import {ModalUnstyled} from "@mui/base";
import clsx from 'clsx';


interface ModalProps {
    open: boolean;
    handleClose: () => void;
    children: any;
}

const BackdropUnstyled = React.forwardRef<
    HTMLDivElement,
    { open?: boolean; className: string }
    >((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

const BaseModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'red',
    border: 'none',
    boxShadow: 24,
    padding: '16px 32px 24px 32px',
});

 const Modal: React.FC<ModalProps> = ({open, handleClose, children}) => {

    return (
        <div>
            <BaseModal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                components={{ Backdrop }}
            >
                <Fade in={open} timeout={300}>
                    {children}
                </Fade>
            </BaseModal>
        </div>
    );
}

export default Modal;
