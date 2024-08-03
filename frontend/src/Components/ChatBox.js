import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="stretch"
      p={3}
      bg="linear-gradient( 135deg, #FEB692 10%, #EA5455 100%);"
      position="absolute"
      borderRadius="lg"
      w="67%" // Span the full width
      h="88%" // Ensure full height
      top="68px"
      bottom="30px"
      // borderRadius="lg"
      // borderWidth="3px"
      left="32.2%" // Position to the right of the white box (31% from the right edge)
      mr={4} // Add right margin
      mb={4} // Add bottom margin
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
