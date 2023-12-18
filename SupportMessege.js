document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById('searchInput');
    const supportDiv = document.getElementById('support-content');


    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            const messageContainer = createMessageContainer(messageText);
            supportDiv.appendChild(messageContainer);

            // Спроксуємо прокрутку вниз, щоб бути в кінці чату
            supportDiv.scrollTop = supportDiv.scrollHeight;

            // Очистимо поле введення
            messageInput.value = '';
        }
    }

    function createMessageContainer(messageText) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');

        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');

        const userAvatar = document.createElement('img');
        userAvatar.src = 'icon/Subtract.svg';
        userAvatar.alt = 'User Avatar';

        const userName = document.createElement('h1');
        userName.textContent = 'Ім’я користувача';

        const timeSpan = document.createElement('span');
        timeSpan.textContent = 'Тільки що'; // TODO: Замініть на реальний час

        userInfo.appendChild(userAvatar);
        userInfo.appendChild(userName);
        userInfo.appendChild(timeSpan);

        const messageTextElement = document.createElement('div');
        messageTextElement.classList.add('message-text');
        messageTextElement.textContent = messageText;

        messageContainer.appendChild(userInfo);
        messageContainer.appendChild(messageTextElement);

        return messageContainer;
    }
});
