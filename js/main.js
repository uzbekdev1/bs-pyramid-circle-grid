var items = 40;

$(function () {
    var cols = 4;
    var rows = Math.ceil(items / cols);
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

    for (var i = 0; i < rows; i++) {
        var row = $("<div class='row pgrid-row'/>");

        for (var j = 0; j < cols; j++) {
            row.append(template);
        }

        $("#pgrid1").append(row);
    }
});