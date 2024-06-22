// import Chai from "./components/Chai";

import PropsCard from "./components/PropsCard";

// import UserAPI from "./components/UserAPI";

// import Counter from "./components/Counter";


function App() {
  return (
    <>
      <h1>Chai aur ReactJS</h1>
      {/* <Chai /> */}
      {/* <Counter /> */}
      {/* <UserAPI /> */}
      <PropsCard
        imgSrc={
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        }
        name={"Delba"}
        text={"lorem lorem  lorem"}
        btnText={"Visit"}
      />
      <PropsCard
        imgSrc={
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMSL_hmGcqhOqRh2ldZW1YvDTL1b5oajfA0H3XT9nA3Tl9KHHVfzqRNrCl3PwVpHwG_ovsgIva2cDwrGBcauVtPT2oHBAhnHfXe6KArg"
        }
        name={"SRK"}
        text={"last of the stars"}
        btnText={"Button"}
      />
    </>
  );
}

export default App;


