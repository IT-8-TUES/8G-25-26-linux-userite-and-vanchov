document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoneNumber').value;
    const job = document.getElementById('jobOption').value;
    const resultDiv = document.getElementById('formResult');
    resultDiv.innerHTML = `
        <div class="success-box">
            <h3>Thank you, ${name}!</h3>
            <p>Your application for <strong>${job}</strong> has been received. We will contact you at <strong>${email}</strong> or <strong>${phone}</strong> soon!</p>
        </div>
    `;
    document.getElementById('jobForm').reset();
});