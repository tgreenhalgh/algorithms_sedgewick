# Union-Find problem

## Quick-find (lazy approach)

Data structure:

- **integer array `id[]` of size N**
- **interpretation: `id[i]` is parent of i**
- **Root of `i` is `id[id[id[...id[i]...]]]`**
  
<br>

  ![graph](./lazyunion1.png)

  |        | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
  | ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | `id[]` | 0   | 1   | 9   | 4   | 9   | 6   | 6   | 7   | 8   | 9   |

  root of 3 is 9, root of 5 is 6

- **find (connected): check if p and q have the same root**

`id[3] = 9` and `id[5] = 6` so 3 and 5 are not connected

<br>

- **union: to merge components containing p and q, set the `id` of `p`'s root to the id of `q`'s root**
  
![graph](./lazyunion2.png)

|        | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9                   |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | ------------------- |
| `id[]` | 0   | 1   | 9   | 4   | 9   | 6   | 6   | 7   | 8   | <font color="red">6 |

after union of 3 and 5 because `root of 3 is 9` and `root of 5 is 6` so set the `id` of `p`'s root, 9, to the `id` of `q`'s root, 6