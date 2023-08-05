import { CustomButton } from "./styles";

export default function HomePageEnter({ onClick, disabled }) {
  return (
    <CustomButton disabled={disabled} variant="contained" onClick={onClick}>Entrar</CustomButton>
  )
}