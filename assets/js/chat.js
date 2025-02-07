//// DeepSeek ////
//// Can not use because of the deepseek CORS error ////

// async function sendMessage() {
//     let userMessage = document.getElementById("userInput").value;
//     if (!userMessage.trim()) return; // 如果输入为空，则不发送消息

//     let messagesDiv = document.getElementById("messages");
//     messagesDiv.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

//     // 清空输入框
//     document.getElementById("userInput").value = "";

//     try {
//         let response = await fetch("https://api.deepseek.com/v1", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer API_key" // 替换为你的 API Key
//             },
//             body: JSON.stringify({
//                 model: "deepseek-chat", // 使用 deepseek-chat 模型
//                 messages: [{ role: "user", content: userMessage }],
//                 max_tokens: 10, // 限制生成的最大 token 数
//                 stream: false // 如果不需要流式输出，设置为 false
//             })
//         });

//         let data = await response.json();

//         if (response.ok) {
//             let botReply = data.choices[0].message.content;
//             messagesDiv.innerHTML += `<p><strong>DeepSeek Bot:</strong> ${botReply}</p>`;
//         } else {
//             throw new Error(data.error.message || "Unknown error occurred.");
//         }

//         // 自动滚动到底部
//         messagesDiv.scrollTop = messagesDiv.scrollHeight;
//     } catch (error) {
//         messagesDiv.innerHTML += `<p style="color:red;"><strong>Error:</strong> ${error.message}</p>`;
//     }
// }



////  OPEN AI ////
// 确保在 HTML 元素加载后绑定事件
window.onload = () => {
    document.getElementById("sendButton").addEventListener("click", sendMessage);
};

// 定义 API_KEY
const API_KEY = "{{API_KEY}}"; // 由 GitHub Actions 替换

async function sendMessage() {
    const userMessage = document.getElementById("userInput").value.trim();
    if (!userMessage) return; // 空消息不发送

    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    document.getElementById("userInput").value = ""; // 清空输入框

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }],
                max_tokens: 50,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const botReply = data.choices[0].message.content;

        messagesDiv.innerHTML += `<p><strong>AI Bot:</strong> ${botReply}</p>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到底部
    } catch (error) {
        console.error("Error:", error);
        messagesDiv.innerHTML += `<p style="color:red;"><strong>Error:</strong> ${error.message}</p>`;
    }
}
