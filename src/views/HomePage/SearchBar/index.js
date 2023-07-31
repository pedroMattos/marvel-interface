import SearchField from "../../../components/FormFields/SearchField";
import SearchIcon from "@mui/icons-material/Search"

export default function SearchBar({ onChange }) {
  return (
    <SearchField onChange={onChange} startAdornment={<SearchIcon />} />
  )
}