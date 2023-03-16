<script lang="ts" setup>
import { reactive, shallowRef, withDefaults } from 'vue'
import { imageToBase64, upload } from '../utils/index'
const props = withDefaults(
  defineProps<{
    action: string
    size?: number
    accept?: string
    name?: string
    autoupload?: boolean
    multiple?: boolean
    header?: Headers
  }>(),
  {
    size: 500,
    accept: 'image/png',
    autoupload: true,
    multiple: false,
  },
)
const file = shallowRef()
// 维护进度
const progress: Array<number> = reactive([])
// 维护上传的上传的
const imageList: Array<string> = reactive([])
// 维护文件列表
const filesList: Array<File> = []
// 检测文件是否符合用户要求的规范 （文件大小，文件类型）
function isValidFile(_file: Array<File>): Array<number> {
  const size = props.size * 1024
  // 维护每次上传中有效的文件 (索引)
  const vaildFileIndex: Array<number> = []
  _file.forEach((item, index) => {
    let vaildFile = true
    if (item.size > size) {
      // eslint-disable-next-line no-alert
      alert(`上传的文件大小不能超过 ${props.size} Kb`)
      vaildFile = false
    }
    if (!props.accept.includes(item.type)) {
      // eslint-disable-next-line no-alert
      alert(`上传的文件的格式是 ${props.accept} 中的一种`)
      vaildFile = false
    }
    if (vaildFile)
      vaildFileIndex.push(index)
  })
  return vaildFileIndex
}

// 获取合法的文件
function getVaildFile(_file: Array<File>): Array<File> {
  const vaildFile: Array<File> = []
  const vaildIndex = isValidFile(_file)
  vaildIndex.forEach((item) => {
    vaildFile.push(_file[item])
  })
  return vaildFile
}
// 点击触发 input 事件
function handlerClick() {
  // 触发 input 事件
  // 清空 input 的值，这里不可以使用 files 因为只读的原因
  file.value.value = ''
  file.value.click()
  function handlerChange() {
    const files: Array<File> = getVaildFile(Array.from(file.value.files))
    filesList.push(...files)
    imageToBase64(files, imageList)
    if (props.autoupload) {
      // 用户否选择自动上传
      upload(files, props.action, props.name, progress)
    }
    file.value.removeEventListener('change', handlerChange)
  }

  file.value.addEventListener('change', handlerChange)
}

// 用户自行触发的上传事件
function handlerUpload() {
  upload(filesList, props.action, props.name, progress)
}
</script>

<template>
  <div class="t-upload">
    <t-button v-if="!autoupload" style="margin-bottom: 10px" @click="handlerUpload">
      点击上传
    </t-button>
    <div class="t-upload--list">
      <!-- 需要上传的列表 -->
      <div
        v-for="(item, index) of imageList"
        :key="index"
        class="t-upload--item"
      >
        <div v-if="progress[index] !== 100 && progress[index]" class="t-upload--mask">
          <div class="progressInfo">
            <div class="currentProgress">
              {{ `${progress[index]}%` }}
            </div>
            <div
              class="t-upload--progress"
              :style="{ transform: `translateX(${progress[index] - 100}%)` }"
            />
          </div>
        </div>
        <img :src="item" alt="">
      </div>
      <div class="t-upload--content" @click.self="handlerClick">
        <!-- 上传框的主体部分 -->
        <t-icon type="plus" @click.self="handlerClick" />
        <input ref="file" type="file" class="t-upload__file" :multiple="multiple">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
