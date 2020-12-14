<template>
    <div :class="['todo-item',todo.completed ? 'completed ': '']">
        <input
         type="checkbox"
         class="toggle"
         v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button class="destory" @click="delTodo">删除</button>
    </div>
</template>

<script>
export default {
    props: {
        todo:{
            type: Object,
            required: true,
        }
    },
    methods: {
        delTodo() {
            this.$emit('del', this.todo.id)
        }
    }
}
</script>