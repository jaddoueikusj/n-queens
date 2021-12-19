<template>
  <div class="main-container">
    <h1>N-Queens</h1>
    <div>
      <div
        v-for="i in n"
        :key="i"
        class="col"
      >
        <div
          v-for="j in n"
          :key="j"
          class="square"
        >
        </div>
      </div>
    </div>
    <div class="select"> Choose N:
      <select v-model="n">
        <option
          v-for="k in 13"
          :key="k"
          :value="k+2"
        >
          {{k + 2}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      n: 3,
      n_array: [...Array(this.n).keys()]
    }
  },

  created() {
    console.log(this.n_array)
  },

  components: {
  }
}
</script>

<style>
*{
  box-sizing: border-box;
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

.col {
  display: inline-flex;
  flex-direction: column;
  max-width: 80px;
}

.square {
  background-color: black;
  min-height: 40px;
  min-width: 40px;
  margin: 2px;
}

.select {
  margin-top: 5px;
}
</style>
