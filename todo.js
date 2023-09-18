const d = new Date();
document.getElementById("date").innerHTML =  d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear() ;

function newElement() {
    var li = document.createElement("li");
    var btn = document.createElement("span");
    var cls = document.createElement("span");
    var inputValue = document.getElementById("input").value;
    cls.innerHTML = "<i onclick ='deletePost(this)'   class='fa-regular fa-circle-xmark'></i>";
    btn.innerHTML = '<input type="checkBox" id="checkedList" onclick="checkList(this)">';
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.appendChild(btn);
    li.appendChild(cls); 
      if(inputValue === '') {
        alert("you must write something!");

    }else {
        document.getElementById("list").appendChild(li);
    
    }
    document.getElementById("input").value = "";
}
  
    let deletePost = (e) => {
    e.parentElement.parentElement.remove();

  };
  
  function checkList(e)  {
    if(e.checked){
    e.parentElement.parentElement.style.textDecoration = "line-through";
    }else {
      e.parentElement.parentElement.style.textDecoration ="none";
    }
    }
   function closeElement() {
    var listItems = document.getElementsByTagName('LI');
    while(listItems.length > 0){
        var lastListItem = listItems[listItems.length - 1];
        lastListItem.parentNode.removeChild(lastListItem);
    }
    }