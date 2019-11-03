/*
*
* For solution in other languages:
https://www.hackerrank.com/challenges/ctci-array-left-rotation/forum?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
\*
*/

function rotateLeft(a, d) {
    const headIndex = d % a.length
    const head = a.splice(0, headIndex)
    a.push(...head)
    return a
}