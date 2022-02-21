import { createStore } from "vuex";
import { postModule } from "@/store/postModule";

export default createStore({
  modules: {
    post: postModule,
  },
});

// basic VueX example

// export default createStore({
//     state: {
//         likes: 1,
//         isAuth : false,
//     },
//     // getters = computed свойства
//     getters: {
//         doubleLikes(state) {
//             return state.likes*2;
//         }
//     },
//     mutations: {
//         incrementLikes(state) {
//             state.likes += 1;
//         },
//         decrementLikes(state) {
//             state.likes -= 1;
//         },
//     },
//     actions: {

//     },
//     modules: {

//     }
// })
