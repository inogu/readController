import { createMuiTheme } from '@material-ui/core';
import {
  DataGrid,
  ptBR,
  GridValueFormatterParams,
  GridColDef,
} from '@material-ui/data-grid';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  ptBR,
);

const columns: GridColDef[] = [
  { field: 'nome', headerName: 'Nome', width: 200 },
  { field: 'autor', headerName: 'Autor', width: 200 },
  { field: 'genero', headerName: 'Genero', width: 150 },
  { field: 'numeroPaginas', headerName: 'Páginas', width: 150 },
];

const BookList = (props) => {
  const { items } = props;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={items}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </ThemeProvider>
    </div>
  );
};

export default BookList;
