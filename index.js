class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
        this.items.push(item);
        this.length = this.items.length
        this.items.sort((a,b) => a-b);
  }

  get(pos) {
    for (let item of this.items) {
    if (this.items.indexOf(item) === pos) {
        return item
      } else {
        throw new Error('OutOfBounds');
      }
    }
  }

  max() {
    let highest = 0
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    for (let item of this.items) {
      if (item > highest) {
        highest = item
      }
    }
    return highest
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    return Math.min(...this.items)
  }

  sum() {
    let sumValues = 0
    for (let item of this.items) {
      sumValues += item
    }
    return sumValues
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    let sum = this.sum() 
    return sum / this.items.length

  }
}

let sortedList = new SortedList();


module.exports = SortedList;
