// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const el of this.potions) {
//             if (el.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (potionName === this.potions[i].name) {
//                 this.potions.splice(i, 1);
//             }
//         }
//     },
//     updatePotionName(oldName, newName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (oldName === this.potions[i].name) {
//                 this.potions[i].name = newName;
//             }
//         }
//     },
// };

// atTheOldToad.removePotion('Dragon breath');
// console.log(atTheOldToad.potions);

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
            const item = items[i];

            if (productName === item.name) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    items.splice(i, 1);
                }
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;

        for (const el of this.items) {
            total += el.price * el.quantity;
        }

        return total;
    },
};

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log(cart.countTotalPrice());

cart.remove('🍋');
console.table(cart.getItems());
