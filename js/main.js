var items = 39;

$(function () {
    var cols = 4;
    var template = ` <div class="col pgrid-cell">
            <div class="row justify-content-center">
                <div class="col-auto">
                    <div class="circle"></div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <div class="circle"></div>
                </div>
                <div class="col-auto">
                    <div class="circle"></div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <div class="circle"></div>
                </div>
                <div class="col-auto">
                    <div class="circle"></div>
                </div>
                <div class="col-auto">
                    <div class="circle"></div>
                </div>
            </div>
        </div>`;

    for (var i = 0; i < Math.round(items / cols); i++) {
        var firstRow = $("<div class='row pgrid-row'/>");
        for (var j = 0; j < cols; j++) {
            firstRow.append(template);
        }
        $("#pgrid1").append(firstRow);
    }

    var lastRow = $("<div class='row pgrid-row'/>");
    for (var j = 0; j < items % cols; j++) {
        lastRow.append(template);
    }
    $("#pgrid1").append(lastRow);

});