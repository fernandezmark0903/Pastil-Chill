import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('orderAction')
export class orderAction extends Component {

    @property(Label)
    qty: Label;

    @property(Label)
    type: Label;

    @property(Label)
    pname: Label;

    @property(Label)
    price: Label;

    private Price = 0;

    protected start(): void {
        this.Price = parseFloat(this.price.string);
    }
    
    onButtonMinus() {

        let currentQty = parseInt(this.qty.string);
        
        if(currentQty > 1)
        {
            currentQty--;
            this.qty.string = currentQty+"";
            this.price.string = (currentQty * this.Price).toFixed(2); ;
        }else
        {
            if (this) {
            this.node.destroy();
            console.log("Prefab destroyed!");
            this.price.string = "0";
        }
        }
    }

    onButtonPlus() {
        let currentQty = parseInt(this.qty.string);
        currentQty++;
        this.qty.string = currentQty+"";
        this.price.string = (currentQty * this.Price).toFixed(2); ;
    }
}


