import { useNavigate } from "react-router-dom";
import HelpShieldIcon from "../../Icons/HelpShieldIcon";
import { CustomButtom } from "./styles";

export default function HelpRecover() {
  const navigate = useNavigate()

  const handleHelpRecover = () => navigate('/recover-account')
  return <CustomButtom onClick={handleHelpRecover} size="small" startIcon={<HelpShieldIcon width={14} height={14} />}>Esqueceu a senha?</CustomButtom>
}