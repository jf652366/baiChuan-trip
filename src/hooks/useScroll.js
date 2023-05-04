import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";

// 传入回调函数
// export const useScroll = (
//   fun
// ) => {
//   const el = document.querySelector('el')
//   const scrollListener = () => {
//     const {clientHeight, scrollHeight, scrollTop} = el
//     if (Math.floor(clientHeight + scrollTop) === scrollHeight) {
//       if (fun)fun()
//     }
//   }
//   onMounted(() => {
//     el.addEventListener('scroll', scrollListener, true)
//   })
//   onUnmounted(() => {
//     el.removeEventListener('scroll', scrollListener)
//   })
// }

// 抛出值
export const useScroll = () => {
  const scrollEnd = ref(false);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);
  const el = document.querySelector('body');
  const scrollListener = throttle(() => {
    clientHeight.value = el.clientHeight
    scrollHeight.value = el.scrollHeight
    scrollTop.value = el.scrollTop
    const sumHeight = Math.floor(clientHeight.value + scrollTop.value);
    if (sumHeight === scrollHeight.value || sumHeight + 1 === scrollHeight.value) {
      scrollEnd.value = true;
      console.log("=={{ 到底了 }}==");
    }
  }, 200);
  onMounted(() => {
    el.addEventListener('scroll', scrollListener, true)
  });
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListener)
  });
  return {scrollEnd, clientHeight, scrollHeight, scrollTop};
}
