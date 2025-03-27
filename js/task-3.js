class StringBuilder {
     #value;
     constructor(initialValue) {
          this.#value = initialValue;
     }

     getValue() {
          return this.#value;
     }

     padEnd(str) {
          this.#value = this.#value.padEnd(this.#value.length + str.length, str);
          /* можно просто так ще, якщо увесь додавати тільки : */
         /*  this.#value += str; */
     }

     padStart(str) {
          this.#value = this.#value.padStart(this.#value.length + str.length, str);
          /* або так: */
           /* this.#value = str + this.#value; */
     }

     padBoth(str) {
          const lengthToAdd = str.length;  
          this.#value = this.#value
          .padStart(this.#value.length + lengthToAdd, str)
          .padEnd(this.#value.length  + lengthToAdd * 2, str);
          /* або так: */
           /* this.#value = str + this.#value + str; */
     }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
