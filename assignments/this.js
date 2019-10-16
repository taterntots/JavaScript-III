/* The for principles of "this";
* In your own words, explain the four principles for the "this" keyword below.
*
* 1. Window Binding - "this" is the global context whenever a function gets invoked without any other rules in place being met. Simply put, "this" would reference the default binding, which is typically the window object when in a browser. 

* 2. Implict Binding - The most common rule used in roughly 80% of cases, implicit binding uses dot notation to determin what "this" references. When the function is being invoked, simply look left of the dot to find the object it's attached to.

* 3. Explicit Binding - With explicit binding, we pass the exact object we wish to refer to as "this" in the first argument of our invoked functions. Unlike implicit binding, we are explicitly specifying what the 'this' keyword is referencing. We use the .call, .apply, and many more methods to help us achieve this.

* 4. New Binding - What new binding does is create brand new objects anytime a function is invoked with the 'new' keyword. In other words, the 'this' keyword references the new object being created.


* write out a code example of each explanation above
*/

// Principle 1 - code example for Window Binding

function doggo(){
  console.log(`The dog goes ${this.bark}`);
}

var bark = 'woof woof!';

doggo();

// Principle 2 - code example for Implicit Binding

const gameOne = {
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    developer: "Nintendo",
    release: 2017,
    blurb: function(){
        console.log(`${this.title} was developed by ${this.developer} and released on the ${this.platform} in ${this.release}.`)
    }
}

const gameTwo = {
    title: "Chrono Trigger",
    platform: "Super Nintendo",
    developer: "Squaresoft",
    release: 1995,
    blurb: function(){
        console.log(`${this.title} was developed by ${this.developer} and released on the ${this.platform} in ${this.release}.`)
    }
}

gameOne.blurb();
gameTwo.blurb();

// Principle 3 - code example for New Binding

function Beer(beerBrand){
  this.brew = beerBrand;
}

let myFavoriteBeer = new Beer('Lagunitas IPA');

console.log(`I can't wait to get home and crack open an ice cold ${myFavoriteBeer.brew}.`);
console.log(myFavoriteBeer.brew);

// Principle 4 - code example for Explicit Binding

//.CALL EXAMPLE
function movie1(){
    console.log(`Who could forget that timeless quote from the movie ${this.title} - ${this.quote}`);
}

const movieOne = {
  title: 'The Goonies',
  quote: "Goonies never say die!"
}

const movieTwo = {
  title: 'Back to the Future',
  quote: "Roads... Where we're going we don't need roads."
}

const movieThree = {
  title: 'Indiana Jones and the Last Crusade',
  quote: "Snakes. Why'd it have to be snakes?"
}

movie1.call(movieOne);
movie1.call(movieTwo);
movie1.call(movieThree);

// .APPLY EXAMPLE

function movie2(cast1, cast2, cast3){
    console.log(`${this.title} stars ${cast1}, ${cast2}, and ${cast3}.`);
}

const cast1 = ["Sean Astin", "Josh Brolin", "Corey Feldman"]
const cast2 = ["Michael J. Fox", "Christopher Lloyd", "ALea Thompson"]
const cast3 = ["Harrison Ford", "Sean Connery", "Alison Doody"]

movie2.apply(movieThree, cast1);
movie2.apply(movieThree, cast2);
movie2.apply(movieThree, cast3);

//.BIND EXAMPLE

bestMovieQuote = movie1.bind(movieTwo);

bestMovieQuote();