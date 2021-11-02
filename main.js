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
        list:[
            `fare i compiti`,
            `fare la spesa`,
            `fare il bucato`
        ]
    },
    methods:{
        removeItem:function removeItem(index){
            this.list.splice(index , 1)
        },
        addItem:function addItem(){
            this.error=``
            if(this.add != ""){
                this.list.push(this.add)
                this.error = ``
            }else{
                this.error=`devi scrivere qualcosa da fare`
            }
        }
    }
}) 