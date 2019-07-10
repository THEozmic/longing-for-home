<template>
  <div class="pillars">
    <button class="pillar" style="background-color: #afa89d" @click="() => localGo(6)">
      <div>Language</div>
    </button>
    <button class="pillar" style="background-color: #b96d60" @click="() => localGo(17)">
      <div>Family</div>
    </button>
    <button class="pillar" style="background-color: #e0a69a" @click="() => localGo(27)">
      <div>Religion</div>
    </button>
  </div>
</template>

<script>
export default {
  name: "Pillars",
  data() {
    return {};
  },
  methods: {
    localGo(where) {
      this.$emit("go", where);
    }
  }
};
</script>
