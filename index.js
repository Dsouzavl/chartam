/*
    for now, all the data is mocked up, but later, will fetch the infos from the 
    Ruby API.
*/
var segment = Vue.component('segment', {
    template: `
        <h4>segment</h4>
    `
})

var playbooks = Vue.component('playbooks', {
    template: `
        <div class="sm-4 col">
            <h2>Your Playbooks</h2>
            <segment 
                v-for="(index,segment) in segments"
                :key=index
            ></segment>
        </div>
    `,
    data() {
        return {
            segments: 5
        }
    },
    components: {
        segment
    }
})


var user = Vue.component('user', {
    template: `
        <div class="col s2">
            <p>{{this.name}}</p>
            <img :src="this.icon"/>
            <a href="#out">Sign out</a>
        </div>
    `,
    data() {
        return {
            name: 'Dsouzavl',
            icon: './img/me.jpg'
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
    },
    components: {
        user,
        playbooks
    }
})