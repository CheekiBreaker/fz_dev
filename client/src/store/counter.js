import { makeAutoObservable } from "mobx";

class Counter{
    i = 0
    constructor(){
        makeAutoObservable(this)
    }
    result(){
        this.i = this.i + this.props.a + this.props.a;
        console.log('result', this.i);
    }
}

export default new Counter();