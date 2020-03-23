class Menu {
        constructor(titleMenu){
        this.titleMenu = titleMenu;
        this.categoryArray = [];
        this.dishArray = [];
    }
    
    addCategory(titleCategory){
        this.categoryArray.push(new Category(titleCategory));
    }

    addDish(title, description, price){
        this.dishArray.push(new Dish(title, description, price));
    }

    updateCategory(titleCategory, newTitleCat){
        for (let i = 0; i < this.categoryArray.length; i++){
            if (this.categoryArray[i].titleCategory === titleCategory){
                this.categoryArray[i].titleCategory = newTitleCat;

                return ;
            }
        }
    }

    updateDish(title, newTitle, newDesc, newPrice){
        for (let i = 0; i < this.categoryArray.length; i++){
            for (let j = 0; j < this.categoryArray[i].categoryDish.length; j++){
                if (this.categoryArray[i].categoryDish[j].title === title) {
                    this.categoryArray[i].categoryDish[j].title = newTitle;
                    this.categoryArray[i].categoryDish[j].description = newDesc;
                    this.categoryArray[i].categoryDish[j].price = newPrice;

                    return ;
                }
            }
        }
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
        for (let i = 0; i < this.categoryArray.length; i++){
            for (let j = 0; j < this.categoryArray[i].categoryDish.length; j++){
                console.log(this.categoryArray[i].categoryDish[j].title);
                console.log(this.categoryArray[i].categoryDish[j].description);
                console.log(this.categoryArray[i].categoryDish[j].price);
                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
            }
        }
    }

    findDish(title){
        for (let i = 0; i < this.categoryArray.length; i++){
            for (let j = 0; j < this.categoryArray[i].categoryDish.length; j++){
                this.categoryArray[i].categoryDish[j].title.includes(title) ? console.log(this.categoryArray[i].categoryDish[j].title) : null;
            }
        }
    }

    printCategories(){
        for (let i = 0; i < this.categoryArray.length; i++){
            this.printCategory(this.categoryArray[i].titleCategory);
        }
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

    deleteCategory(titleCategory){
        for (let i = 0; i < this.categoryArray.length; i++){
            if (this.categoryArray[i].titleCategory === titleCategory) {
                this.dishArray.push(this.categoryArray[i].categoryDish);
                this.categoryArray.splice(i, 1);
                return;
            }
        }
    }

    _findDish(title){
        for (let i = 0; i < this.categoryArray.length; i++){
            for(let j = 0; j < this.categoryArray[i].categoryDish.length; j++) {
                if (this.categoryArray[i].categoryDish[j].title === title){
                    return this.categoryArray[i].categoryDish[j];
                }
            }
        }
    }

    _findCategory(title){
        return this.categoryArray.find(category => category.titleCategory === title);
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

const menu = new Menu('sky');
const dish = new Dish();
const category = new Category();

menu.addCategory('soup')
menu.printCategory('soup');
menu.addDish('lagman', 'desc', 50);

menu.dishToCategory('lagman', 'soup');
menu.printDish('lagman');
console.log('--------------------------------------')
menu.printCategory('soup');

console.log('--------------------------------------')
menu.addCategory('breakfast');
menu.printCategory('breakfast');

console.log('--------------------------------------')

menu.addDish('coffee', 'espresso', 100);
menu.addDish('hleb', 'nan', 100);

console.log('--------------------------------------')


menu.dishToCategory('hleb', 'breakfast');
menu.dishToCategory('coffee', 'breakfast');
menu.printDish('coffee');
menu.printCategory('breakfast');
console.log('--------------------------------------')
menu.deleteDish('coffee', 'breakfast');
menu.printCategory('breakfast');
console.log('--------------------------------------')

console.log('--------------------------------------')


menu.updateCategory('breakfast', 'zavtra');
menu.printCategory('zavtra');
console.log('--------------------------------------');
menu.printCategories();

console.log('--------------------------------------');
menu.updateDish('hleb', 'bread', 'desc', 23);
menu.printDish('bread');

console.log('--------------------------------------');

menu.printDishes();
menu.findDish('2');
