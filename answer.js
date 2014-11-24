Life = {
    /*
     The rules
     https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
     https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%B7%D0%BD%D1%8C_(%D0%B8%D0%B3%D1%80%D0%B0)
     1. Any live cell with less than two live neighbours dies, as if caused by under-population.
     2. Any live cell with two or three live neighbours lives on to the next generation.
     3. Any live cell with more than three live neighbours dies, as if by overcrowding.
     4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
     */
    step: function(map, iteration) {
        return map.map(function(row, i) {
            return row.map(function(cell, j) {
                var count = 0;
                [-1, 0, 1].forEach(function(offsetI) {
                    [-1, 0, 1].forEach(function(offsetJ) {
                        if (offsetI == 0 && offsetJ == 0) return;
                        if (map[Math.abs((i + offsetI) % map.length)]
                                [Math.abs((j + offsetJ) % map.length)]) {
                            count++;
                        }
                    });
                });

                if (cell && count < 2) {
                    return false;
                }
                if (cell && (count == 2 || count == 3)) {
                    return true;
                }
                if (cell && count > 3) {
                    return false;
                }
                if (!cell && count == 3) {
                    return true;
                }
                return cell;
            });
        });
    }
};
