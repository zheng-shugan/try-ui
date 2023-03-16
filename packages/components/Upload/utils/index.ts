// 将图片转换为 base64 渲染到页面上
export function imageToBase64(filesList: Array<File>, imageBase64: Array<string>): void {
  filesList.forEach((item) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      imageBase64.push(e.target?.result as string)
    }
    reader.readAsDataURL(item)
  })
}

// 发送 ajax 请求
export function upload(filesList: Array<File>, action: string, name: string | undefined, progress: Array<number>) {
  filesList.forEach((item, index) => {
    if (progress[index] !== 100) {
      progress[index] = 0
      const data = new FormData()
      data.append(name || item.name, item)
      const xhr = new XMLHttpRequest()
      xhr.open('POST', action)
      // 文件上传中的钩子
      xhr.upload.addEventListener('progress', (e) => {
        progress[index] = Math.ceil(e.loaded / e.total * 100)
      })
      xhr.send(data)
    }
  })
}
