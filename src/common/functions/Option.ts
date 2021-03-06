export type Option<T> = Some<T> | None

export class Some<T> {
  private value:T
  constructor(value: T) {
    this.value = value
  }

  get v() {
    return this.value
  }
}

export class None {}