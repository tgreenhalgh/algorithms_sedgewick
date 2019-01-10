# Improvement 1: weighting

## Weighted quick-union

- Modify quick-union to avoid tall trees
- Keep track of the size of each tree
- Balance by linking root of smaller tree to root of larger tree

---

Data Structure

- integer array `id[]` of size N
- maintain an extra array `sz[i]`
  - this counts the number of objects in the tree rooted at `i`
- interpretation: `id[i]` is parent of i
- Root of `i` is `id[id[id[...id[i]...]]]`

Find

- find (connected): check if p and q have the same root

Union

- to merge components containing p and q, link the root of the smaller tree to the larger tree
- update the `sz[]` array

```java
int i = root(p);
int j = root(q);
if (sq[i] < sz[j]) { id[i] = j; sz[j] += sz[i]; }
else               { id[j] = i; sz[i] += sz[j]; }
```

---

## Analysis

Running time

- Find: takes time proportional to depth of `p` and `q`
- Union: takes constant time, given roots

Proposition: Depth of any node `x` is at most `lg N`<sup>1</sup>
Proof: The depth of `x` increases by 1 when T<sub>1</sub> containing `x` is merged into another tree T<sub>2</sub>.
- the size of the tree containing `x` at least doubles because |T<sub>2</sub>| ≥ |T<sub>1</sub>|
- Size of tree containing `x` can double at most `lg N` times because if you start with 1 and double `lg N` times you get `N` and there are only N nodes in the tree.

---


|  algorithm  | initialize |       union        | connected |
| :---------: | :--------: | :----------------: | :-------: |
| quick-find  |     N      |         N          |     1     |
| quick-union |     N      |   N<sup>2</sup>    |     N     |
| weighted QU |     N      | `lg N`<sup>2</sup> |  `lg N`   |

<br>

(1) `lg` is base-2 logarithm
<br>
(2) includes cost of finding roots