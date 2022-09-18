import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { Fast } from "../types/pokemons.types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OverridableStringUnion } from "@mui/types";

type Props = {
  attacks: Fast[];
  attackType: string;
};
export interface ChipPropsColorOverrides {}
type NewChipType = OverridableStringUnion<
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning",
  ChipPropsColorOverrides
>;
const AttackTable: React.FC<Props> = ({ attacks, attackType }) => {
  return (
    <>
      <Typography fontWeight={"bold"} gutterBottom variant="h5" component="div">
        Attack {attackType}
      </Typography>
      <Box sx={{ marginBottom: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead sx={{ background: "#fed883" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell>Damage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attacks.map((attack) => (
                <TableRow key={attack.name}>
                  <TableCell component="th" scope="row">
                    {attack.name}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      key={attack.type}
                      label={attack.type}
                      sx={{ marginRight: 0.5 }}
                      color={attack.type as unknown as NewChipType}
                    />
                  </TableCell>
                  <TableCell>{attack.damage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AttackTable;
