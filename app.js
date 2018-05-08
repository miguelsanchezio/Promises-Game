let counter = 0;

document.querySelector('button').addEventListener('click', () => {
  ++counter;
});

setTimeout(() => {
  if(counter > 5) {
    alert(`You won. You clicked ${counter} times.`);
  } else {
    alert(`You lost. You clicked ${counter} times.`);
  }
}, 2000);