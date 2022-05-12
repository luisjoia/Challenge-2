$(document).ready(function () {
    selectProducts().then(res => populateProductsTable(res)).catch(err => console.error(err));
});



async function getProducts() {
    return axios({
      method: "get",
      url: "https://run.mocky.io/v3/6847db79-9c00-413c-9f3e-8be93676c454"
    }).then(res => res.data);
  }

async function selectProducts() {
    const products = await getProducts();
    var finalProducts = [];
    var downloadSpeed = 100;
    var nrOfPshones = 1;
    var mobileData = 2;
    var cost = 60;
    for(var i = 0 ; i<products.length ; i++){
        if(products[i].data.internet_download_speed_in_mbs < downloadSpeed){
            continue;
        }
        if(products[i].data.mobile_phone_count < nrOfPshones ){
            continue;
        }
        if(products[i].data.mobile_phone_data_in_gbps < mobileData ){
            continue;
        }
        if(products[i].data.price > cost ){
            continue;
        }
        //console.log(products[i])
        finalProducts.push(products[i]);
    }
    return finalProducts;
}

function populateProductsTable(products){

    var elementStr;
    var productsTable = $("#products-table");

    productsTable.find("tr:gt(0)").remove();

    products.forEach(function (element) {
        if(element.is_sponsored == "True"){
            
            elementStr =
            "<tr><td>" +
            element.name +
            "</td>" +

            "<td >" +
            element.data.tv_channels +
            "</td>" +

            "<td>" +
            element.data.internet_download_speed_in_mbs +
            "</td>" +

            "<td>" +
            element.data.mobile_phone_count +
            "</td>" +

            "<td >" +
            element.data.mobile_phone_data_in_gbps+" GBs" +
            "</td>" +

            "<td class='blink-bg'>" +
            element.data.price +
            "</td>" ;

            $(elementStr).appendTo(productsTable);

            return;
        }
        elementStr =
            "<tr><td>" +
            element.name +
            "</td>" +

            "<td>" +
            element.data.tv_channels +
            "</td>" +

            "<td>" +
            element.data.internet_download_speed_in_mbs +
            "</td>" +

            "<td>" +
            element.data.mobile_phone_count +
            "</td>" +

            "<td>" +
            element.data.mobile_phone_data_in_gbps+" GBs" +
            "</td>" +

            "<td>" +
            element.data.price +
            "</td>" ;

            $(elementStr).appendTo(productsTable)

    });
}

//selectProducts().then(res => populateProductsTable(res)).catch(err => console.error(err));