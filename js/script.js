let app = new Vue({
    el:'#app',
    data:{
    title:"Список задач Маленького Принца",
    items:[
               
    ]
  },
  created: function () {
    // Супер сложная функция с запросом данных через API
    this.items.push({text:"Встать поутру"})
    this.items.push({text:"Умыться"})
    this.items.push({text:"Привести себя в порядок"})
    this.items.push({text:"Привести в порядок свою планету"})
  },
   methods:{

    addItem: function(){
    var input = document.getElementById('itemForm')
    
    if(input.value !==''){
      this.items.push({
        text:input.value
      })
      input.value =""
    }
  },
  deleteItem:function(index){
    this.items.splice(index, 1);
  }
  } 
  }) 