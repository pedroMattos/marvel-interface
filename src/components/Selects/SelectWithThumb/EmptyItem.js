import UserIcon from "../../Icons/UserIcon";
import { EmptyListItem } from "./styles";

export default function EmptyItem() {
  return (<EmptyListItem><UserIcon width={20} height={20} /> Selecione um agente</EmptyListItem>)
}