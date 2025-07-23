/*
👑 Inheritance vs 🧩 Composition
--------------------------------------------------

📌 Inheritance (IS-A relationship):
- One class inherits properties/methods from another
- Promotes code reuse via hierarchy
- Can get messy with deep chains and tight coupling

📌 Composition (HAS-A / CAN-DO relationship):
- Build complex behavior by combining simple functions/objects
- More flexible & modular

✅ In modern JavaScript (and React), composition is preferred!

*/

// ----------------------------------
// 🧪 Inheritance Example
// ----------------------------------

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Bruno");
dog.speak(); // Bruno barks.

// ❌ Problem: If we want Dog to also have swim() — need deep hierarchy or mixins


// ----------------------------------
// 🔧 Composition Example
// ----------------------------------

// 🧱 Reusable behaviors as functions
const canWalk = (state) => ({
  walk: () => console.log(`${state.name} is walking`)
});

const canSwim = (state) => ({
  swim: () => console.log(`${state.name} is swimming`)
});

const canBark = (state) => ({
  bark: () => console.log(`${state.name} says Woof!`)
});

// 🧬 Compose behaviors
const createDog = (name) => {
  const state = { name };
  return {
    ...canWalk(state),
    ...canBark(state)
  };
};

const createDuck = (name) => {
  const state = { name };
  return {
    ...canWalk(state),
    ...canSwim(state)
  };
};

const buddy = createDog("Buddy");
buddy.walk(); // Buddy is walking
buddy.bark(); // Buddy says Woof!

const donald = createDuck("Donald");
donald.swim(); // Donald is swimming

/*
🎯 Why composition is better:
- Add/remove features without affecting other code
- Easier to test and reuse behaviors
- No deep or fragile inheritance chains
- Great fit for real-world JS apps (React Hooks follow composition)

🧠 Remember:
- Inheritance = rigid hierarchy
- Composition = reusable LEGO blocks
*/

