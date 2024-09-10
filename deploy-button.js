(function() {
 
    var style = document.createElement('style');
    style.innerHTML = `
        .floating-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #12732b;
            color: #ffffff;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
            z-index: 1000;
        }
        .floating-button:hover {
            background-color: #e56e24;
        }
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            max-width: 600px;
            background-color: #2d3748;
            color: #e5e7eb;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1001;
        }
        .popup iframe {
            width: 100%;
            height: 400px;
            border: none;
        }
        .popup .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #e56e24;
            border: none;
            color: #ffffff;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

  
    var button = document.createElement('button');
    button.className = 'floating-button';
    button.innerHTML = '+';
    button.onclick = openPopup;

    var popup = document.createElement('div');
    popup.id = 'popup';
    popup.className = 'popup';
    popup.innerHTML = `
        <button class="close-button" onclick="closePopup()">×</button>
        <iframe src="https://example.com" title="Example"></iframe>
    `;

    document.body.appendChild(button);
    document.body.appendChild(popup);


    function openPopup() {
        document.getElementById('popup').style.display = 'block';
    }

    window.closePopup = function() {
        document.getElementById('popup').style.display = 'none';
    };
})();
