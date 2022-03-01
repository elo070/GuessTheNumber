function getInputValue() {
    
    var btn = document.getElementById("btn_save");
    var text_value = document.getElementById("i");

    if (text_value.value != ""){
        btn.style.backgroundColor="green";
        btn.style.color="white";
    } else {
        btn.style.backgroundColor="black";
        btn.style.color="white";
    }

}


function getBtnValue () {

    var text_value = document.getElementById("i").value;

    /*Element in which the text will be exposed*/
    var element = document.createElement("div");
    element.setAttribute("id", "element-list")

    /*The text value in the element*/
    var text = document.createElement("p");
    element.innerHTML = text_value;    
    element.appendChild(text);

    var place_btns = document.createElement("div"); 
    var ele_btn_modify = document.createElement("button");
    var ele_btn_delete = document.createElement("button");
    ele_btn_modify.setAttribute("id", "btn-list");
    ele_btn_delete.setAttribute("id", "btn-list");

    place_btns.appendChild(ele_btn_modify);
    place_btns.appendChild(ele_btn_delete);

    ele_btn_modify.innerHTML = "M";
    ele_btn_delete.innerHTML = "D";

    element.appendChild(place_btns);

    document.getElementById("list").appendChild(element);
}