<template>
  <section class="component data-form">
    <el-form ref="data-form" :inline="true" :rules="rules" label-position="left" :model="model">
      <div class="row" style="flex-wrap:nowrap;width:100%;">
        <div class="row middle-span col-span">
          <slot name="default-input"></slot>
          <slot name="collapse-input" v-if="showCollapseContext"></slot>
          <el-button type="primary" icon="el-icon-search" v-if="!hiddenSearch" @click="submitForm" style="vertical-align:top">搜索</el-button>
          <el-button v-if="showResetButton" icon="el-icon-refresh" @click="resetForm" style="vertical-align:top">重置</el-button>
          <!-- <div :style="{width:buttonWrap?'100%':'10px'}"></div> -->
          <slot name="default-button"></slot>
          <slot name="collapse-button" v-if="showCollapseContext"></slot>
          <div class="col-span" v-show="showCollapseContext">
          </div>
          <slot name="append">
          </slot>
        </div>
        <div v-if="showCollapseIcon" class="row middle-span center-span collapse-icon" style="flex-basis:40px;" @click="changeCollapseHandle">
          <el-tooltip effect="dark" :content="showCollapseContext ? '展开':'收起'" placement="top-start">
            <el-button type="primary" :icon="showCollapseContext ? 'el-icon-arrow-up':'el-icon-arrow-down'" circle></el-button>
          </el-tooltip>
        </div>
      </div>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'Form',
  props: {
    rules: {
      type: Function
    },
    model: {
      type: Object,
      default: function(){}
    },
    buttonWrap: {
      type: Boolean,
      default: false
    },
    hiddenSearch: {
      type: Boolean,
      default: false
    },
    hiddenReset: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showCollapseIcon: false,
      showResetButton: false,
      showCollapseContext: false,
      showAppendContext: false
    }
  },
  /**
   * 初始化
   */
  mounted() {
    if (this.$slots["collapse-input"] || this.$slots["collapse-button"]) {
      this.showCollapseIcon = true;
    }
    if (this.$slots["collapse-input"] || this.$slots["default-input"]) {
      this.showResetButton = !this.hiddenReset && true;
    }
    if (this.$slots["append"]) {
      this.showAppendContext = true;
    }
  },
  computed: {
  },
  methods: {
    /**
   * 提交输入表单
   */
    submitForm() {
      let dataForm = this.$refs["data-form"];
      dataForm.validate(success => {
        if (!success) {
          return;
        }
        if (this.page) {
          this.page.reset();
        }
        this.$emit('onSearch')
      });
    },
    /**
     * 重置输入表单
     */
    resetForm() {
      let dataForm = this.$refs["data-form"];
      dataForm.resetFields();
      this.$emit('resetForm')
    },
    /**
     * 折叠状态改变
     */
    changeCollapseHandle() {
      if (this.showCollapseIcon) {
        this.showCollapseContext = !this.showCollapseContext
      }
    }
  }
}
</script>

<style scoped lang="scss" >
.component.data-form {
  padding: 20px 15px 0;
  margin-bottom: 20px;
}
.arrow-down {
  transform: rotate(0deg);
  transition: transform ease-in 0.2s;
}

.arrow-up {
  transform: rotate(180deg);
  transition: transform ease-in 0.2s;
}

.collapse-icon {
  position: absolute;
  right: 38px;
  top: 10px;
  height: 30px;
}
.component.data-form {
  .el-radio-group {
    padding-left: 10px;
  }
}
</style>
