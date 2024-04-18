const item1 = document.createElement('li');
item1.textContent = 'First item';

const item2 = document.createElement('li');
item2.textContent = 'Second item';
item2.classList.add('my-item');

const item3 = document.createElement('li');
item3.textContent = 'Third item';

const targetElement = document.getElementById('target');

targetElement.append(item1)
targetElement.append(item2)
targetElement.append(item3)