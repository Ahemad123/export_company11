const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

// Simulated AI Responses
const getResponse = (message) => {
    message = message.toLowerCase();
    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! Welcome to Serani Export. How can I assist you today?";
    } else if (message.includes("shipping") || message.includes("delivery")) {
        return "We offer global shipping solutions. Delivery times vary by destination but typically range from 2-4 weeks for sea freight.";
    } else if (message.includes("product") || message.includes("rice") || message.includes("spices")) {
        return "We export premium quality rice, spices, and textiles. You can view our full catalog on the Products page.";
    } else if (message.includes("contact") || message.includes("email")) {
        return "You can reach us at info@seraniexport.com or use the contact form on our website.";
    } else if (message.includes("quote") || message.includes("price")) {
        return "To get a quote, please visit our Products page and click 'Request Quote' on the items you're interested in.";
    } else {
        return "I'm not sure I understand. Could you please rephrase your question? You can ask about our products, shipping, or how to contact us.";
    }
};

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const messageElement = chatElement.querySelector("p");

    // Simulate typing delay
    setTimeout(() => {
        const response = getResponse(userMessage);
        messageElement.textContent = response;
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Display "Thinking..." message while waiting for response
    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
