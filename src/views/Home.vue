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
      <div>{{ count }} </div>
      <div>{{ double }} </div>
      <div>{{ towTimes }} </div>
      <button @click="add">增加</button>
    </div>



  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import useCounter from '@/refs/counter';

export default {
  name: 'Home',

  setup(){
    /*
    composition就是为了解决这个问题存在的，通过组合的方式，把零散在各个data，methods的代码，重新组合，一个功能的代码都放在一起维护，并且这些代码可以单独拆分成函数;
    解决了mixin混乱的问题、命名冲突;
    */
    let val = ref('123');
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
      val.value = '';
    }

    let { count, double, towTimes, add } = useCounter();
    return { 
      val, todos, addTodo,
      count, double, towTimes, add,

    };

  }
}
</script>
