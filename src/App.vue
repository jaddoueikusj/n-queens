<template>
  <div class="main-container">
    <h1>N-Queens</h1>
    <h3>Solved using the backtracking algorithm</h3>
    <div class="sub-container">
      <div
        v-for="(i, index1) in n"
        :key="i"
        class="col"
      >
        <div
          v-for="(j, index2) in n"
          :key="j"
          class="square"
        >
          <div v-if="isRun">
            <img v-if="board[index1][index2] === 1" src="./assets/logo.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="select"><span>Choose N: </span>
      <select v-model="n" @change="clear">
        <option
          v-for="k in options"
          :key="k"
          :value="k+3"
        >
          {{k + 3}}
        </option>
      </select>
    </div>
    <button @click="solveNQ">Run</button>
    <button @click="clear">Clear</button>
    <p v-if="options === 6">Use a bigger screen for up to a 16x16 board.</p>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      n: 4,
      board: {},
      isRun: false
    }
  },

  computed: {
    options() {
      return window.matchMedia('(max-width: 600px)').matches ? 6 : 13;
    }
  },

  methods: {
    isSafe(board, row, col)
    {
        let i, j;
  
        /* Check this row on left side */
        for (i = 0; i < col; i++)
            if (board[row][i] == 1)
                return false;
  
        /* Check upper diagonal on left side */
        for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] == 1)
                return false;
  
        /* Check lower diagonal on left side */
        for (i = row, j = col; j >= 0 && i < this.n; i++, j--)
            if (board[i][j] == 1)
                return false;
  
        return true;
    },

    solveNQUtil(board, col)
    {
        /* base case: If all queens are placed
           then return true */
        if (col >= this.n)
            return true;
  
         /*Consider this column and try placing
           this queen in all rows one by one*/ 
        for (let i = 0; i < this.n; i++) {
            /* Check if the queen can be placed on
               board[i][col] */
            if (this.isSafe(board, i, col)) {
                /* Place this queen in board[i][col] */
                board[i][col] = 1;
  
                /* recur to place rest of the queens */
                if (this.solveNQUtil(board, col + 1) == true)
                    return true;
  
                /* If placing queen in board[i][col]
                   doesn't lead to a solution then
                   remove queen from board[i][col] */
                board[i][col] = 0; // BACKTRACK
            }
        }
  
        /* If the queen can not be placed in any row in
           this colum col, then return false */
        return false;
    },

    /* This function solves the N Queen problem using
       Backtracking.  It mainly uses solveNQUtil () to
       solve the problem. It returns false if queens
       cannot be placed, otherwise, return true and
       prints placement of queens in the form of 1s.
       Please note that there may be more than one
       solutions, this function prints one of the
       feasible solutions.*/
    solveNQ()
    {
      const board = {}
      for(let i = 0; i < this.n; i++) {
        board[i] = {};
        for(let j = 0; j < this.n; j++) {
          board[i][j] = 0;
        }
      }
  
      if (this.solveNQUtil(board, 0) == false) {
          console.log("Solution does not exist");
          return false;
      }

      this.board = board;
      this.isRun = true;
      return true;
    },

    clear() {
      this.board = {};
      this.isRun = false;
    }
  }
}
</script>

<style>
@font-face {
    font-family: 'euclid';
    src: url("./assets/fonts/EuclidCircularB-Regular.woff") format("woff"),
    url("./assets/fonts/EuclidCircularB-Regular.ttf")  format("truetype");
    font-style: normal;
    font-weight: 400;
}

*{
  box-sizing: border-box;
  font-family: euclid;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 97vh;
  flex-direction: column;
  padding: 20%;
}

.sub-container {
  max-width: 80vh;
  display: flex;
  flex-wrap: nowrap;
}

.col {
  display: inline-flex;
  flex-direction: column;
  max-height: 80vh;
  margin: 0 2px;
}

.square {
  background-color: black;
  height: 25px;
  width: 25px;
  margin: 2px;
}

.select {
  margin: 7px 0;
}

h1{
  margin: 0;
}

button {
  margin: 4px;
  padding: 4px 8px;
  border: none;
  border-radius: 3px;
  outline: none;
}

button:hover {
  outline: 2px solid blue;
}
</style>
