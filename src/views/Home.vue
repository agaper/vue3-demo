<template>
  <div class="home">

    <div class="demo-box">
      <div class="demo-title">响应式的Todos</div>
      <input type="text" v-model="val" @keyup.enter="addTodo">
      <ul>
        <li v-for="todo in todos" :key="todo.id"> 
          {{ todo.title }}
        </li>
      </ul>
    </div>

    <div class="demo-box">
      <div class="demo-title">抽离的数字处理</div>
      <div>数值-{{ count }} </div>
      <div>数值-2倍-{{ double }} </div>
      <div>数值-平方-{{ towTimes }} </div>
      <button @click="add">增加</button>
    </div>

    <div class="demo-box">
      <div class="demo-title">鼠标实时坐标</div>

      <div>{{ 'X: ' + pinterX + '- Y: ' + pinterY }} </div>
    </div>

  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import useCounter from '@/refs/counter';
import useMouse from '@/refs/mouse';

export default {
  name: 'Home',

  setup(){
    /*
    composition就是为了解决这个问题存在的，通过组合的方式，把零散在各个data，methods的代码，重新组合，一个功能的代码都放在一起维护，并且这些代码可以单独拆分成函数;
    解决了mixin混乱的问题、命名冲突;
    */
    let val = ref('123')
    let todos = reactive([
      { id: 0, title: '吃饭', done: false },
      { id: 1, title: '睡觉', done: false },
      { id: 2, title: 'lsp', done: false }
    ]);
    function addTodo(){
      todos.push({
        id: todos.length,
        title: val.value,
        done: false
      });
      val.value = ''
    }
    
    let { count, double, towTimes, add } = useCounter()
    let { pinterX, pinterY } = useMouse()
    return { 
      val, todos, addTodo,
      count, double, towTimes, add,
      pinterX, pinterY
    };

  }
}
</script>
