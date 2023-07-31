import { PaginationItem, Stack } from "@mui/material";
import { BackButton, CustomPagination } from "./PaginationSelector.styles";
import BackArrowPagination from '@mui/icons-material/ArrowBack'

export default function PaginationSelector({ count = 1, onChange }) {
  const Back = () => <BackButton startIcon={<BackArrowPagination />}>Anterior</BackButton>
  const Next = () => <BackButton $isNext endIcon={<BackArrowPagination />}>Próxima</BackButton>
  return (
    <Stack spacing={0}>
      <CustomPagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={onChange}
        renderItem={(item) => (
          <PaginationItem slots={{ previous: Back, next: Next }} {...item} />
        )}
      />
    </Stack>
  );
}