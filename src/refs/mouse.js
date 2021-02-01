import { ref, onMounted, onUnmounted } from 'vue';

export default function useMouse(){
  let pinterX = ref(0)
  let pinterY = ref(0)

  function update(e){
    pinterX.value = e.pageX;
    pinterY.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  })

  return {pinterX, pinterY}

}
