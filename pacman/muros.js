window.muros = function(distancia) {
  let levantarMuros = [
    // Outer walls.
    [[0, 0], 600, 10],
    [[590, 0], 10, 600],
    [[0, 590], 600, 10],
    [[0, 0], 10, 600],


    // Ghost wall.
    // [[pillDistance * 6, pillDistance * 6], 10 + pillDistance * 2, 10],
    [[distancia * 6, distancia * 7], 10 + distancia * 2, 10],

    [[distancia * 6, distancia * 6], 10, 10 + distancia * 1],
    [[distancia * 8, distancia * 6], 10, 10 + distancia],

    // Other walls.

    // Upper-left.
    [[distancia * 5 , distancia], 10, 10 + distancia],
    [[distancia * 5, distancia * 3], 10, 10 + distancia * 4],
    [[distancia * 4, distancia], 10, 10 + distancia],
    [[distancia * 4, distancia * 5], 10, 10 + distancia],
    [[distancia * 1, distancia], 10 + distancia * 2, 10],
    [[distancia * 1, distancia * 2], 10 +distancia * 2, 10],
    [[distancia * 2, distancia * 3], 10 + distancia * 3, 10],
    [[distancia * 0, distancia * 3], 10 + distancia, 10],
    [[distancia * 3, distancia * 4], 10 +distancia, 10],
    [[distancia * 1, distancia * 4], 10 + distancia, 10],
    [[distancia * 1, distancia * 5], 10 + distancia, 10],
    [[distancia * 1, distancia * 6], 10 + distancia * 2, 10],
    [[distancia * 3, distancia * 5], 10 + distancia, 10],
    [[distancia * 3, distancia * 7], 10 + distancia, 10],
    [[distancia * 1, distancia * 7], 10 + distancia, 10],
    [[distancia * 1, distancia * 8], 10 + distancia * 8, 10],

    [[distancia * 6, distancia * 2], 10 + distancia * 2, 10],
    [[distancia * 6, distancia * 5], 10 + distancia * 2, 10],
    [[distancia * 6, distancia * 3], 10 + distancia * 2, 10],
    [[distancia * 6, distancia * 4], 10 + distancia * 2, 10],
    [[distancia * 6, distancia * 1], 10 + distancia * 2, 10],

    // Upper-right.
    [[distancia * 9, distancia], 10, 10 + distancia],
    [[distancia * 9, distancia * 3], 10, 10 + distancia * 4],
    [[distancia * 10, distancia], 10, 10 + distancia],
    [[distancia * 10, distancia * 5], 10, 10 + distancia],
    [[distancia * 11, distancia], 10 + distancia * 2, 10],
    [[distancia * 11, distancia * 2], 10 + distancia * 2, 10],
    [[distancia * 9, distancia * 3], 10 + distancia * 3, 10],
    [[distancia * 13, distancia * 3], 10 + distancia, 10],
    [[distancia * 10, distancia * 4], 10 +distancia , 10],
    [[distancia * 12, distancia * 4], 10 + distancia, 10],
    [[ distancia * 12,  distancia * 5], 10 + distancia, 10],
    [[ distancia * 11, distancia * 6], 10 + distancia * 2, 10],
    [[distancia * 10, distancia * 5], 10 + distancia, 10],
    [[ distancia * 10,  distancia * 7], 10 + distancia , 10],
    [[ distancia * 12, distancia  * 7], 10 + distancia, 10],
    [[ distancia * 9, distancia * 8], 10 + distancia * 4, 10],

    // Lower left.
    [[distancia * 4, distancia * 9], 10, 10 + distancia * 3],
    [[distancia * 4, distancia * 13], 10 + distancia, 10],
    [[distancia * 3, distancia * 9], 10, 10 + distancia * 2],
    [[distancia * 3, distancia * 12], 10, 10 + distancia],
    [[distancia * 1, distancia  * 9], 10 + distancia, 10],
    [[distancia * 1, distancia * 10], 10 + distancia, 10],
    [[distancia * 1, distancia * 11], 10 + distancia, 10 + distancia],
    [[distancia * 1, distancia * 13], 10 + distancia, 10],
    [[distancia * 5, distancia * 9], 10 + distancia * 4, 10],
    [[distancia * 5, distancia * 10], 10 + distancia * 4, 10],
    [[distancia * 5, distancia * 11], 10 + distancia * 4, 10],
    [[distancia * 5, distancia * 12], 10 + distancia * 4, 10],

    // Lower right.
    [[distancia * 10, distancia * 9], 10, 10 + distancia * 3],
    [[distancia * 5, distancia * 13], 10 + distancia * 5, 10],
    [[distancia * 11, distancia * 9], 10, 10 + distancia * 2],
    [[distancia * 11, distancia * 12], 10, 10 + distancia],
    [[distancia * 12, distancia * 9], 10 + distancia, 10],
    [[distancia * 12, distancia * 10], 10 + distancia, 10],
    [[distancia  * 12, distancia * 11], 10 + distancia , 10 + distancia ],
    [[distancia  * 12, distancia  * 13], 10 + distancia , 10],
  ];
  return levantarMuros;
}
