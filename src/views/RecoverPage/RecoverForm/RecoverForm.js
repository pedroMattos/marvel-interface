import FormSubmitButton from "../../../components/Buttons/FormSubmitButton";
import TextField from "../../../components/FormFields/TextField";
import { FormContainer, FormTitle, InfoTextForm } from "../../forms.styles";

export default function RecoverForm() {
  return (
    <FormContainer>
    <FormTitle $highLightText=".">Recuperar senha</FormTitle>
    <InfoTextForm>
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link
        com as instruções para você redefinir a sua senha.
      </InfoTextForm>
    <TextField placeholder={'Informe seu email'} type="email" endAdornment={'@'} />
    <FormSubmitButton text={'enviar link'} isDisabled />
  </FormContainer>
  )
}