//CONSEGNA
/*
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
*/

const app = new Vue({
    el:`#app`,
    data:{
        add:``,
        error:``,
        empty:``,
        list:[
            `fare i compiti`,
            `fare la spesa`,
            `fare il bucato`
        ],
        taskComplete:[],
        taskDelete:[]
    },
    methods:{
        removeItem:function removeItem(index,item){
                this.taskDelete.push(item)
                this.list.splice(index , 1)
            
        },
        addItem:function addItem(){
            this.error=``
            if(this.add != "" && this.add.length > 5){
                this.list.push(this.add)
                this.error = ``
                this.add=``
            }else{
                this.error=`devi scrivere qualcosa da fare che abbia almeno 5 caratteri`
            }
        },
        allDone: function allDone(index){
            this.taskComplete.push(...this.list)
            this.list.splice(index,100)
        },doneThisItem :function doneThisItem(item,index){
            this.taskComplete.push(item)
            this.list.splice(index , 1)
        },
        back: function back(item,index){
            this.list.push(item)
            this.taskComplete.splice(index,1)
        },
        removeAll:function removeAll(index){
            this.taskDelete.splice(index,100)
        },
        returnToList:function returnToList(item,index){
            this.list.push(item)
            this.taskDelete.splice(index,1)
        },
        
    }
}) 