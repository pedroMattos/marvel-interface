import { InputAdornment } from "@mui/material";
import { CustomTextField } from "./styles";

export default function TextField({ endAdornment, placeholder, type = 'text' }) {
  return <CustomTextField type={type} id="field" placeholder={placeholder} variant="outlined" InputProps={{
    endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>
  }} />
}