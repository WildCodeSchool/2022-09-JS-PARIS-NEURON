// import Carousel from "react-grid-carousel";
// import React, { useEffect, useState } from "react";
// import "./TagsFavorites.scss";

// export const TagsFavorites = () => {
//   const [tags, setTags] = useState([]);

//   useEffect(() => {
//     setTags([
//       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//     ]);
//   }, []);

//   const tagsList = [{ name: "PHP" }, { name: "python" }, { name: "issues" }];

//   const tagsFavList = [
//     {
//       breakpoint: 720,
//       cols: 3,
//       rows: 4,
//       gap: 2,
//       loop: true,
//     },
//     {
//       breakpoint: 1440,
//       cols: 6,
//       rows: 2,
//       gap: 2,
//       loop: true,
//     },
//     {
//       breakpoint: 2160,
//       cols: 10,
//       rows: 1,
//       gap: 2,
//       loop: true,
//     },
//   ];

//   return (
//     <div className="carousel">
//       <Carousel
//         cols={10}
//         rows={1}
//         gap={10}
//         responsiveLayout={tagsFavList}
//         mobileBreakpoint={0}
//         showDots
//       >
//         {tagsList.map((tags) => (
//           <Carousel.Item key={tagsList}>
//             <div className="item">{tags.name}</div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };
