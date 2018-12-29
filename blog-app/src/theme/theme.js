import {createMuiTheme } from '@material-ui/core/styles';

// MUIカスタムカラーテーマ
export const theme = createMuiTheme({
  palette: {

      type: 'light',
    primary: {
        main:'#1565c0' // メインカラー
    },
    secondary: {main:'#673ab7' },  // サブカラー

     error: {main:'#ca0909' },

     sand:{main:'#F4DECB'},
     shell:{main:'#F8EEE7'},
     status:{
         danger:'#b71c1c'
     },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});