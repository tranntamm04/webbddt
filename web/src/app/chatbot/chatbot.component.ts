import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  isOpen = false;
  userInput = '';
  messages = [
    { sender: 'bot', text: 'Xin chào! Tôi có thể giúp gì cho bạn hôm nay? 😊' },
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const text = this.userInput.trim();
    this.messages.push({ sender: 'user', text });
    this.userInput = '';

    // Giả lập phản hồi của bot
    setTimeout(() => {
      this.messages.push({
        sender: 'bot',
        text: 'Cảm ơn bạn! Tôi sẽ chuyển thông tin này cho bộ phận hỗ trợ 💬',
      });
    }, 800);
  }
}
