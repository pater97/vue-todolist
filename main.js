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
        ]
    },
    methods:{
        removeItem:function removeItem(index){
            if(this.list.length != 0){
                this.list.splice(index , 1)
            }
        },
        addItem:function addItem(){
            this.error=``
            if(this.add != "" && this.add.length > 5){
                this.list.push(this.add)
                this.error = ``
            }else{
                this.error=`devi scrivere qualcosa da fare che abbia almeno 5 caratteri`
            }
        }
    }
}) 