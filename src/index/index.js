import { helloworld } from './helloworld.js';

const dom = document.querySelector('#time');

dom.innerHTML = helloworld();

if (module.hot) {
  module.hot.accept('./helloworld.js', function() {
    console.log('Accepting the updated printMe module!');
    dom.innerHTML = helloworld();
  })
}