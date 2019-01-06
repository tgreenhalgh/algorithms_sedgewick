class QuickFindUFLazy {
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

  // find item's root
  root(i) {
    while (i != this.id[i]) i = this.id[i];
    return i;
  }

  // connected if p & q have same root
  connected(p, q) {
    return this.root(p) == this.root(q);
  }

  // union: set the id of p's root to the id of q's root
  union(p, q) {}
}

module.exports = {
  QuickFindUFLazy,
};
