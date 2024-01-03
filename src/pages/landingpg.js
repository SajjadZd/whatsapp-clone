import React from "react";
import Navbar from "../components/navbar";
import MessagePrivateComp from "../components/msgprivateComp";
import UsersConversation from "../components/usersconversation";
import InterfaceComp from "../components/interfaceComp";
import InfoCompp from "../components/infoCompp";

export default function LandingPage() {
  return (
   <>
    <Navbar/>
    <MessagePrivateComp/>
    <UsersConversation/>
    <InterfaceComp/>
    <InfoCompp/>
    </>
  );
}
