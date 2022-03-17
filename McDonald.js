function orderIs() {

    var myPromise = new Promise(function (resolve, reject) {

        alert("your order is accepted , it will be ready in 5 seconds");

        document.querySelector("#macId").textContent = Math.floor(Math.random() * 1000000);

        setTimeout(function () {
            resolve(done());
        }, 5000);
    });

    myPromise.then(function (res) {
        alert("Order is ready");
    });
}

function done() {

    var select1 = document.querySelector("#burger").checked;
    var select2 = document.querySelector("#fries").checked;
    var select3 = document.querySelector("#drink").checked;

    var img1 = document.createElement("img");
    img1.src = "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Big-Mac.jpg"

    var img2 = document.createElement("img");
    img2.src = "data:image/jpeg;base64,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"

    var img3 = document.createElement("img");
    img3.src = "data:image/jpeg;base64,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"

    if (select1 == true) {
        document.querySelector(".imgbox").innerHTML="";
        document.querySelector(".imgbox").append(img1);
    }
    if (select2 == true) {
        document.querySelector(".imgbox").innerHTML="";
        document.querySelector(".imgbox").append(img2);
    }
    if (select3 == true) {
        document.querySelector(".imgbox").innerHTML="";
        document.querySelector(".imgbox").append(img3);
    }
}
