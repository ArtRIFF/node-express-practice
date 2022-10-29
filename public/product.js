const productsContainer = document.getElementById('products');

const sendRequest = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

const API = 'http://localhost:8000/api/';
sendRequest(`${API}products`)
  .then(({ data }) => {
    const {products} = data[0];
    console.log(products);
    products.forEach((item, id) => {
      const { label, prices, src, title } = item;
      const { status, text } = label;
      const { currency, retail, sale } = prices;
      productsContainer.insertAdjacentHTML('afterbegin', `
            <div class="card-box">
            <div class="col card" data-id="${id}">
                <div class="card-header">
                    <p class="badge ${status}">${text}</p>
                    <img src="${src}" class="card-img-top" alt="">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text card-price"><span class="retail">${retail}</span> ${sale} <span
                            class="currency">${currency}</span></p>
                </div>
            </div>
        </div>
`);
    });
  })


