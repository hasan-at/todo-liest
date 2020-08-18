
/*die un fertiga sachn utomatek nach uben schiben*/

Vue.component('togglebutton', {
    props: ['label', 'name'],
    template: `<div class="togglebutton-wrapper" v-bind:class="isactive ? 'togglebutton-checked' : ''">
      <label v-bind:for="name">
        <span class="togglebutton-label">{{ label }}</span>
        <span class="tooglebutton-box"></span>
      </label>
      <input v-bind:id="name" type="checkbox" v-bind:name="name" v-model="isactive" v-on:change="onToogle">
  </div>`,
    model: {
        prop: 'checked',
        event: 'change'
    },
    data: function() {
        return {
            isactive:false
        }
    },
    methods: {
        onToogle: function() {
            this.$emit('clicked', this.isactive)
        }
    }
});
/*______________________________________________________________________________________________________*/

var todolist = new Vue({
    el: '#todolist',
    data: {
        newitem:'',
        sortByStatus:false,
        todo: [

        ]
    },
    methods: {
        addItem: function() {
            this.todo.push({id: Math.floor(Math.random() * 9999) + 1, label: this.newitem, done: false});
            this.newitem = '';
        },
        markAsDoneOrUndone: function(item) { /*für sctreuchen*/
            item.done = !item.done;
        },
        deleteItemFromList: function(item) { /*für Delete*/
            let index = this.todo.indexOf(item)
            this.todo.splice(index, 1);
        },
        clickontoogle: function(active) { /*befegung das aufgabe*/
            this.sortByStatus = active;
        }
    },
    computed: {
        todoByStatus: function() {

            if(!this.sortByStatus) {
                return this.todo;
            }

            var sortedArray = []
            var doneArray = this.todo.filter(function(item) { return item.done; });
            var notDoneArray = this.todo.filter(function(item) { return !item.done; });

            sortedArray = [...notDoneArray, ...doneArray];
            return sortedArray;
        }
    }
});
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}