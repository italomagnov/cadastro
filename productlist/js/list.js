// Create a "close" button and append it to each list item
var myProductList = document.querySelector('.products__list-item');
var i;
for(i = 0; i < myProductList.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    myProductList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.get