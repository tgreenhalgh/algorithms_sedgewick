# Cost model

|  algorithm  | initialize |     union     | find  |
| :---------: | :--------: | :-----------: | :---: |
| quick-find  |     N      |       N       |   1   |
| quick-union |     N      | N<sup>1</sup> |   N   |

1. includes cost of finding roots

Quick-find defect

- Union too expensive (N array accesses)
- Trees are flat, but too expensive to keep flat

Quick-union defect

- Trees can get tall
- Find too expensive (could be N array accesses)