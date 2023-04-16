
window.onload = async () => {
    try {
        const prod = await axios.get("http://localhost:4000/admin/all-product");
        const prodData = prod.data;
        for (product of prodData) {
            setValueInUi(product, product.id);
        }
    } catch (err) {
        console.log(err);
    }
}
function addToDatabase(event) {
    event.preventDefault();
    const price = document.getElementById('price').value;
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    let obj = {
        price,
        name,
        category
    }
    const prod = axios.post('http://localhost:4000/admin/add-product', obj);
    try{
        console.log(prod);
        const id = prod.data.id
        setValueInUi(obj, id);
    }catch(err) {
        console.log(err);
    }
}
function setValueInUi(obj, id) {
    var del = document.createElement('input');
    del.className = 'btn delete btn-danger';
    del.type = 'button';
    del.value = 'Delete';
    del.style.marginLeft = '10px';

    del.onclick = () => {
        const exp = axios.delete('http://localhost:4000/admin/delete/'+ id);
        try{
            console.log(exp);
            // localStorage.removeItem(obj.desp);
            expList.removeChild(li);
        }catch(err) {
            console.log(err);
        };
    }

    var electronicList = document.getElementById('electronic');
    var foodList = document.getElementById('food');
    var serviceList = document.getElementById('service');
    let li = document.createElement('li');
    li.textContent = 'Price: ' + obj.price + ' Product Name : ' + obj.name + ' Category: ' + obj.category;
    li.appendChild(del);
    if (obj.category == "Electronic") {
        electronicList.appendChild(li);
    }else if(obj.category == "Food"){
        foodList.appendChild(li);
    }else {
        serviceList.appendChild(li);
    }


}