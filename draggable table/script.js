var tableBody = document.getElementById("tableBody");

var draggedRow = null;

var rows = tableBody.querySelectorAll("tr");

rows.forEach(function (row) {
  row.addEventListener("dragstart", function () {
    draggedRow = row;

    row.classList.add("dragging");
  });

  row.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  row.addEventListener("drop", function (event) {
    event.preventDefault();

    if (draggedRow != row) {
      var allRows = Array.from(tableBody.children);

      var draggedIndex = allRows.indexOf(draggedRow);
      var targetIndex = allRows.indexOf(row);

      if (draggedIndex < targetIndex) {
        tableBody.insertBefore(draggedRow, row.nextSibling);
      } else {
        tableBody.insertBefore(draggedRow, row);
      }
    }
  });

  row.addEventListener("dragend", function () {
    row.classList.remove("dragging");
    draggedRow = null;
  });
});
