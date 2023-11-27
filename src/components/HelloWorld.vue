<template>
  <el-card class="box-card">
    <div class="card-header">
      <span>文章管理</span>
      <el-button type="primary" class="button">发布文章</el-button>
    </div>

    <div class="margin-top: 20px">
      <hr>
    </div>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="文章分类: ">
        <el-select v-model="formInline.category" placeholder="请选择" clearable>
          <el-option label="时事" value="时事" />
          <el-option label="蓝球" value="蓝球" />
        </el-select>
      </el-form-item>

      <el-form-item label="发布状态：">
        <el-select v-model="formInline.status" placeholder="请选择" clearable>
          <el-option label="已发布" value="已发布" />
          <el-option label="草稿" value="草稿" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="文章标题" />
      <el-table-column prop="category" label="分类" />
      <el-table-column prop="time" label="发表时间" />
      <el-table-column prop="state" label="状态" />
      <el-table-column label="操作" width="180">
        <el-row>
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="danger" :icon="Delete" circle />
        </el-row>
      </el-table-column>
    </el-table>
    <el-pagination class="el-p" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
      :page-sizes="[5, 10, 15, 20]" :small="small" :disabled="disabled" :background="background"
      layout="jumper, total, sizes, prev, pager, next" :total="20" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </el-card>
</template>
<style scoped>
.el-p {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.card-header {
  display: flex;
  justify-content: space-between; 
}
</style>

<script setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
const tableData = [
  {
    title: "标题1",
    category: "game",
    time: '2016-05-03',
    state: '发布',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    title: "标题1",
    category: "game",
    time: '2016-05-03',
    state: '发布',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    title: "标题1",
    category: "game",
    time: '2016-05-03',
    state: '发布',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    title: "标题1",
    category: "game",
    time: '2016-05-03',
    state: '发布',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    title: "标题1",
    category: "game",
    time: '2016-05-03',
    state: '发布',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    title: "标题1",
    category: "game",
    time: '2016-05-03',
    state: '发布',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    title: "标题1",
    category: "game",
    time: '2016-05-03',
    state: '发布',
    address: 'No. 189, Grove St, Los Angeles',
  },
]


const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (number) => {
  console.log(`${number} items per page`)
}
const handleCurrentChange = (number) => {
  console.log(`current page: ${number}`)
}

import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
  status: '',
  category: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>