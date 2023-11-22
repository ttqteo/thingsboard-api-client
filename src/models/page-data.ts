export interface PageData<T> {
  data: T[];
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
}
