import * as React from 'react';
import {unstable_useId as useId, useForkRef} from '@mui/material/utils';
import MenuList from '@mui/material/MenuList';
import {ButtonProps} from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import {gridDensityValueSelector} from '@mui/x-data-grid/hooks/features/density/densitySelector';
import {GridDensity, GridDensityTypes} from '@mui/x-data-grid/models/gridDensity';
import {isHideMenuKey, isTabKey} from '@mui/x-data-grid/utils/keyboardUtils';
import {useGridApiContext} from '@mui/x-data-grid/hooks/utils/useGridApiContext';
import {useGridSelector} from '@mui/x-data-grid/hooks/utils/useGridSelector';
import {GridDensityOption} from '@mui/x-data-grid/models/api/gridDensityApi';
import {GridMenu, GridMenuProps} from '@mui/x-data-grid/components/menu/GridMenu';
import {useGridRootProps} from '@mui/x-data-grid/hooks/utils/useGridRootProps';
import {gridClasses} from '@mui/x-data-grid/constants/gridClasses';
import {ButtonUnstyled} from "@mui/base";
import {ViewGridIcon} from '@heroicons/react/solid'
import IconButton from './ui/IconButton';

const DensitySelector = React.forwardRef<HTMLButtonElement, ButtonProps>(
    function GridToolbarDensitySelector(props, ref) {
        const {onClick, ...other} = props;
        const apiRef = useGridApiContext();
        const rootProps = useGridRootProps();
        const densityValue = useGridSelector(apiRef, gridDensityValueSelector);
        const densityButtonId = useId();
        const densityMenuId = useId();

        const [open, setOpen] = React.useState(false);
        const buttonRef = React.useRef<HTMLButtonElement>(null);
        const handleRef = useForkRef(ref, buttonRef);

        const densityOptions: GridDensityOption[] = [
            {
                icon: <rootProps.components.DensityCompactIcon/>,
                label: apiRef.current.getLocaleText('toolbarDensityCompact'),
                value: GridDensityTypes.Compact,
            },
            {
                icon: <rootProps.components.DensityStandardIcon/>,
                label: apiRef.current.getLocaleText('toolbarDensityStandard'),
                value: GridDensityTypes.Standard,
            },
            {
                icon: <rootProps.components.DensityComfortableIcon/>,
                label: apiRef.current.getLocaleText('toolbarDensityComfortable'),
                value: GridDensityTypes.Comfortable,
            },
        ];

        const startIcon = React.useMemo<React.ReactElement>(() => {
            switch (densityValue) {
                case GridDensityTypes.Compact:
                    return <rootProps.components.DensityCompactIcon/>;
                case GridDensityTypes.Comfortable:
                    return <rootProps.components.DensityComfortableIcon/>;
                default:
                    return <rootProps.components.DensityStandardIcon/>;
            }
        }, [densityValue, rootProps]);

        const handleDensitySelectorOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
            setOpen((prevOpen) => !prevOpen);
            onClick?.(event);
        };
        const handleDensitySelectorClickAway: GridMenuProps['onClickAway'] = (event) => {
            if (
                buttonRef.current === event.target ||
                // if user clicked on the icon
                buttonRef.current?.contains(event.target as Element)
            ) {
                return;
            }
            setOpen(false);
        };
        const handleDensityUpdate = (newDensity: GridDensity) => {
            apiRef.current.setDensity(newDensity);
            setOpen(false);
        };

        const handleListKeyDown = (event: React.KeyboardEvent) => {
            if (isTabKey(event.key)) {
                event.preventDefault();
            }
            if (isHideMenuKey(event.key)) {
                setOpen(false);
            }
        };

        // Disable the button if the corresponding is disabled
        if (rootProps.disableDensitySelector) {
            return null;
        }

        const densityElements = densityOptions.map<React.ReactElement>((option, index) => (
            <MenuItem
                key={index}
                onClick={() => handleDensityUpdate(option.value)}
                selected={option.value === densityValue}
            >
                <ListItemIcon>{option.icon}</ListItemIcon>
                {option.label}
            </MenuItem>
        ));

        return (
            <React.Fragment>
                {/*<ButtonUnstyled*/}
                {/*    ref={handleRef}*/}
                {/*    aria-label={apiRef.current.getLocaleText('toolbarDensityLabel')}*/}
                {/*    aria-expanded={open ? 'true' : undefined}*/}
                {/*    aria-haspopup="menu"*/}
                {/*    aria-controls={densityMenuId}*/}
                {/*    id={densityButtonId}*/}
                {/*    onClick={handleDensitySelectorOpen}*/}
                {/*    componentsProps={{ root: { className: 'btn btn-secondary-100 text-secondary btn-icon ml-2'} }}*/}
                {/*>*/}
                {/*    <i className="icon icon-three-bars"></i>*/}
                {/*</ButtonUnstyled>*/}
                <IconButton
                    icon={'icon-three-bars'}
                    id={densityButtonId}
                    onClick={handleDensitySelectorOpen}
                    other={{
                        ref: handleRef,
                        'aria-label': apiRef.current.getLocaleText('toolbarDensityLabel'),
                        'aria-expanded': open ? 'true' : undefined,
                        'aria-haspopup': 'menu',
                        'aria-controls': densityMenuId
                    }}
                />
                <GridMenu
                    open={open}
                    target={buttonRef.current}
                    onClickAway={handleDensitySelectorClickAway}
                    position="bottom-start"
                >
                    <MenuList
                        id={densityMenuId}
                        className={gridClasses.menuList}
                        aria-labelledby={densityButtonId}
                        onKeyDown={handleListKeyDown}
                        autoFocusItem={open}
                    >
                        {densityElements}
                    </MenuList>
                </GridMenu>
            </React.Fragment>
        );
    },
);
export default DensitySelector;