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

```java
public static void main(String[] args)
{
  int N = StdIn.readInt();
  UF uf = new UF(N);
  while (!stdIn.isEmpty())
  {
    int p = StdIn.readInt();
    int q = StdIn.readInt();
    if (!uf.connected(p, q))
    {
      uf.union(p, q);
      StdOut.println(p + " " + q);
    }
  }
}
```

---

## Quick-find (eager approach)

Data structure:

- **integer array `id[]` of size N**
- **interpretation: p and q are connected iff they have the same id**

|        | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `id[]` | 0   | 1   | 1   | 8   | 8   | 0   | 0   | 1   | 8   | 8   |

0, 5, 6 are connected, 1,2,7 are connected and 3, 4, 8, 9 are connected

- **find: check if p and q have the same id**

|        | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `id[]` | 0   | 1   | 1   | 8   | 8   | 0   | 0   | 1   | 8   | 8   |

`id[6] = 0` and `id[1] = 1` so 6 and 1 are not connected

- **union: to merge components containing p and q, change all entries whose id equals `id[p]` to `id[q]`**

|        | 0                   | 1   | 2   | 3   | 4   | 5                   | 6                   | 7   | 8   | 9   |
| ------ | ------------------- | --- | --- | --- | --- | ------------------- | ------------------- | --- | --- | --- |
| `id[]` | <font color="red">1 | 1   | 1   | 8   | 8   | <font color="red">1 | <font color="red">1 | 1   | 8   | 8   |

after union of 6 and 1 because `id[1] = 1` and `id[6] = 0` so all `id[x] = 0` get changed to 1
