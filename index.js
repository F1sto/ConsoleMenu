// let menuArray = [];
class Menu {
    constructor(titleMenu){
        this.titleMenu = titleMenu;
        this.categoryArray = [];
        this.dishArray = [];
    };
    addMenu(titleMenu){
        menuArray.push(new Menu(titleMenu));
    }
    addCategory(titleCategory){
        this.categoryArray.push(new Category(titleCategory));
    }
    addDish(title, description, price){
        this.dishArray.push(new Dish(title, description, price));
    }

    // categoryToMenu(titleCategory, titleMenu){
    //     for(let i = 0; i < menuArray.length; i++){
    //         for(let j = 0; j < this.categoryArray.length; j++){
    //             this.menuArray[i].push(this.categoryArray[j]);
    //         }
    //     }
        
    //     // const category = this._findCategory(titleCategory);
    //     // if (titleMenu == titleMenu){
    //     //     this.categoryArray.push(category);
    //     //     if (titleCategory !== titleCategory){
    //     //         console.log('error');
    //     //     }
    //     // }
    // }
    dishToCategory(title, titleCategory){

        for(let i = 0; i < this.categoryArray.length; i++){
            if (this.categoryArray[i].titleCategory === titleCategory){
                for(let j = 0; j < this.dishArray.length; j++){
                    if (this.dishArray[j].title === title){
                        this.categoryArray[i].categoryDish.push(this.dishArray[j]);
                    }
                }

            }
        }

        // const category = this._findCategory(titleCategory);
        // const categoryDish = this.categoryDish;
        // category.categoryDish.push(dish);
        // if (titleCategory == this.titleCategory){
            //     if (title !== title){
        //         console.log('error');
        //     }
        // }


        // this.dishArray.forEach(function (dish){
        //     if ()
        // })
        // this.categoryArray.forEach(function (category){
        //     if (category.titleCategory === titleCategory){
        //         categoryArray.push(this.dish);
        //     }
        // })

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
        // for(let i = 0; i < dishArray.length; i++){
        // }
    }
    _findDish(title){
        return this.dishArray.find(dish => dish.title === title);
    }
    _findCategory(title){
        return this.categoryArray.find(category => category.titleCategory === title);
    }

}


class Category {
    constructor(titleCategory){
        this.titleCategory = titleCategory;
        this.categoryDish = [];
    };
    printC(){
        console.log(this.titleCategory);
        console.log(this.categoryDish);
    }
}

// this.dishes.push()

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
// const categoy = new Category('category');
const dish = new Dish();

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
menu.printDish('coffee');

console.log('--------------------------------------')


menu.dishToCategory('coffee', 'breakfast');
menu.printCategory('breakfast');
// console.log('--------------------------------------')
// menu.printCategory('soup');








// dish.addDish('lagman', 'asdf asdf ', 2)
// console.log(menu.titleMenu);
// console.log(menu.dishes)

// console.log(dishArray);
// menu.printDishes();


// const dish_to_save = new Dish('title', 'description', 3);
// const menu_to_save = new Menu('title',  )

// dishArray.push(dish_to_save);






