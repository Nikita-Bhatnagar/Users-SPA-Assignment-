import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Table.css";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9FAFB",
    color: "#475467",
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 600,
    padding: "12px 24px",
    fontFamily: "Inter, sans-serif",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#475467",
    fontFamily: "Inter, sans-serif",
    padding: "16px 24px",
  },
}));

export default function TableComponent({ data }) {
  const matches = useMediaQuery("(max-height:700px)");
  return (
    <TableContainer
      component={Paper}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: 404,
        width: "min(654px, calc(100vw - 40px))",
        position: "absolute",
        marginBottom: "30px",
        top: matches ? "200px" : "250px",
      }}
    >
      <Table
        stickyHeader
        aria-label="customized table"
        sx={{
          border: "1px solid #EAECF0",
          boxShadow:
            "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
          borderRadius: "8px",
          height: data?.length === 0 ? "404px" : "max-content",
        }}
      >
        <TableHead sx={{ borderBottom: "1px solid #EAECF0" }}>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Age</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{ overflowY: "scroll", maxHeight: 390, height: "max-content" }}
        >
          {data?.map((user) => (
            <TableRow key={user.id} sx={{ maxHeight: "100px" }}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img className="profile-img" src={user.image} alt="" />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#101828",
                  }}
                >{`${user.firstName} ${user.lastName}`}</span>
              </StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">{user.age}</StyledTableCell>
              <StyledTableCell
                align="left"
                sx={{ textTransform: "capitalize" }}
              >
                {user.gender}
              </StyledTableCell>
            </TableRow>
          ))}
          {data?.length === 0 && (
            <TableRow>
              <StyledTableCell
                colSpan={4}
                rowSpan={6}
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                <span>No matching records found!</span>
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
