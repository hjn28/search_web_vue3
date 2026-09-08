<template>
  <div class="home-container">
    <!-- 左右两大分区，引入组件，不写内部细节 -->
    <el-row>
      <el-col :span="12">
        <LeftPanel />
      </el-col>
      <el-col :span="12">
        <RightPanel />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import LeftPanel from '@/components/mainLayout/LeftPanel.vue'
import RightPanel from '@/components/mainLayout/RightPanel.vue'
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
}
</style>