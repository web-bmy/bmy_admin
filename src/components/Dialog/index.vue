<template>
  <div class="dialog-commponent">
    <el-dialog
      :title="title"
      :width="width"
      :fullscreen="fullscreen"
      :top="top"
      :close-on-click-modal="clickCloseModal"
      :visible="dialogVisible"
      :destroy-on-close="destroyOnClose"
      @close="closeDialog"
      @opened="openedDialog"
      >
      <div class="dialog-content"><slot/></div>
      <span slot="footer" class="dialog-footer">
        <el-button v-show="showClose" @click="closeDialog">{{cancelText}}</el-button>
        <el-button v-show="showConfirm" type="primary" @click="confirmDialog">{{confirmText}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '30%'
    },
    destroyOnClose: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    },
    clickCloseModal: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: '确 认'
    },
    cancelText: {
      type: String,
      default: '取 消'
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    confirmDialog() {
      this.$emit('confirmDialog')
    },
    closeDialog() {
      this.$emit('closeDialog')
    },
    openedDialog() {
      this.$emit('openedDialog')
    }
  }
}
</script>

<style scoped lang="scss" >

</style>
