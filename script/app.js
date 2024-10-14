// console.log('Your js fine doen to added')

const getInputField = () => {
    const productInput = document.getElementById('product-input');
    const productQuantity = document.getElementById('quantity-input');
    const product = productInput.value;
    const quantity = productQuantity.value;
    productInput.value = '';
    productQuantity.value = '';
    // console.log(product, quantity);
    displayInputValue(product, quantity);
    saveListLocalStorage(product, quantity);

}
const displayInputValue = (product, quantity) => {
    const products = product;
    const quantitys = quantity;
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `
     ${products}: ${quantitys}
    `;
    productContainer.appendChild(li);
}

// get the product from localStorage (if) it has alredy stored the localStorage and (else) return the empty object..

const getStoredlist = () => {
    let list = {};
    const storedList = localStorage.getItem('list');
    if (storedList) {
        list = JSON.parse(storedList)
    }
    return list;
}
// getStoredlist();
const saveListLocalStorage = (product, quantity) => {
    const list = getStoredlist();
    list[product] = quantity;
    const listSting = JSON.stringify(list);
    localStorage.setItem('list', listSting);
}

const getTheProductFromLocalstorage = () => {
    const savedList = getStoredlist();
    for (const product in savedList) {
        const quantity = savedList[product];
        displayInputValue(product, quantity);

    }
}
getTheProductFromLocalstorage();