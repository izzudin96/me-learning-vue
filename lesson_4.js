Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',

    data() {
        return {
            tasks: [
                { description: 'Go to the store', completed: true },
                { description: 'Go to the mall', completed: false },
                { description: 'Go to the dryer', completed: false },
                { description: 'Go to the office', completed: true },
            ]
        };
    }
});


Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});