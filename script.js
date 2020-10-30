const ul = document.querySelector('#list');

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {

    e.preventDefault();

     const quantity = document.querySelector('#qty');

     const product = document.querySelector('#product');

    addContent(product.value, quantity.value);

    quantity.value = '';

    product.value = '';
});



const addContent = (product, quantity) => {

    const li = document.createElement('li');

    li.append(`${quantity} ${product}`);

    ul.appendChild(li);

}