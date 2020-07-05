# [Is Thue Morse](https://www.codewars.com/kata/simple-fun-number-106-is-thue-morse/train/javascript) (Incomplete)

Given a sequence of 0s and 1s, determine if it is a prefix of Thue-Morse sequence.

The infinite Thue-Morse sequence is obtained by first taking a sequence containing a single 0 and then repeatedly concatenating the current sequence with its binary complement.

A binary complement of a sequence X is a sequence Y of the same length such that the sum of elements X_i and Y_i on the same positions is equal to 1 for each i.

Thus the first few iterations to obtain Thue-Morse sequence are:

```
0
0 1
0 1 1 0
0 1 1 0 1 0 0 1
```

#### Examples

For `seq=[0, 1, 1, 0, 1]`, the result should be `true`.

For `seq=[0, 1, 0, 0]`, the result should be `false`.
