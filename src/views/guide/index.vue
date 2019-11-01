<template>
  <div class="app-container">
    <p class="warn-content">
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。
    </p>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">打开引导</el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './defineSteps'

export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
