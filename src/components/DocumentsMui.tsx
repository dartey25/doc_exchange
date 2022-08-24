import * as React from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid,
    GRID_CHECKBOX_SELECTION_FIELD, GridColDef,
    gridPageCountSelector,
    gridPageSelector, GridRenderCellParams, GridRowsProp,
    GridToolbar,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton, GridToolbarQuickFilter,
    ukUA,
    useGridApiContext,
    useGridSelector
} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {styled} from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Button from './ui/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import {alpha, Divider, Menu, MenuProps, PaginationItem} from "@mui/material";
import Input from "./ui/Input";
import TableQuickSort from "./TableQuickSort";
import DensitySelector from "./DensitySelector";
import {useNavigate} from "react-router-dom";
import Modal from "./ui/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "./ui/IconButton";
import Icon from "./ui/Icon";
import {DotsHorizontalIcon} from '@heroicons/react/solid'
import {data} from "browserslist";

const AntDesignStyledDataGrid = styled(DataGrid)(({theme}) => ({
    border: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`,
    color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        WebkitFontSmoothing: 'auto',
        letterSpacing: 'normal',
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
        },
        '& .MuiDataGrid-iconSeparator': {
            display: 'none',
        },
        '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
            borderRight: `1px solid ${
                theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
            borderBottom: `1px solid ${
                theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
        },
        '& .MuiDataGrid-cell': {
            color:
                theme.palette.mode === 'light'
                    ? 'rgba(0,0,0,.85)'
                    : 'rgba(255,255,255,0.65)',
        },
        '& .MuiPaginationItem-root': {
            borderRadius: 0,
        },
        '& .MuiCheckbox-root svg': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: `1px solid ${
                theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
            }`,
            borderRadius: 2,
        },
        '& .MuiCheckbox-root svg path': {
            display: 'none',
        },
        '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
        },
        '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
            position: 'absolute',
            display: 'table',
            border: '2px solid #fff',
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) translate(-50%,-50%)',
            opacity: 1,
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
            content: '""',
            top: '50%',
            left: '39%',
            width: 5.71428571,
            height: 9.14285714,
        },
        '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
            width: 8,
            height: 8,
            backgroundColor: '#1890ff',
            transform: 'none',
            top: '39%',
            border: 0,
        },
    },
}));

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    '& .MuiFormGroup-options': {
        alignItems: 'center',
        paddingBottom: theme.spacing(1),
        '& > div': {
            minWidth: 100,
            margin: theme.spacing(2),
            marginLeft: 0,
        },
    },
}));


type GridDataType = 'Employee' | 'Commodity';
type GridDataThemeOption = 'default' | 'ant';

interface GridPaginationSettings {
    pagination: boolean;
    autoPageSize: boolean;
    pageSize: number | undefined;
}

interface GridConfigOptions {
    size: number;
    type: GridDataType;
    pagesize: number;
    theme: GridDataThemeOption;
}

interface GridToolbarContainerProps {
    onApply: (options: GridConfigOptions) => void;
    size: number;
    type: GridDataType;
    theme: GridDataThemeOption;
}

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page + 1}
            count={pageCount}
            // @ts-expect-error
            renderItem={(props2) => <PaginationItem {...props2} disableRipple/>}
            onChange={(event: React.ChangeEvent<unknown>, value: number) =>
                apiRef.current.setPage(value - 1)
            }
        />
    );
}

function CustomToolbar() {
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalOpen2, setModalOpen2] = React.useState(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <GridToolbarContainer className="mb-3">
                <div>
                    <Button onClick={() => setModalOpen(true)} icon="icon-upload4">
                        Завантажити
                    </Button>

                    <Button className="ml-4" type="light" onClick={() => ({})} icon="icon-download4">
                        Скачати
                    </Button>
                    <Button className="ml-2" type="light" onClick={() => navigate('123')} icon="icon-bubble9">
                        Питання до підтримки
                    </Button>
                    <Button className="ml-2" type="light" onClick={() => setModalOpen2(true)} icon="icon-eye">
                        Превью
                    </Button>
                    {/*<IconButton type='danger' icon='icon-trash' title='Видалити'/>*/}
                </div>
                <div className='d-flex ml-auto align-items-center'>
                    <TableQuickSort/>
                    <DensitySelector/>
                </div>
            </GridToolbarContainer>
            <Modal open={modalOpen} handleClose={() => setModalOpen(false)}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Перетягніть файл
                    </Typography>
                    <Typography id="transition-modal-description" sx={{mt: 2}}>
                        Тут я завантажу ваш файл
                    </Typography>
                </Box>
            </Modal>
            <Modal open={modalOpen2} handleClose={() => setModalOpen2(false)}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Превью файлу
                    </Typography>
                    <Typography id="transition-modal-description" sx={{mt: 2}}>
                        Ваш imfx файл
                    </Typography>
                </Box>
            </Modal>
        </>
    )
        ;
}

export default function FullFeaturedDemo() {
    const [isAntDesign, setIsAntDesign] = React.useState<boolean>(false);
    const [type, setType] = React.useState<GridDataType>('Commodity');
    const [size, setSize] = React.useState(100);
    const {loading, data, setRowLength, loadNewData} = useDemoData({
        dataSet: type,
        rowLength: size,
        maxColumns: 40,
        editable: false,
    });
    const navigate = useNavigate();

    const [pagination, setPagination] = React.useState<GridPaginationSettings>({
        pagination: false,
        autoPageSize: false,
        pageSize: undefined,
    });

    const getActiveTheme = () => {
        return isAntDesign ? 'ant' : 'default';
    };

    const handleApplyClick: GridToolbarContainerProps['onApply'] = (settings) => {
        if (size !== settings.size) {
            setSize(settings.size);
        }

        if (type !== settings.type) {
            setType(settings.type);
        }

        if (getActiveTheme() !== settings.theme) {
            setIsAntDesign(!isAntDesign);
        }

        if (size !== settings.size || type !== settings.type) {
            setRowLength(settings.size);
            loadNewData();
        }

        const newPaginationSettings: GridPaginationSettings = {
            pagination: settings.pagesize !== -1,
            autoPageSize: settings.pagesize === 0,
            pageSize: settings.pagesize > 0 ? settings.pagesize : undefined,
        };

        setPagination(
            (
                currentPaginationSettings: GridPaginationSettings,
            ): GridPaginationSettings => {
                if (
                    currentPaginationSettings.pagination ===
                    newPaginationSettings.pagination &&
                    currentPaginationSettings.autoPageSize ===
                    newPaginationSettings.autoPageSize &&
                    currentPaginationSettings.pageSize === newPaginationSettings.pageSize
                ) {
                    return currentPaginationSettings;
                }
                return newPaginationSettings;
            },
        );
    };

    // const DataGridComponent = isAntDesign ? AntDesignStyledDataGrid : DataGrid;

    const rows: GridRowsProp = [
        {
            id: 1,
            document: 'MDUA806020_001667.zmdx',
            type: 'Рідний формат',
            comment: 'Графа 14 : № дозволу митного брокера не зайдений в базі даних миниці.',
            size: '1735',
            date: '29-06-2022'
        },
        {
            id: 2,
            document: 'MDUA100230_001046.zmdx',
            type: 'Рідний формат',
            comment: '',
            size: '1875',
            date: '06-04-2022'
        },
        {
            id: 3,
            document: 'CCD_1046.imfx',
            type: 'UA100230 МД Вн.№ 1046 (ЕК 10 АА) від 19.08.2022',
            comment: 'Графа 14 : № дозволу митного брокера не зайдений в базі даних миниці.',
            size: '1564',
            date: '15-08-2022'
        },
        {
            id: 4,
            document: 'MDUA806020_001667.zmdx',
            type: 'Рідний формат',
            comment: 'Графа 14 : № дозволу митного брокера не зайдений в базі даних миниці.',
            size: '1735',
            date: '29-06-2022'
        },
        {
            id: 5,
            document: 'MDUA100230_001046.zmdx',
            type: 'Рідний формат',
            comment: '',
            size: '1875',
            date: '06-04-2022'
        },
        {
            id: 6,
            document: 'CCD_1046.imfx',
            type: 'UA100230 МД Вн.№ 1046 (ЕК 10 АА) від 19.08.2022',
            comment: 'Графа 14 : № дозволу митного брокера не зайдений в базі даних миниці.',
            size: '1564',
            date: '15-08-2022'
        },
        {
            id: 7,
            document: 'MDUA806020_001667.zmdx',
            type: 'Рідний формат',
            comment: 'Графа 14 : № дозволу митного брокера не зайдений в базі даних миниці.',
            size: '1735',
            date: '29-06-2022'
        },
        {
            id: 8,
            document: 'MDUA100230_001046.zmdx',
            type: 'Рідний формат',
            comment: '',
            size: '1875',
            date: '06-04-2022'
        },
        {
            id: 9,
            document: 'CCD_1046.imfx',
            type: 'UA100230 МД Вн.№ 1046 (ЕК 10 АА) від 19.08.2022',
            comment: 'Графа 14 : № дозволу митного брокера не зайдений в базі даних миниці.',
            size: '1564',
            date: '15-08-2022'
        },
        {
            id: 10,
            document: 'MDUA806020_001667.zmdx',
            type: 'Рідний формат',
            comment: 'Графа 14 : № дозволу митного брокера не зайдений в базі даних миниці.',
            size: '1735',
            date: '29-06-2022'
        },
        {
            id: 11,
            document: 'MDUA100230_001046.zmdx',
            type: 'Рідний формат',
            comment: '',
            size: '1875',
            date: '06-04-2022'
        },
        {
            id: 12,
            document: 'CCD_1046.imfx',
            type: 'UA100230 МД Вн.№ 1046 (ЕК 10 АА) від 19.08.2022',
            comment: 'Графа 14 : № дозволу митного брокера не зайдений в базі даних миниці.',
            size: '1564',
            date: '15-08-2022'
        },

    ];

    const StyledGridOverlay = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        '& .ant-empty-img-1': {
            fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
        },
        '& .ant-empty-img-2': {
            fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
        },
        '& .ant-empty-img-3': {
            fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
        },
        '& .ant-empty-img-4': {
            fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
        },
        '& .ant-empty-img-5': {
            fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
            fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
        },
    }));

    function CustomNoRowsOverlay() {
        return (
            <StyledGridOverlay>
                <svg
                    width="120"
                    height="100"
                    viewBox="0 0 184 152"
                    aria-hidden
                    focusable="false"
                >
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(24 31.67)">
                            <ellipse
                                className="ant-empty-img-5"
                                cx="67.797"
                                cy="106.89"
                                rx="67.797"
                                ry="12.668"
                            />
                            <path
                                className="ant-empty-img-1"
                                d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                            />
                            <path
                                className="ant-empty-img-2"
                                d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                            />
                            <path
                                className="ant-empty-img-3"
                                d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                            />
                        </g>
                        <path
                            className="ant-empty-img-3"
                            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                        />
                        <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
                            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"/>
                            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"/>
                        </g>
                    </g>
                </svg>
                <Box sx={{mt: 1}}>Файли поки відсутні..</Box>
            </StyledGridOverlay>
        );
    }

    const StyledMenu = styled((props: MenuProps) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));

    const columns: GridColDef[] = [
        {field: 'document', headerName: 'Назва файлу', width: 250},
        {field: 'type', headerName: 'Формат', width: 150},
        {field: 'size', headerName: 'Розмір', width: 150},
        {field: 'date', headerName: 'Дата', width: 150},
        {field: 'comment', headerName: 'Примітка', flex: 1},
        {
            field: "actions",
            align: "right",
            headerName: 'Дії',
            hideable: false,
            sortable: false,
            disableExport: true,
            renderHeader: () => <></>,
            renderCell: (params: GridRenderCellParams) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
                const open = Boolean(anchorEl);
                const handleClick = (event: React.MouseEvent<HTMLElement>) => {
                    setAnchorEl(event.currentTarget);
                };
                const handleClose = () => {
                    setAnchorEl(null);
                };

                return (
                    <div className='d-flex justify-content-end'>
                        {/*<IconButton icon='icon-bubble9' title="Переписка" onClick={(e) => {*/}
                        {/*    e.stopPropagation();*/}
                        {/*    navigate('123')*/}
                        {/*}}/>*/}
                        {/*<IconButton icon='icon-trash' type='danger' title="Видалити" onClick={(e) => {*/}
                        {/*    e.stopPropagation()*/}
                        {/*}}/>*/}
                        <IconButton icon={<DotsHorizontalIcon/>} onClick={(e) => {e.stopPropagation(); handleClick(e)}}/>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                <Icon classNames='text-secondary mr-2' type='icon-download4'/>
                                Скачати файл
                            </MenuItem>
                            <MenuItem onClick={() => {handleClose(); navigate('123')}} disableRipple>
                                <Icon classNames='text-secondary mr-2' type='icon-bubbles2'/>
                                Переписка
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <Icon classNames='text-danger mr-2' type='icon-trash'/>
                                <span className='text-danger'>Видалити</span>
                            </MenuItem>
                        </StyledMenu>
                    </div>
                )
            },
        },
    ];

    return (
        <AntDesignStyledDataGrid
            rows={rows}
            columns={columns}
            //{...data}
            components={{
                Toolbar: CustomToolbar,
                Pagination: CustomPagination,
                NoRowsOverlay: CustomNoRowsOverlay,
            }}
            componentsProps={{
                toolbar: {showQuickFilter: true},
            }}
            loading={loading}
            checkboxSelection
            //disableSelectionOnClick
            rowThreshold={0}
            initialState={{
                ...data.initialState
            }}
            //{...pagination}
            localeText={ukUA.components.MuiDataGrid.defaultProps.localeText}
        />
        //</StyledBox>
    );
}
