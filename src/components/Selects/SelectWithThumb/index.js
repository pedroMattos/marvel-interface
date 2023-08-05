import { CustomItem, CustomSelect } from "./styles";
import CheckIcon from '@mui/icons-material/Check'
import EmptyItem from "./EmptyItem";

export default function SelectWithThumb({ hasThumb = true, listData = [], setSelectedAgent, selectedAgent }) {
  const handleChangeSelected = (event) => setSelectedAgent(event.target.value)
  return (
    <CustomSelect value={selectedAgent}
      displayEmpty
      renderValue={(selected) => {
        console.log(selected)
        if (!selected) {
          return (<EmptyItem />)
        }

        return (
          <CustomItem $withoutPadding key={selected.id} value={selected}>
            <img src={`${selected.thumbnail.path}.${selected.thumbnail.extension}`} alt={selected.name} />
            <p>{selected.name}</p>
          </CustomItem>
        )
      }}
      onChange={handleChangeSelected}>
      {listData?.map((data) =>
        (
          <CustomItem key={data.id} value={data}>
            <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name} />
            <p>{data.name}</p>
            {selectedAgent?.id === data.id && <CheckIcon />}
          </CustomItem>
        ))}
    </CustomSelect>
  )
}