class Menu {
    constructor(titleMenu){
        this.titleMenu = titleMenu;
        this.categoryArray = [];
        this.dishArray = [];
    };
    categoryToMenu(titleCategory, titleMenu){
        const category = this._findCategory(titleCategory);
        if (titleMenu == titleMenu){
            this.categoryArray.push(category);
            if (titleCategory !== titleCategory){
                console.log('error');
            }
        }
    }
    dishToCategory(title, titleCategory){
        const dish = this._findDish(title);
        if (titleCategory == titleCategory){
            this.categoryDish.push(dish);
            if (title !== title){
                console.log('error');
            }
        }
    }
    printDishes(){
        dishArray.forEach( () => {
            dish.print();
        })
        // for(let i = 0; i < dishArray.length; i++){
        // }
    }
    _findDish(title){
        return dishArray.find(dish => dish.title === title);
    }
    _findCategory(title){
        return this.categoryArray.find(category => category.title === title);
    }

}


class Category {
    constructor(titleCategory){
        this.titleCategory = titleCategory;
        this.categoryDish = [];
    };
    addCategory(title){
        this.title = title;
        console.log(title);
    }
}

// this.dishes.push()

class Dish {
    constructor(title, description, price){
        this.title = title;
        this.description = description;
        this.price = price;
    }
    addDish(title, description, price){
        dishArray.push(title, description, price);
    }
    print(){
        console.log(this.title);
        console.log(this.description);
        console.log(this.price);
    }
}

// function printDishes(){
//     for(let i = 0; i < dishArray.length; i++){
//         console
//     }
// }

function printDish(title) {
    for (let i = 0; i < dishArray.length; i++){
        if (dishArray[i].title === title){
            console.log(dishArray[i]);
        }
    }
}

const menu = new Menu('sky');
const categoy = new Category('category');
const dish = new Dish();

// dish.addDish('lagman', 'asdf asdf ', 2)
// console.log(menu.titleMenu);
// console.log(menu.dishes)

// console.log(dishArray);
// menu.printDishes();

categoy.addCategory('soup')

// const dish_to_save = new Dish('title', 'description', 3);
// const menu_to_save = new Menu('title',  )

// dishArray.push(dish_to_save);






