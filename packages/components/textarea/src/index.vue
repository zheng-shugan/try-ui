<template>
    <div :class="['mzl-textarea-default',customClass,{'mzl-textarea-disabled':disabled}]">
      <textarea :form="form" :cols="cols" :rows="rows" :placeholder="placeholder" :maxlength="maxlength" :value="modelValue" @input="input" ref="textareaMzl" :disabled="disabled" :style="tStyle" @focus="focus" @blur="blur" :readonly="readonly"></textarea>
      <div class="max-length-box" v-if="maxlength!=undefined&&maxlength>0">{{`${n}/${maxlength}`}}</div>
    </div>
  </template>
  <script>
  import { ref } from 'vue'
  export default{
    name:"tTextarea"
  }
  </script>
  <script setup>
  const emit = defineEmits(['update:modelValue','focus','blur','input'])
  const props = defineProps({
    modelValue:String,
    customClass:String,
    placeholder:String,
    disabled:Boolean,
    resize:{
      type:Boolean,
      default:true
    },
    form:String,
    rows:{
      type:Number,
      default:4
    },
    cols:{
      type:Number,
      default:50
    },
    readonly:Boolean,
    maxlength:Number,
    focusColor:{
      type:String,
      default:"#0e80eb"
    }
  })
  const textareaMzl = ref(null)
  const n = ref(props.modelValue.length||0)
  const tStyle = ref({'resize':props.resize?'auto':'none','border-color':''})
  const input = ()=>{
    emit('update:modelValue',textareaMzl.value.value)
    n.value = textareaMzl.value.value.length
    if(n.value>=props.maxlength){
      n.value = props.maxlength
    }
    emit('input',textareaMzl.value.value)
  }
  const focus = (e)=>{
    emit('focus',e.target.value)
    tStyle.value['border-color'] = props.focusColor
  }
  const blur = (e)=>{
    emit('blur',e.target.value)
    tStyle.value['border-color'] = ""
  }
  </script>
  
  <style lang="scss" src="../style/index.scss" scoped>
</style>
