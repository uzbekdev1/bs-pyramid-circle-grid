var items = 39;

$(function () {
    var cols = 4;
    var circle = `   <svg height="100" width="100">
                      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="white" />
                    </svg>`
    var pyramid = ` <div class="col pgrid-cell">
            <div class="row justify-content-center">
                <div class="col-auto">
                     ${circle}
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    ${circle}
                </div>
                <div class="col-auto">
                    ${circle}
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    ${circle}
                </div>
                <div class="col-auto">
                    ${circle}
                </div>
                <div class="col-auto">
                     ${circle}
                </div>
            </div>
        </div>`;

    for (var i = 0; i < Math.round(items / cols); i++) {
        var firstRow = $("<div class='row pgrid-row'/>");
        for (var j = 0; j < cols; j++) {
            firstRow.append(pyramid);
        }
        $("#pgrid1").append(firstRow);
    }

    var lastRow = $("<div class='row pgrid-row'/>");
    for (var j = 0; j < items % cols; j++) {
        lastRow.append(pyramid);
    }
    $("#pgrid1").append(lastRow);

});