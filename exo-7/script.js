console.log("exercice 7");
var jsonDatas = getData();
$(document).ready(function () {

  addLineToTable();

  

});

function addLineToTable() {
  let $newTbody = $("tbody");
  $newTbody.empty();

  jsonDatas.forEach(function (jsonData) {
    let $tr = $("<tr>");
    createTdLine($tr, jsonData.id);
    createTdLine($tr, jsonData.name.first);
    createTdLine($tr, jsonData.name.last);
    createTdLine($tr, jsonData.email);
    createTdLine($tr, jsonData.phone);
    $newTbody.append($tr);
  });

}

function createTdLine($tr, data) {
  let $td = $("<td>");
  $td.text(data);
  $tr.append($td);

}

function getData() {
  return data; // data is defined in DATA.js file
}