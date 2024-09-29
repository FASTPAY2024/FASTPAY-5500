function copyUPI() {
    var copyText = document.getElementById("upi_inp");
    copyText.select();
    document.execCommand("copy");
    alert("UPI Copy Success.");
}

function copyAmount() {
    const amountText = "₹ 4200";
    navigator.clipboard.writeText(amountText).then(() => {
        alert("Amount Copied: " + amountText);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("utrModal");
    const btn = document.getElementById("submitUtrButton");
    const closeSpan = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    closeSpan.onclick = function() {
        closeModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    document.getElementById("confirmButton").onclick = function() {
        alert("UTR submitted successfully!");
        closeModal();
    }

    document.querySelectorAll('.closeModal').forEach(button => {
        button.onclick = function() {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
    }
});
