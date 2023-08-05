import { Alert, IconButton, Snackbar } from "@mui/material";
import TextField from "../../../components/FormFields/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import FormSubmitButton from "../../../components/Buttons/FormSubmitButton";
import { Actions } from "./LoginForm.styles";
import HelpRecover from "../../../components/Buttons/HelpRecover";
import { FormContainer, FormTitle, InfoTextForm } from "../../forms.styles";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export default function LoginForm() {
  const [error, setError] = useState(null)
  const { login } = useLogin()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const navigate = useNavigate()
  const handleClick = () => {
    login(email, password).then((loginResponse) => {
      if (!loginResponse.hasError) navigate('/select-agent')
      setError(loginResponse.error)
    })
  }

  const handleChange = (event, setState) => setState(event.target.value)
  return (
    <FormContainer>
      <FormTitle $highLightText=".">Bem-vindo</FormTitle>
      <InfoTextForm>Informe as suas credenciais de acesso ao portal</InfoTextForm>
      <TextField
        error={Boolean(error)}
        errorText={error}
        onChange={(event) => handleChange(event, setEmail)}
        placeholder={'Informe seu email'}
        type="email" endAdornment={'@'} />
      <TextField
        error={Boolean(error)}
        errorText={error}
        onChange={(event) => handleChange(event, setPassword)}
        placeholder={'Informe sua senha'}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
      } />
      <FormSubmitButton onClick={handleClick} hasIcon text={'entrar'} />
      <Actions>
        <HelpRecover />
      </Actions>
    </FormContainer>
  )
}