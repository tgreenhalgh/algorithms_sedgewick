class QuickFindUF {
  constructor(N) {
    this.N = N;
    this.id = [];
  }

  QuickFindUF() {
    for (let i = 0; i < this.N; i++) {
      this.id[i] = i;
    }

    return this.id;
  }

  connected(p, q) {
    return this.id[p] == this.id[q];
  }

  union(p, q) {
    if (this.id[p] == this.id[q]) return;
    const oldValue = this.id[p];
    const newValue = this.id[q];

    for (let i = 0; i < this.N; i++) {
      if (this.id[i] == oldValue) this.id[i] = newValue;
    }

    return this.id;
  }
}

let UF = new QuickFindUF(5);
console.log('id[]', UF.QuickFindUF());
console.log(UF.connected(2, 3));
console.log(UF.union(2, 3));
console.log(UF.connected(2, 3));

module.exports = {
  QuickFindUF,
};
