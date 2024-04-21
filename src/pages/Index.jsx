import React, { useState } from "react";
import { Box, Button, Container, VStack, Heading, Textarea, Text, IconButton, useToast, Flex } from "@chakra-ui/react";
import { FaPaperPlane, FaWhatsapp, FaFacebook, FaTelegramPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const sendMessage = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Cannot send an empty message.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");

    // Here you would typically send the message to a backend service
    // and await the response from the chatbot algorithm.
    // For now, we'll just simulate a bot response.
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { text: "This is a simulated response.", sender: "bot" }]);
    }, 1500);
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Township Small Business Chatbot
        </Heading>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg" overflowY="auto" maxHeight="400px">
          {messages.map((message, index) => (
            <Text key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} m={1}>
              {message.text}
            </Text>
          ))}
        </Box>
        <Textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message here..." />
        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" onClick={sendMessage}>
          Send Message
        </Button>
        <Text>Or connect with us on:</Text>
        <Box>
          <IconButton aria-label="WhatsApp" icon={<FaWhatsapp />} m={1} colorScheme="whatsapp" />
          <IconButton aria-label="Facebook" icon={<FaFacebook />} m={1} colorScheme="facebook" />
          <IconButton aria-label="Telegram" icon={<FaTelegramPlane />} m={1} colorScheme="telegram" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
