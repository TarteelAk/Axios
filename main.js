async function getProduct() {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data;
    const prod = data.products;
    console.log(prod);
    const result = prod
      .map(function (ele) {
        return `
      <div class="product">
      <h2>${ele.title}</h2>
      <p>${ele.price}</p>
      <img src = "${ele.thumbnail}"/>
  
      </div>
  
      `;
      })
      .join("");
    document.querySelector(".products").innerHTML = result;
  }
  getProduct();
  