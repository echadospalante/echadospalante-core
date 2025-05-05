export interface Pagination {
  skip: number;
  take: number;
}

export interface PaginatedBody<I> {
  total: number;
  items: I[];
}
