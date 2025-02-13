export interface MuiPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}