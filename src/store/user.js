import { defineStore } from "pinia";

// Option Store
export const useUserStore = defineStore("user", {
  //等同于 data，防止数据污染
  state: () => {
    return {
      name: "user",
      age: 17,
    };
  },
  // 等同于 computed，
  getters: {
    getAge: (state) => {
      return state.age;
    },
    // 使用this返回值，不能够对getAge进行返回值格式推导
    // getAge() {
    //   return this.age
    // },

    // 注意：使用this时就不能使用箭头函数！！！
    // 里面的this指向当前的store仓库（使用this不会有类型推导），推荐使用箭头函数
    gettersName(state) {
      return `${state.name}-${this.getAge}`;
    },
    // 需要向getters传递参数时，返回一个函数接收参数
    // 但是没有缓存的作用
    gettersAge(state) {
      return (year) => {
        return `${state.age}-${year}`;
      };
    },
    // 访问其他store中的getters
    gettersOtherStore(state) {
      const countStore = useUserStore2();
      return `user2：${countStore.age}，user：${state.age}`;
    },
  },
  //等同于 methods
  // action 可以添加异步操作，调用后台接口
  // 使用this时不能使用箭头函数，支持同步异步操作
  actions: {
    setAge(age) {
      // this指向当前的store仓库
      this.age = age;
    }
  }
});

// Setup Store
export const useUserStore2 = defineStore("user2", () => {
  const name = ref("user2");
  const age = ref(17);

  const isBigAge = computed(() => {
    return age.value > 18;
  });
  const setAge = (val) => {
    age.value = val;
  };
  return { name, age, setAge, isBigAge };
});
