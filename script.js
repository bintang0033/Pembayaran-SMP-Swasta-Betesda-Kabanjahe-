document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const paymentType = document.getElementById('paymentType').value;
    const amount = document.getElementById('amount').value;

    const tableBody = document.getElementById('paymentTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = studentName;
    cell2.textContent = paymentType;
    cell3.textContent = amount;

    // Reset form
    document.getElementById('paymentForm').reset();
});