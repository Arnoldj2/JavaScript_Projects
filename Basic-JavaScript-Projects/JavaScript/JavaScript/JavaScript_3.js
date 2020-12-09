function displayType(chest)  {

  var chestType = chest.getAttribute("data-chest-type");    //assigned and called for data-attribute

  alert(chestType + " are in the " + chest.innerHTML); 
}