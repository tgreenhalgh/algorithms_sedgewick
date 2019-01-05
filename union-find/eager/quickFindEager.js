class QuickFindUFEager {
  constructor(N) {
    this.N = N;
    this.id = [];
  }

  // inits the data structure
  QuickFindUF() {
    for (let i = 0; i < this.N; i++) {
      this.id[i] = i;
    }

    return this.id;
  }

  // are connected if p & q have the same id
  connected(p, q) {
    return this.id[p] == this.id[q];
  }

  // union: change all entries whose id equals id[p] to id[q]
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

module.exports = {
  QuickFindUFEager,
};
