/*
    for now, all the data is mocked up, but later, will fetch the infos from the 
    Ruby API.
*/
var segment = Vue.component('segment', {
    template: `
        <div >
            <div 
                class="code"
                contenteditable="true"
                data-placeholder="code here..."
            ></div>
        </div>
    `,
    data(){
        return {
            
        }
    }
})

// show playbook by account
var playbook = Vue.component('playbook', {
    template: `
        <div>
            <h4>playbook</h4>
            <segment></segment>
        </div>
    `,
    components: {
        segment
    }
})

// on click in playbook name, show this playbook segment
var playbooks = Vue.component('playbooks', {
    template: `
        <div class="sm-4 col">
            <h2>Your Playbooks</h2>
            <playbook
                v-for="(index,playbook) in count"
                :key=index
            ></playbook>
        </div>
    `,
    data() {
        return {
            count: 5
        }
    },
    components: {
        playbook
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