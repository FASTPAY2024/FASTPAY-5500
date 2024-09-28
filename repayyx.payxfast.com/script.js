document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    // Adding click event listener to each copy button
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-clipboard-target');
            const textToCopy = document.querySelector(targetId).value;

            navigator.clipboard.writeText(textToCopy).then(() => {
                alert(`Copied: ${textToCopy}`);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });

    const modal = document.getElementById("utrModal");
    const btn = document.getElementById("submitUtrButton");
    const closeSpan = document.getElementsByClassName("close")[0];

    // Open the modal when the user clicks the button
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
        modal.style.animation = 'fadeOut 0.5s'; 
        modal.addEventListener('animationend', () => {
            modal.style.display = "none";
            modal.style.animation = ''; 
        });
    }
});
