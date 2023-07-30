import { useNavigate } from "react-router-dom";
import FormSubmitButton from "../../../components/Buttons/FormSubmitButton";
import { FormContainer, FormTitle, InfoTextForm } from "../../forms.styles";

export default function GoBackSection() {
  const navigate = useNavigate()
  const handleClick = () => navigate('/login')
  return (
    <FormContainer>
      <FormTitle $highLightText=";)">Tudo certo</FormTitle>
      <InfoTextForm>
        Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
      </InfoTextForm>
      <br />
      <FormSubmitButton onClick={handleClick} text={'voltar para o login'} />
  </FormContainer>
  )
}