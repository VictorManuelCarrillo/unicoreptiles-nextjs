// layout component
import Layout from "components/admin/06-layout/Layout";

//mui components
import {styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: 'lightgrey'
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.light,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function AdminHomePage({animals}) {

  return (
    <Layout>
      <TableContainer>

        <Table>

          <TableHead>

            <TableRow>
              <StyledTableCell>TITULO</StyledTableCell>
              <StyledTableCell>CATEGORÍA</StyledTableCell>
              <StyledTableCell>FASES</StyledTableCell>
              <StyledTableCell>DESCRIPCIÓN</StyledTableCell>
              <StyledTableCell>PRECIO</StyledTableCell>
              <StyledTableCell>EDAD</StyledTableCell>
              <StyledTableCell>SEXO</StyledTableCell>
              <StyledTableCell>DISPONIBLE</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {animals.map((animal, idx) => (
              <StyledTableRow key={idx}>
                <StyledTableCell>{animal.title}</StyledTableCell>
                <StyledTableCell>{animal.category}</StyledTableCell>
                <StyledTableCell>{animal.morph}</StyledTableCell>
                <StyledTableCell>{animal.description}</StyledTableCell>
                <StyledTableCell>{animal.price}</StyledTableCell>
                <StyledTableCell>{animal.age}</StyledTableCell>
                <StyledTableCell>{animal.gender}</StyledTableCell>
                <StyledTableCell>{animal.available}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`http://localhost:3000/api/animals`);
  const animals = await res.json();

  return {
    props: {
      animals,
    },
  };
};