Vue.component('column', {
    template: `
    <div class="column">

    </div>
    `,
    data() {
        return {

        };
    },
    methods: {

    },
    mounted() {

    },
});

Vue.component('cards', {
    template: `    
    
    `,
    methods: {
        removeCard() {
            this.$emit('removeCard');
        },
    },
});

Vue.component('column2', {
    template: `
    <div class="column">

    </div>
    `,
    data() {
        return {

        };
    },
    methods: {

    },
    mounted() {

    },
});

Vue.component('column3', {
    template: `
    <div class="column">

    </div>
    `,
    data() {
        return {

        };
    },
    methods: {

    },
    mounted() {

    },
});

let app = new Vue({
    el: '#app',
    data: {},
    methods: {},
});