// 参考： https://juejin.im/post/5dff8a26e51d4558105420ed

<template>
    <input type="file" @change="doFile" />
    <input type="buttom" @click="uploadFile" />
</template>

<script>
export default {
    data() {
        return {
            file: null,
            uploadSlices: []
        }
    },
    methods: {
        request(url, data) {
            let xhr = new XMLHttpRequest()
            xhr.open('get', url)
            xhr.onreadystatechange = function(res) {
                if(res.readyStatus === 4) {
                    if(res.code === 200 || res.code === 304) {
                        return res.responseText
                    } else {
                        return res.responseText
                    }
                }
            }
            xhr.send(data)
        },
        doFile(e) {
            let [file] = e.target.files
            if(!file) return
            this.file = file
        },
        sliceFile(file, size) {
            const size = size || 10*1024*1024
            let slcieList = []
            let cur = 0
            while(cur < file.size) {
                slcieList.push({ file: file.slice(cur, cur+size)})
                cur += size
            }
            return slcieList
        },
        uploadData(fileList) {
            let foemDataList = fileList.map(({file}, index) => {
                return {
                    chunk: file,
                    hash: this.file.name + '-' + index
                }
            })
            const data = foemDataList.map(({chunk, hash}) => {
                const formData = new FormData()
                formData.append('chunk', chunk)
                formData.append('hash', hash)
                formData.append('filename', this.file.name)
                return { formData }
            }).map(({formData}) => {
                this.request({
                    url: 'localhost://3000/request',
                    data: formData
                })
            })
            await Promise.all(foemDataList)
        },
        uploadFile() {
            if(!this.file) return
            let fileList = this.sliceFile(this.file, SIZE)
            this.uploadData(fileList)
        }
    }
}
</script>
