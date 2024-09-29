body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

.box1 {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s; 
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

table {
    width: 100%;
    margin: 10px 0;
}

.cpb {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cpb:hover {
    background-color: #0056b3; 
}

.vpainp {
    width: calc(100% - 100px);
    padding: 6px;
    border: none;  /* Removed the border from VPA/UPI input */
    background-color: #f4f4f4; /* Something to distinguish it */
}

.a1 {
    text-align: center;
    font-weight: bold;
}

.gtwImgs {
    width: 50px;
    height: auto;
}

.inp {
    width: calc(100% - 16px);
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn1, .btn2 {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn1 {
    background-color: #28a745;
    color: white;
}

.btn1:hover {
    background-color: #218838;
}

.btn2 {
    background-color: #dc3545;
    color: white;
}

.btn2:hover {
    background-color: #c82333;
}

/* Modal styles */
.modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0, 0, 0, 0.5); 
}

.modal-content {
    position: relative;
    background-color: white;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    border-radius: 5px;
    width: 80%; 
    animation: slideIn 0.5s; 
}

@keyframes slideIn {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Modal button styles */
#confirmButton, .closeModal {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease; 
}

.closeModal {
    background-color: #dc3545; 
}

#confirmButton:hover,
.closeModal:hover {
    background-color: #0056b3; 
}

/* Responsive styles */
@media (max-width: 600px) {
    .box1 {
        width: 100%; 
        padding: 10px; 
    }

    .modal-content {
        width: 90%; 
        margin: 10% auto; 
    }
}
