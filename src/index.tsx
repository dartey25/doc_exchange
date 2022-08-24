import React from 'react';
import ReactDOM from 'react-dom/client';
import {createTheme, ThemeProvider} from "@mui/material";
import { ukUA } from '@mui/material/locale';

import App from './App';

const myTheme = createTheme({
        components: {
            //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
            MuiDataGrid: {
                styleOverrides: {
                    row: {
                        "&:hover": {
                            backgroundColor: "white",
                            cursor: 'pointer'
                        },
                        "&.Mui-selected": {
                            backgroundColor: "#eaf5ea",
                            "&:hover": {
                                backgroundColor: "#eaf5ea"
                            }
                        }
                    }
                }
            },
            MuiButtonBase: {
                defaultProps: {
                    // The props to change the default for.
                    disableRipple: true, // No more ripple, on the whole application ?!
                },
            },
        },
        palette: {
            primary: {
                light: '#519dd9',
                dark: '#234161',
                main: '#2196f3'
            }
        }
    },
    ukUA
);
// const theme = createTheme(
//     {
//         palette: {
//             primary: {main: '#1976d2'},
//         },
//     },
//     coreukUA,
//     ukUA
// );


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={myTheme}>
        <App/>
    </ThemeProvider>
);

export {};