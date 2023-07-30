import { CustomItem, CustomSelect } from "./styles";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check'
import EmptyItem from "./EmptyItem";

export default function SelectWithThumb({ hasThumb = true, listData = [] }) {
  const [selected, setSelected] = useState(null)
  const handleChangeSelected = (event) => setSelected(event.target.value)
  return (
    <CustomSelect value={selected}
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
            {selected?.id === data.id && <CheckIcon />}
          </CustomItem>
        ))}
    </CustomSelect>
  )
}