import { IconButton } from "@mui/material";
import TextField from "../../../components/FormFields/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import FormSubmitButton from "../../../components/Buttons/FormSubmitButton";
import { Actions } from "./LoginForm.styles";
import HelpRecover from "../../../components/Buttons/HelpRecover";
import { FormContainer, FormTitle, InfoTextForm } from "../../forms.styles";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  return (
    <FormContainer>
      <FormTitle $highLightText=".">Bem-vindo</FormTitle>
      <InfoTextForm>Informe as suas credenciais de acesso ao portal</InfoTextForm>
      <TextField placeholder={'Informe seu email'} type="email" endAdornment={'@'} />
      <TextField placeholder={'Informe sua senha'} type={showPassword ? 'text' : 'password'} endAdornment={
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
      } />
      <FormSubmitButton />
      <Actions>
        <HelpRecover />
      </Actions>
    </FormContainer>
  )
}