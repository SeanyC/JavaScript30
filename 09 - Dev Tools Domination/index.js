const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hi')

// Interpolated
console.log('hi %s', 'user')

// Styled
console.log('%chello', 'text-transform: uppercase; font-size: 24px; color: lightblue; text-shadow: 2px 1px grey')

// warning!
console.warn('think about it.')

// Error :|
console.error('stop.')

// Info
console.info('a tip for you.')

// Testing
console.assert(false, 'nope.')

// clearing
// console.clear('?')

// Viewing DOM Elements
window.onload = () => {
  const p = document.querySelector('p');
  console.log(p)
  console.dir(p)
}

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(dog.name)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(dog.name)
})

// counting
console.count('a')
console.count('b')
console.count('b')
console.count('a')

// timing
console.time('timer')
setTimeout(console.timeEnd.bind(null, 'timer'), 1000)
