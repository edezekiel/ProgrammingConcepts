//-------------JAVASCRIPT FUNCTIONS-----------------//
  // Function Declaration
  // Function Expression
  // First Class Functions
  // Event-Driven Environment
  // Lexical Environment
  // Closure: Definition
  // Closure: Common Use Cases
  // Prototypal Inheritance
  // Class Inheritance
  // Higher Order Functions
  // Factory Functions
  // Composition Over Inheritance


//----------------Function Declaration------------------//
  function funcD(){
    console.log('function declaration')
  }


//--------------Function Expression---------------------//
  let funcE = function(){
    console.log('function expressions')
  }

//---------------First Class Functions------------------//
  // Fns are treated like any other variable. A Fn can be:
    // passed as an arg to other Fns,
    // returned by another Fn, and
    // assigned as a value to a variable.

  function add(first, second, callback) {
    console.log(first+second)
    callback()
  }
  add(2,3, function(){
    console.log('done')
  })

//--------------Event Driven Environment----------------//
  // Code design pattern used to react to events occurring
  // when a browser accesses a web page (listeners and callbacks).

  let myButton = document.createElement('button')
  myButton.addEventListener('click', () => console.log('clicked'))

//---------------Lexical Environment--------------------//


//---------------Closure: Definition--------------------//
  // Definition
    // A closure is the combination of a Fn bundled together (enclosed)
    // with references to its surrounding state (the lexical environment).
  // Creation
    // Closures are created every time a Fn is create, at Fn creation time.
  // Usage
    // Define a function inside another function and expose it.
    // To expose a Fn, return it or pass it to another Fn.

  // Example 1
  let me = 'Bruce Wayne'
  function greetMe() {
    console.log('Hello ' + me + '!')
  }
  greetMe()

  // Example 2
  let obj = function(){
    let i = 0;

    return {
      setI(k){
        i = k
      },
      getI(){
        return i;
      }
    }
  }

  let x = obj()

  x.setI(2);
  console.log(x.getI())

//--------------Closure: Common Use Cases--------------//
  // Stateful Functions
    //
  // Data Privacy
    // To give objects data privacy - enclosed variables
    // are only in scope within the containing (outer) Fn.


//--------------Prototypal Inheritance-----------------//
  let car = function(model){
    this.model = model;
  };

  car.prototype.getModel = function(){
    return this.model;
  }

  let toyota = new car('toyota');
  console.log(toyota.getModel())


//--------------Class Inheritance (avoid)--------------//


//-------------Higher Order Functions ----------------//
  // take one Fn (Callback Fn) and put it into another Fn
  // HOCs are good for Composition (de-coupling)
  // most basic and useful is filter

  let animals = [{name: 'Pippen', species: 'cat'}, {name: 'Cornelius', species: 'dog'}]

  let isDog = function(animal) {
    return animal.species === 'dog'
  }

  let dogs = animals.filter(isDog)
  let otherAnimals = animals.reject(isDog)


//-----------------Factory Functions------------------//
  // Fns that create objects and return them


//-----------Composition over Inheritance-------------//

  const barker = (state) => ({
    bark: () => console.log('Woof, I am ' + state.name)
  })

  const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
  })

  barker({name: 'karo'}).bark()
