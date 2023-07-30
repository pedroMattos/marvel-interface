import LoginIcon from "../../Icons/LoginIcon";
import { CustomButton } from "./styles";

export default function FormSubmitButton({ text, onClick, isDisabled = false, hasIcon = false }) {
  return (
    <CustomButton variant="contained"
    disabled={isDisabled}
    onClick={onClick}
    endIcon={hasIcon && <LoginIcon width={13} height={13} />}>{text}</CustomButton>
  )
}