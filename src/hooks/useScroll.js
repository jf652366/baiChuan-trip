import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";

// 传入回调函数
// export const useScroll = (
//   fun
// ) => {
//   const body = document.querySelector('body')
//   const scrollListener = () => {
//     const {clientHeight, scrollHeight, scrollTop} = body
//     if (Math.floor(clientHeight + scrollTop) === scrollHeight) {
//       if (fun)fun()
//     }
//   }
//   onMounted(() => {
//     body.addEventListener('scroll', scrollListener, true)
//   })
//   onUnmounted(() => {
//     body.removeEventListener('scroll', scrollListener)
//   })
// }

// 抛出值
export const useScroll = () => {
  const scrollEnd = ref(false);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);
  const body = document.querySelector('body');
  const scrollListener = throttle(() => {
    clientHeight.value=body.clientHeight
    scrollHeight.value=body.scrollHeight
    scrollTop.value=body.scrollTop
    const sumHeight = Math.floor(clientHeight.value + scrollTop.value);
    if (sumHeight === scrollHeight.value || sumHeight + 1 === scrollHeight.value) {
      scrollEnd.value = true;
      console.log("=={{ 到底了 }}==");
    }
  },200);
  onMounted(() => {
    body.addEventListener('scroll', scrollListener, true)
  });
  onUnmounted(() => {
    body.removeEventListener('scroll', scrollListener)
  });
  return {scrollEnd,clientHeight, scrollHeight, scrollTop};
}
