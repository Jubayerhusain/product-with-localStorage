console.log('Your js fine doen to added')

const getInputField = () => {
    const productInput = document.getElementById('product-input');
    const productQuantity = document.getElementById('quantity-input');
    const product = productInput.value;
    const quantity = productQuantity.value;
    productInput.value = '';
    productQuantity.value = '';
    console.log(product, quantity)
    displayInputValue(product, quantity)
    
}
const displayInputValue = (product, quantity) => {
    const products = product;
    const quantitys = quantity;
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText=`
     ${products}: ${quantitys}
    `;
    productContainer.appendChild(li);
}