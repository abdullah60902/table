function datat() {
    var x = document.querySelector("#DT");
    var y = x.value;
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    var z = 1;
    while (z <= 10) {
        var paragraph = document.createElement("p");
        paragraph.textContent = `${y} x ${z} = ${y * z}`;
        resultDiv.appendChild(paragraph);
        z++;
    }
}
