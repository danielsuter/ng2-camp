import {Component, Input, HostListener, HostBinding} from 'angular2/core';

export class Sorter<T> {

  private reverse: boolean = false;

  public setSorted(compareFunction: (a: T, b: T) => number): void {
    if (this.isSorted(compareFunction)) {
      this.reverse = !this.reverse;
    } else {
      this.reverse = false;
    }
    this.compareFunction = compareFunction;
  }

  public isSorted(compareFunction: (a: T, b: T) => number): boolean {
    return this.compareFunction === compareFunction;
  }

  public sort(toSort: T[]): T[] {
    if (toSort === undefined) {
      return [];
    }
    let sorted: T[] = toSort.sort(this.compareFunction);
    if (this.reverse) {
      sorted = sorted.reverse();
    }
    return sorted;
  }

  public isReverse(): boolean {
    return this.reverse;
  }

  private compareFunction: (a: T, b: T) => number = (a: T, b: T) => 0;
}

@Component({
  selector: 'sortable-header',
  providers: [],
  template: `
{{name}}<i class="tiny material-icons" [ngClass]="{'hidden-icon': !sorter?.isSorted(compareFunction)}">
    {{sorter?.isReverse()?'arrow_upward':'arrow_downward'}}
</i>
`
})
export class SortableHeaderComponent<T> {

  @Input()
  name: string;

  @Input()
  sorter: Sorter<T>;

  @Input()
  compareFunction: (a: T, b: T) => number;

  @HostBinding('class.clickable') get clickable() {
    return this.sorter !== undefined;
  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    if (this.sorter !== undefined) {
      this.sorter.setSorted(this.compareFunction);
    }
  }
}
