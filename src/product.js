var products = [
  { id: "100", name: "iPhone 4S", brand: "Apple", os: "iOS" },
  { id: "101", name: "Moto X", brand: "Motorola", os: "Android" },
  { id: "102", name: "iPhone 6", brand: "Apple", os: "iOS" },
  { id: "103", name: "Samsung Galaxy S", brand: "Samsung", os: "Android" },
  { id: "104", name: "Google Nexus", brand: "ASUS", os: "Android" },
  { id: "105", name: "Surface", brand: "Microsoft", os: "Windows" },
];

var table =
  "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th>";
display();
function display() {
  products.forEach((element) => {
    table += `<tbody id="tbdy"><tr><td>${element.id} </td><td>${element.name} </td><td>${element.brand}
             </td><td>${element.os} </td><td> <a href="#" class="hide">X</a></td></tr>`;
  });
  table += "</tbody></table>";
  document.getElementById("table").innerHTML = table;
}

$("#table").on("click", ".hide", function () {
  $(this).closest("tr").hide();
});

$(document).ready(function () {
  $(".search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tbdy tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $(".OS").on("change", function () {
    searchterm = $(this).val();
    // console.log(searchterm);
    $("#tbdy tr").each(function () {
      var sel = $(this);
    //   console.log(sel);
      var txt = sel.find("td:eq(3)").text();
      console.log(txt);
      if (searchterm != "all") {
        if (txt.indexOf(searchterm) === -1) {
            // console.log(txt.indexOf(searchterm));
          $(this).hide();
        } else {
          $(this).show();
        }
      } else {
        $("#tbdy tr").show();
      }
    });
  });

  $(".Brand").on("change", function () {
    searchterm = $(this).val();
    
    $("#tbdy tr").each(function () {
      var sel = $(this);
      var txt = sel.find("td:eq(2)").text();
      if (searchterm != "all") {
        if (txt.indexOf(searchterm) === -1) {
          $(this).hide();
        } else {
          $(this).show();
        }
      } else {
        $("#tbdy tr").show();
      }
    });
  });
});
