import LoginIcon from "../../Icons/LoginIcon";
import { CustomButton } from "./styles";

export default function FormSubmitButton() {
  return (<CustomButton variant="contained" endIcon={<LoginIcon width={13} height={13} />}>entrar</CustomButton>)
}