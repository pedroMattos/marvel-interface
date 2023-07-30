import HelpShieldIcon from "../../Icons/HelpShieldIcon";
import { CustomButtom } from "./styles";

export default function HelpRecover() {
  return <CustomButtom size="small" startIcon={<HelpShieldIcon width={14} height={14} />}>Esqueceu a senha?</CustomButtom>
}