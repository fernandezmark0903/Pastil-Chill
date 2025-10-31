import { _decorator, Button, Component, Node } from 'cc';
import { DatabaseManager } from './DatabaseManager';  // path dapat tama
const { ccclass, property } = _decorator;

@ccclass('productActions')
export class productActions extends Component {
    
    start() {
        if (this) {
            this.node.on('click', this.onButtonClick, this);
        }
    }

    onButtonClick() {
        let nodename = this.node.name.split("_");   // ["mainProduct", "12"]
        let id = parseInt(nodename[1]);
        const db = DatabaseManager.instance;
        let productData = db.products[id-1];
        console.error(productData);
    }
}


