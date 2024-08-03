import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../Components/Miscellaneous/SideDrawer";
import MyChats from "../Components/MyChats";
import ChatBox from "../Components/ChatBox";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  if (user) {
    return (
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}

        <Box
          d="flex"
          // justifyContent="space-between"
          bg="linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%);"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    );
  } else {
    // Render a placeholder or loading indicator
    return <Box>Loading user information...</Box>;
  }
};

export default Chatpage;
