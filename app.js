var app = new Vue({
  el:"#app",
  data:{
    sortparam:'',
    thing:{
      id:0,
      classify:'',
      name:'',
      price:''
    },
//     things
    things: [{
                id: 1,
                classify: '手机',
                name: '小米6',
                price: 2199
            }, {
                id: 2,
                classify: '平板',
                name: 'ipad',
                price: 2688
            }, {
                id: '3',
                classify: '书籍',
                name: '围城',
                price: 24
            }, {
                id: 4,
                classify: '香烟',
                name: '中华',
                price: 50
            }]
  },
  computed:{
    sum:function(){
      var result = 0;
      for (var i=0;i<this.things.length;i++){
        result += Number(this.things[i].price)
      };
      return result;
    }
  },
  methods:{
    addthing:function(){
      this.thing.id = this.things.length +1;
      this.things.push(this.thing);
      this.thing = '';
    },
    delthing:function(thing){
      this.things.$remove(thing);
    },
    sortBy:function(sortparam){
      this.sortparam = sortparam
    }
  }
})
   