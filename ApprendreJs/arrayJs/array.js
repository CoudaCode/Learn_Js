class array {
  item = [];
  constructor(...args) {
    this.item = [...args];
  }
  /**
   *
   * @param {number} index
   */
  at(index) {
    if (index >= 0) return this.item[index];
    else return this.item[this.length() + index];
  }
  /**
   * @description return la taille du tableau
   */
  length() {
    let count = 0;
    while (this.item[count]) {
      count++;
    }
    return count;
  }
  /**
   *
   * @param  {any[]} par
   */
  concat(...par) {
    let count = this.length();

    let tab = [...par];
    let newtab = [...this.item];
    for (let idx = 0; idx < tab.length; idx++){
      let elem = tab[idx];
      for (let dex = 0; dex < elem.length; dex++) {
        newtab[count] = elem[dex];
      }
    }
    return newtab;
  }
  /**
   *
   * @param  {any[]} psh
   */
  push(...psh) {
      for (let idx = 0; idx < psh.length; idx++) {
         this.item[this.length()] = psh[idx]
      }
      return this.length()
  }
}

let demo = new array("diara", "madou", "couda").push('ddd');

console.log(demo);
