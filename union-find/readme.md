# Union-Find problem

A set of algorithms for solving the so-called dynamic connectivity problem

Given a set of N objects

- union command: connect two objects
- find connected query: is there a path connecting two objects

Modeling connections
"is connected to" is an equivalence relation

- reflexive: p is connected to p
- symmetric: if p is connected to q, q is connected to p
- transitive: if p is connected to q and q is connected to r, p is connected to r

Implement the operations

- find query: check if two objects are in the same component
- union command: replaced components containing two objects with their union
  - e.g. `{0} {1 4 5} {2 3 6 7}` &nbsp; `union(2, 5) ->` &nbsp; `{0} {1 2 3 4 5 6 7}`

## Union-Find datatype (API)

Goal: define efficient data structure for union-find

- Number of objects N can be huge
- Number of operations M can be huge
- Find and union can be intermixed

<br>

- UF(N)
  - initialize union-find data structure with N objects (0 - N-1)
- void union(int p, int q)
  - adds connection between p and q
- boolean Connected(int p, int q)
  - return t/f if p & q in same component
- int find(int p)
  - component identifiers for p (0 - N-1)
- int count()
  - returns number of components

---

## Dynamic-connectivity client

- read in number of objects N from standard input
- repeat
  - read in pair of integers from standard input
  - if they are not yet connected, connect them and print out pair
