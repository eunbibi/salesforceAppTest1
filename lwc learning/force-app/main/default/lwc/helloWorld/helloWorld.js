import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    //1. property
    /*
    name //undefined
    age=30
    fullname  = "salesforce Canada"
    showData = false

    //object  
    details={
        name:"sweety",
        place:"toronto"
    }

    //array
    userList =["a", "b", "C"]
    */

    fullname = "Zero to Hero"
    object = {
        name: "anna"
    }
    user = ["anna", "bnna", "cana"]


    //2. method
    /*
    getName(){
        //perform my logic

    }*/
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }
}
