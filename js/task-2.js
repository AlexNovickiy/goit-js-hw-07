class Storage {
  #items;
  constructor(arrGoods) {
    this.#items = arrGoods;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  //якщо потрібно видалити усі входження :
   removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }

  /* або так ,якщо потрібно видалити тільки перше входження : */
  /* removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if(index !== -1) this.#items.splice(index, 1);
  } */
  
   /* або можна так , переробити масив, а не просто відфільтрувати: */
 /*  removeItem(itemToRemove) {
  this.#items = this.#items.reduce((acc, item) => {
    if (item !== itemToRemove) acc.push(item);
    return acc;
  }, []);
} */
  
   /* або ще так зробити можна, slice та просто деструктуризувати у новий масив: */
/*   removeItem(itemToRemove) {
  const index = this.#items.indexOf(itemToRemove);
  if (index !== -1) {
    this.#items = [...this.#items.slice(0, index), ...this.#items.slice(index + 1)];
  }
} */

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
