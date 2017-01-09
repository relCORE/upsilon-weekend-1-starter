var totalSalary = 0;

$(function () {
  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });
    calcSalary(formData.employeeSalary);
    appendDom(formData);

    clearForm();
  });

  $('#myTable').on('click', '.deleteRow', function (event) {
    console.log('delete pressed');

        var tdValue = $(this).parent().parent().children(".pay").map(function (index, val) {
            return $(this).text();
        }).toArray();
        calcSalary(-parseInt(tdValue));
        console.log(tdValue);
        $(this).closest ('tr').remove ();

    event.preventDefault();
  });
});

function appendDom(emp) {
  // var $emp = $('<div class="employee"></div>'); // create a div jQuery object

  // $('#myTable tr:last').after('<tr><td>' + emp.employeeFirstName + '</td><td>' + emp.employeeLastName + '</td><td>' + emp.employeeIdNumber + '</td><td>' + emp.employeeJobTitle + '</td><td>' + emp.employeeSalary + '</td></tr>');
  // $emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add our employee data
  // $emp.append('<p>' + emp.employeeIdNumber + ' ' + emp.employeeJobTitle + ' ' + emp.employeeSalary + '</p');
  $('#myTable').append('<tr><td>' + emp.employeeFirstName + '</td><td>' + emp.employeeLastName + '</td><td>' + emp.employeeIdNumber + '</td><td>' + emp.employeeJobTitle + '</td><td class="pay">' + emp.employeeSalary + '</td><td><button class="deleteRow">Delete!</button></tr>');
  // $('#employees').append($emp); // append our div to the DOM
}

function clearForm() {
  $('form').find('input[type=text]').val('');
}

function calcSalary(salary) {
  totalSalary += parseInt(salary);
  console.log(totalSalary);
  $('#salaryTable td:last').text(totalSalary);
}
