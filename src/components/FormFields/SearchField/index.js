import { InputAdornment } from "@mui/material";
import { CustomTextField } from "./styles";

export default function SearchField({ startAdornment }) {
  return <CustomTextField type="text" placeholder="Busque um agente" variant="outlined" InputProps={{
    startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>
  }} />
}