// // /* eslint-disable jsx-a11y/no-static-element-interactions */
// // /* eslint-disable jsx-a11y/click-events-have-key-events */
// import React, { useEffect, useState } from "react";
// // import { Search } from "@components";
// // import Carousel from "react-grid-carousel";

// import "./TopicsDisplay.scss";

// export const ProfilDisplay = () => {

//   const [toggleState, setToggleState] = useState(1);

// //   const TopicsList = [
// //     {
// //       breakpoint: 767,
// //       cols: 2,
// //       rows: 1,
// //       gap: 5,
// //       loop: true,
// //     },
// //   ];

// //   const TabsList = [
// //     {
// //       id: 1,
// //       tab: "Neurons Favoris",
// //     },
// //     {
// //       id: 2,
// //       tab: "Topics Favoris",
// //     },
// //     {
// //       id: 3,
// //       tab: "Tags Favoris",
// //     },
// //     {
// //       id: 4,
// //       tab: "Messagerie",
// //     },
// //     {
// //       id: 5,
// //       tab: "Paramètres",
// //     },
// //   ];

//   return (
//     <div className="tabs_display">

//       <div className="tabs_display__tabs">
//         <div className="tabs active-tabs">
//        {TabsList.map((tab) => {
// //         return (
// //           <div
// //             className={
// //               open === tab.id ? `tab_category_open` : `tab_category_close`
// //             }
// //             key={tab.id}
// //           >
// //             <div
// //               className="tab_category_name"
// //               onClick={() => handleSwitch(tab)}
// //             >
// //               {tab.name}
// //             </div>
// //             <Carousel
// //               cols={10}
// //               rows={1}
// //               gap={10}
// //               responsiveLayout={TabsList}
// //               mobileBreakpoint={376}
// //               showDots
// //             >
// //               {topics
// //                 .filter((topic) => topic.categories_id === category.id)
// //                 .map((topic) => {
// //                   return (
// //                   <Carousel.Item key={topic.id}>
// //                       <div className="categories_category_content">
// //                         <TopicCard
// //                           title={topic.title}
// //                           summary={topic.summary}
// //                           date={topic.date}
// //                           tag={topic.name}
// //                         />
// //                       </div>
// //                     </Carousel.Item>
// //                   );
// //                 })}
// //             </Carousel>
// //           </div>
// //         );
// //       })}
// //       <div className="categories_filter">
// //         <Search
// //           placeholder="rechercher un topic"
// //           handleChange={handleChange}
// //           handleSearch={handleSearch}
// //           value={searchTag}
// //         />
// //       </div>
// //       <div className="categories_showByTags">
// //         {(topicsByTags.length && (
// //           <Carousel
// //             cols={10}
// //             rows={1}
// //             gap={10}
// //             responsiveLayout={TopicsList}
// //             mobileBreakpoint={376}
// //             showDots
// //           >
// //             {topicsByTags.map((topic) => {
// //               return (
// //                 <Carousel.Item key={topic.id}>
// //                   <div className="categories_category_content">
// //                     <TopicCard
// //                       title={topic.title}
// //                       summary={topic.summary}
// //                       date={topic.date}
// //                       tag={topic.name}
// //                     />
// //                   </div>
// //                 </Carousel.Item>
// //               );
// //             })}
// //           </Carousel>
// //         )) ||
// //           (!topicsByTags.length && (
// //             <div
// //               className={
// //                 !open
// //                   ? "categories_category_missing_visible"
// //                   : "categories_category_missing_hidden"
// //               }
// //             >
// //               <span>rien pour le moment...</span>
// //             </div>
// //           ))}
// //       </div>
// //     </div>
// //   );
// };
