$(document).ready(function () {
    ShowProductData();
});

function ShowProductData() {
    $.ajax({
        type: 'Get',
        url: '/Product/ProductList',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var obj = '';

            $.each(result, function (index, item) {
                obj += '<tr>';
                obj += '<td class="text-center">' + item.productID + '</td>';
                obj += '<td class="text-center">' + item.productName + '</td>';
                obj += '<td class="text-center">' + item.price + '</td>';
                obj += '<td class="text-center">' + item.quantity + '</td>';
                obj += '<td class="text-center">' + item.category + '</td>';
                obj += '<td class="text-center"><a href="#" class="btn btn-primary" onclick="Edit(\'' + item.productID + '\',\'' + item.productName + '\', \'' + item.price + '\', \'' + item.quantity + '\',\' ' + item.category + '\')" > Edit</a > | <a href="#" class="btn btn-danger" onclick="Delete(' + item.productID + ');">Delete</a></td>';
                obj += '</tr>';
            });
            $('#table_data').html(obj);
        },
        error: function () {
            alert("Cannot retreive Data");
        }
    });
};

$('#btnAddProduct').on('click', function () {
    $('#ProductModal').modal('show');
});

function AddProduct() {
    var objData = {
        ProductName: $('#productName').val(),
        Price: $('#price').val(),
        Quantity: $('#quantity').val(),
        Category: $('#category').val(),

    }

    $.ajax({
        url: '/Product/AddProduct',
        type: 'Post',
        data: objData,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        success: function (data, status, xhr) {
            console.log(data);
            alert('Data saved Successfully');
            ClearTextBox();
            ShowProductData();
            HideModalPopUp();
        },
        error: function () {
            alert('Data isnot saved');
        }
    });
}


function HideModalPopUp() {
    $('#ProductModal').modal('hide');
}

function ClearTextBox() {
        $('#productName').val(''),
        $('#price').val(''),
        $('#quantity').val(''),
        $('#category').val('')
}

function Delete(id) {
    $.ajax({
        url: '/Product/Delete?id=' +id,
        success: function (result, status, xhr) {
            alert('you want to delete record?');
            ShowProductData();
        },
        error: function () {
            alert('Couldnot Delete Record');
        }
    });
}

function Edit(id, productName,price, quantity, category) {
    
            $('#ProductModal').modal('show');
            $('#productID').val(id);
            $('#productName').val(productName);
            $('#price').val(price);
            $('#quantity').val(quantity);
            $('#category').val(category);
            $('#AddProduct').hide();
            $('#btnupdate').show();
       
}

function UpdateProduct() {
    var id = $('#productID').val();
    var objdata = {
       ProductID : id,
        ProductName: $('#productName').val(),
        Price: $('#price').val(),
        Quantity: $('#quantity').val(),
        Category: $('#category').val(),
    }
    $.ajax({
        url: '/Product/Update?id=' + id ,
        type: 'Post',
        data: objdata,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        success: function () {
            alert('Data Updated');
            ClearTextBox();
            ShowProductData();
            HideModalPopUp();
        },
        error: function () {
            alert("Cannot Update record");
        }

    });
};


//function UpdateProduct() {
//    var obj = {
//        ID : $('#productID').val(),
//        ProductName: $('#productName').val(),
//        Price: $('#price').val(),
//        Quantity: $('#quantity').val(),
//        Category: $('#category').val(),
//    }

//    $.ajax({
//        url: '/Product/Update',
//        type: 'post',
//        data: obj,
//        dataType: 'json',
//        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
//        success: function (data, status, xhr) {
//            console.log(data);
//            alert('Data updated successfully');
//            ClearTextBox();
//            ShowProductData();
//            HideModalPopUp();
//        },
//        error: function () {
//            alert('Coudnt update record');
//        }
//    });
//};


