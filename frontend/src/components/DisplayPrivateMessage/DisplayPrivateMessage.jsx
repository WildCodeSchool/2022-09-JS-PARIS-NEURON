// import React, { useEffect, useState } from "react";

// export const DisplayPrivateMessage = () => {
//   const [Emails, setEmails] = useState([]);

//   useEffect(() => {
//     setEmails([
//       {
//         id: 1,
//         username: "Fufu",
//         sender: "Alien",
//         subject: "Test1",
//         content:
//           "Hi sweetlove ! How are you ? im fed up about all of this piece of shit can you help me about this problem please?",
//       },
//       {
//         id: 1,
//         username: "Yoh",
//         sender: "Alien",
//         subject: "Test2",
//         content:
//           "Hi my ducky ! How are you ? im fed up about all of this piece of shit can you help me about this problem please?",
//       },
//       {
//         id: 1,
//         username: "Oneblood",
//         sender: "Alien",
//         subject: "Test3",
//         content:
//           "Hi my ducky2 ! How are you ? im fed up about all of this piece of shit can you help me about this problem please?",
//       },
//       {
//         id: 1,
//         username: "Shyne",
//         sender: "Alien",
//         subject: "Test4",
//         content:
//           "Hi dear World! How are you ? im fed up about all of this piece of shit can you help me about this problem please?",
//       },
//     ]);
//   }, []);

//   return (
//     <div>
//       <input type="search" id="searchbar_emails" />
//       <button type="submit">Search</button>
//       {setEmails.map((Email) => {
//         return <div className="emails_container" key={Email} />;
//       })}
//       <DisplayPrivateMessage />
//     </div>
//   );
// };
