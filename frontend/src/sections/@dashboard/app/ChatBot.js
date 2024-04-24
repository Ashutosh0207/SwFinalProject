// @mui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';

// components
export default function ChatBot({ title, subheader, ...other }) {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = async () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { content: newMessage, user: 'user' }]);
    setNewMessage('');

    const corsProxyUrl = 'http://localhost:3001/cors-proxy';

    try {
      // const response = await fetch(`https://swifttagapi.onrender.com/chatbot?message=${encodeURIComponent(newMessage)}`, {
      //   method: 'GET',
      // });
      const response = await fetch(`${corsProxyUrl}?url=${encodeURIComponent(`https://swifttagapi.onrender.com/chatbot?message=${newMessage}`)}`, {
      method: 'GET',
    });
      const data = await response.json();
      console.error("data",data);
      setMessages([...messages, { content: newMessage, user: 'user' }]);
      setMessages([...messages, { content: data.message, user: 'bot' }]);
    } catch (error) {
      console.error('Error sending/receiving messages:', error.message);
      setMessages([...messages, { content: 'Error communicating with the server.', user: 'bot' }]);
    }
  };

  return (
    <Card {...other} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardHeader title={title} subheader={subheader} style={{ flexShrink: 0 }} />

      <div style={{overflowY: 'auto',height: '300px', padding: '16px' }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.user === 'bot' ? 'left' : 'right',
              marginBottom: '8px',
              display: 'flex',
              justifyContent: message.user === 'bot' ? 'flex-start' : 'flex-end',
            }}
          >
            <Typography
              variant="body1"
              color={message.user === 'bot' ? 'textPrimary' : 'textSecondary'}
              style={{
                background: message.user === 'user' ? theme.palette.primary.light : theme.palette.info.light,
                padding: '8px',
                borderRadius: '8px',
                display: 'inline-block',
                maxWidth: '80%',
                overflowWrap: 'break-word',
              }}
            >
              {message.content}
            </Typography>
          </div>
        ))}
      </div>

      <div style={{ padding: '16px', marginTop: 'auto' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ marginBottom: '8px' }}
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
      </div>
    </Card>
  );
}

