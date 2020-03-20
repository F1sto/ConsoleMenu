// let menuArray = [];
class Menu {
    constructor(titleMenu){
        this.titleMenu = titleMenu;
        this.categoryArray = [];
        this.dishArray = [];
    }
    addMenu(titleMenu){
        menuArray.push(new Menu(titleMenu));
    }

    addCategory(titleCategory){
        this.categoryArray.push(new Category(titleCategory));
    }

    addDish(title, description, price){
        this.dishArray.push(new Dish(title, description, price));
    }
    
    dishToCategory(title, titleCategory){
        
        for(let i = 0; i < this.categoryArray.length; i++){
            if (this.categoryArray[i].titleCategory === titleCategory){
                for(let j = 0; j < this.dishArray.length; j++){
                    if (this.dishArray[j].title === title){
                        this.categoryArray[i].categoryDish.push(this.dishArray[j]);
                        this.dishArray.splice(j, 1);
                    }
                }
                
            }
        }
    }
    
    printDish(title){
        this._findDish(title).print();
    }
    
    printCategory(titleCategory){
        this._findCategory(titleCategory).printC();
    }
    
    printDishes(){
        dishArray.forEach( () => {
            dish.print();
        })
    }

    _findDish(title){
        return this.dishArray.find(dish => dish.title === title);
    }
    _findCategory(title){
        return this.categoryArray.find(category => category.titleCategory === title);
    }
    
    deleteDish(title, titleCategory){
        for (let i = 0; i < this.categoryArray.length; i++){
            if (this.categoryArray[i].titleCategory === titleCategory){
                for(let j = 0; j < this.categoryArray[i].categoryDish.length; j++) {
                    if (this.categoryArray[i].categoryDish[j].title === title){
                        this.dishArray.push(this.categoryArray[i].categoryDish[j]);
                        this.categoryArray[i].categoryDish.splice(j, 1);
                        return;
                    }
                }
            }
        }
    }
}


class Category {
    constructor(titleCategory){
        this.titleCategory = titleCategory;
        this.categoryDish = [];
    }
    printC(){
        console.log(this.titleCategory);
        console.log(this.categoryDish);
    }
}

class Dish {
    constructor(title, description, price){
        this.title = title;
        this.description = description;
        this.price = price;
    }
    print(){
        console.log(this.title);
        console.log(this.description);
        console.log(this.price);
    }
}

function printDish(title) {
    for (let i = 0; i < dishArray.length; i++){
        if (dishArray[i].title === title){
            console.log(dishArray[i]);
        }
    }
}

const menu = new Menu('sky');
const dish = new Dish();
const category = new Category();

menu.addCategory('soup')
menu.printCategory('soup');
menu.addDish('lagman', 'desc', 50);
menu.printDish('lagman');
menu.dishToCategory('lagman', 'soup');
console.log('--------------------------------------')
menu.printCategory('soup');

console.log('--------------------------------------')
menu.addCategory('breakfast');
menu.printCategory('breakfast');

console.log('--------------------------------------')

menu.addDish('coffee', 'espresso', 100);
menu.addDish('hleb', 'nan', 100);
menu.printDish('coffee');

console.log('--------------------------------------')


menu.dishToCategory('hleb', 'breakfast');
menu.dishToCategory('coffee', 'breakfast');
menu.printCategory('breakfast');
console.log('--------------------------------------')
menu.deleteDish('coffee', 'breakfast');
menu.printCategory('breakfast');
console.log('--------------------------------------')
menu.printDish('coffee');
