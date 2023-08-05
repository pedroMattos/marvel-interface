import { InputAdornment } from "@mui/material";
import { CustomTextField } from "./styles";

export default function TextField({ endAdornment, placeholder, type = 'text', onChange, error, errorText }) {
  return <CustomTextField
    type={type}
    helperText={errorText}
    onChange={onChange}
    placeholder={placeholder}
    variant="outlined"
    error={error}
    InputProps={{
    endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>
  }} />
}