export class AngularMaterialPagination {
  total: number = 0;
  pageSize: number = 10;
  pageNo: number = 0;
  pageSizeOptions: number[] = [10, 30, 50];

  onPaginationEvent(event: any): void {

  }
}

export class SortOptions {
  options: SortOption[];

  constructor(options: SortOption[]) {
    this.options = options;
  }

  doSort(option: SortOption): void {
    if (option == null) {
      option = this.options.find(o => o.active) || this.options[0];
    }

    this.options.forEach(o => o.active = o == option);
    this.onSort(option);
  }

  onSort(option: SortOption): void {

  }
}

export interface SortOption {
  label: string;
  value: string;
  active?: boolean;
}
