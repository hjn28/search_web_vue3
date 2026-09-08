<template>
  <div class="login-container">
    <el-card style="width:420px;margin:100px auto;">
      <h2 style="text-align:center;margin-bottom:24px">系统登录</h2>
      <el-form ref="formRef" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginApi } from '@/api/auth'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()

const form = ref({
  account: '',
  password: ''
})

const handleLogin = async () => {
  console.log('form')
  router.push('/')
}
</script>