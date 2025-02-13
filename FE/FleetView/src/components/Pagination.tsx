import { Pagination, PaginationItem, Box, Container,Typography } from "@mui/material";
import {MuiPaginationProps} from "../types/pagination"


const MuiPagination = ({ currentPage, totalPages, onPageChange }: MuiPaginationProps) => {
  return (
    <Container>
    <Box display="flex" justifyContent="center" mt={2}>
      <Pagination
        showFirstButton
        showLastButton
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        variant="outlined"
        shape="rounded"
        color="primary"
        renderItem={(item) => (
            <PaginationItem
            {...item}
            sx={{ display: item.type === "page" ? "none" : "inline-flex" }}
          />
        )}
      />
    </Box>
    <Box display="flex" justifyContent="center" mt={2}>
        <Typography>Page {currentPage} of {totalPages}</Typography></Box>
    </Container>
  );
};

export default MuiPagination;
