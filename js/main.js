$(document).ready(function() {
    loadTable()
});

function loadTable(type = null) {
    $.ajax({
        url: 'data/index.json',
        type: "Get",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            let dataJson = JSON.parse(JSON.stringify(data));
            let allData = dataJson.allData
            filterRows(type, allData)

            let dataFilterAM = allData.filter((item) => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'].includes(item.name.charAt(0).toLowerCase()))
            let dataFilterNZ = allData.filter((item) => ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].includes(item.name.charAt(0).toLowerCase()))

            $('.AMCount').html(dataFilterAM.length)
            $('.NZCount').html(dataFilterNZ.length)
        },
        error: function() {
            alert("json not found");
        },
        statusCode: {
            404: function() {
                alert('There was a problem with the server.  Try again soon!');
            }
        }
    });
}

function filterRows(type, allData) {
    let data = []
    if (type == 1) {
        data = allData.filter((item) => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'].includes(item.name.charAt(0).toLowerCase()))

    } else if (type == 2) {
        data = allData.filter((item) => ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].includes(item.name.charAt(0).toLowerCase()))
    } else {
        data = allData
    }
    $('table').html('')
    constructTable(data, $('table'))
}

function constructTable(list, selector) {

    // Getting the all column names
    var cols = generateHeaders(list, selector);

    // Traversing the JSON data
    for (var i = 0; i < list.length; i++) {
        var row = $('<tr/>');
        for (var colIndex = 0; colIndex < cols.length; colIndex++) {
            var val = list[i][cols[colIndex]];
            // If there is any key, which is matching
            // with the column name
            if (val == null) {
                val = "";
            }
            let searchVal = $('#search').val().toLowerCase()
            if (colIndex == 0) {
                let searchString = val.toLowerCase()
                let tempSearch = val.toLowerCase()

                if (searchVal !== '' && searchVal !== undefined && searchString.includes(searchVal)) {
                    row.append($("<td class='active' />").html(val));
                } else {
                    row.append($('<td />').html(val));
                }
            } else {
                row.append($('<td />').html(val));
            }
        }

        // Adding each row to the table
        $(selector).append(row);
    }
}

function generateHeaders(list, selector) {
    var columns = [];
    var header = $('<tr/>');

    for (var i = 0; i < list.length; i++) {
        var row = list[i];
        for (var k in row) {
            if ($.inArray(k, columns) == -1) {
                columns.push(k)
                // Creating the header
                const text = k;
                const result = text.replace(/([A-Z])/g, " $1");
                const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
                header.append($('<th/>').html(finalResult));
            }
        }
    }

    // Appending the header to the table
    $(selector).append(header);
    return columns;
}