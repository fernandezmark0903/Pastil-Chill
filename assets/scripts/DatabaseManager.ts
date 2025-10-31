import { _decorator, Button, Color, Component, Label, Node, resources, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DatabaseManaer')
export class DatabaseManager extends Component {

    @property([Node])
    Layout: Node[] = [];

    public static instance: DatabaseManager | null = null;

    public products: any[] = [];
    public addons: any[] = [];
    
    start() {
        DatabaseManager.instance = this;
        this.loadProducts();
        this.loadAddons();
    }

    loadProducts() {
        resources.load("database/products", (err: any, data: any) => {
            if (err) {
                console.error("Failed to load products:", err);
                return;
            }
            this.products = data.json;
            let layout = this.Layout[0] as Node;

            let productItem = 12;

            for(var i = 1 ; i <= productItem; i++)
            {
                let productNode = layout.getChildByName("mainProduct_"+i);
                let name = (productNode.getChildByName("name") as any);
                let description = (productNode.getChildByName("description") as any);

                try {
                    name.getComponent(Label).string = this.products[i-1].type;
                    description.getComponent(Label).string = this.products[i-1].name;
                    productNode.getComponent(Sprite).color = new Color(255,255,255);
                    productNode.getComponent(Button).enabled = true;
                } catch (error) {
                    name.getComponent(Label).string = "";
                    description.getComponent(Label).string = "";
                    productNode.getComponent(Sprite).color = new Color(80,80,80);
                    productNode.getComponent(Button).enabled = false;
                }
           
            }
        });
    }

    loadAddons() {
        resources.load("database/addons", (err: any, data: any) => {
            if (err) {
                console.error("Failed to load products:", err);
                return;
            }
            this.addons = data.json;
            
            let layout = this.Layout[1] as Node;

            let productItem = 12;

            for(var i = 1 ; i <= productItem; i++)
            {
                let productNode = layout.getChildByName("addonsProduct_"+i);
                let name = (productNode.getChildByName("name") as any);

                try {
                    name.getComponent(Label).string = this.addons[i-1].name;
                    productNode.getComponent(Sprite).color = new Color(255,255,255);
                    productNode.getComponent(Button).enabled = true;
                } catch (error) {
                    name.getComponent(Label).string = "";
                    productNode.getComponent(Sprite).color = new Color(80,80,80);
                    productNode.getComponent(Button).enabled = false;
                }
           
            }
        });
    }



}


