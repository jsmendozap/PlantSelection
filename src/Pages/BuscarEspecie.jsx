import React from 'react'
import especies from 'Pages/especies';
import { BiSearchAlt } from "react-icons/bi"
import MUIDataTable from "mui-datatables";
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const BuscarEspecie = () => {

  const columns = [
    {
     name: "cientifico",
     label: "Nombre Cientifico",
     options: {
      filter: true,
      sort: true,
      setCellProps: () => ({ style: { fontStyle: 'italic' }})
     }
    },
    {
     name: "vulgar",
     label: "Nombre Vulgar",
     options: {
      filter: true,
      sort: true
     }
    },
    {
     name: "calificacion",
     label: "Calificación",
     options: {
      filter: true,
      sort: true
     }
    },
    {
      name: 'detalles',
      label: "DETALLES",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (rowIndex) => {
          return(
            <Link to={especies[rowIndex].id.toString()}>
              <AspectRatioIcon style={{cursor: 'pointer'}}/>
            </Link>
          )
        },
        setCellProps: () => ({ style: { paddingRight: '55px' }}) 
      }
    }
   ];
   
  const options = {
    filterType: 'dropdown',
    elevation: 3,
    print: false,
    selectableRows: 'none',
    viewColumns: false,
    textLabels: {
      body: {
        noMatch: "No se encontraron coincidencias",
        columnHeaderTooltip: column => `Ordenar por ${column.label}`
      },
      pagination: {
        next: "Página siguiente",
        previous: "Página anterior",
        rowsPerPage: "Registros por página:",
        displayRows: "of",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        filterTable: "Filtrar tabla",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Resetear",
      }
    }
  };

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3vh'}}>
        <BiSearchAlt style={{width: '5vh', height: '45px', color: 'orange'}}/>
        <h2>Buscar especie</h2>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ThemeProvider theme={myTheme}>
          <MUIDataTable 
            title={"Especies registradas"}
            data={especies}
            columns={columns}
            options={options}
          />
        </ThemeProvider>  
      </div>
    </div>
  )
}

export default BuscarEspecie

const myTheme = createTheme({
  components: {
    MUIDataTable: {
      styleOverrides:{
        root: {
            padding: '1vh'
        }
      }
    },
    MUIDataTableBodyCell: {
      styleOverrides:{
        root: {
            textAlign: 'center'
        }
      }
    },
    MUIDataTableHeadCell: {
      styleOverrides:{
        contentWrapper: {
            display: 'flex',
            justifyContent: 'center'
        }
      }
    },
    MuiPaper: {
      styleOverrides:{
        root: {
          width: '75%'
        }
      }
    },
    MuiPopover: {
      styleOverrides:{
        paper: {
            width: '30%'
        }
      }
    }
  }
});