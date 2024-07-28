// // // src/Routes.js
// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import HomePage from './pages/HomePage';
// // import CryptoPostsPage from './pages/CryptoPostsPage';
// // // import GenAiPostsPage from './pages/GenAiPostsPage';
// // import PostDetailPage from './pages/PostDetailPage';
// // import GenAIPostsPage from './pages/GenAIPostsPage.js'; // Ensure this matches the filename


// // const AppRoutes = () => (
// //   <Routes>
// //     <Route path="/" element={<HomePage />} />
// //     <Route path="/crypto" element={<CryptoPostsPage />} />
// //     <Route path="/gen-ai" element={<GenAiPostsPage />} />
// //     <Route path="/post/:id" element={<PostDetailPage />} />
// //   </Routes>
// // );

// // export default AppRoutes;




// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// // import GenAIPostsPage from './pages/GenAIPostsPage';
// // import CryptoPostsPage from './pages/CryptoPostsPage';
// // // import NewsPostsPage from './pages/NewsPostsPage';
// // import PostDetailPage from './pages/PostDetailPage';
// // Import other necessary components here
// import GenAIPostsPage from './pages/GenAIPostsPage';
// import CryptoPostsPage from './pages/CryptoPostsPage'
// import PostDetailPage from './pages/PostDetailPage'
// import BlogPage from './pages/BlogPage';

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//        <Route path="/gen-ai" element={<GenAIPostsPage />}/>
//        <Route path="/blog" element={<BlogPage />}/>

//        <Route path="/crypto" element={<CryptoPostsPage />}/>
//        <Route path="/post/:id" element={<PostDetailPage />} />
//     </Routes>
//   );
// }

// export default AppRoutes;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenAIPostsPage from './pages/GenAIPostsPage';
import CryptoPostsPage from './pages/CryptoPostsPage';
import PostDetailPage from './pages/PostDetailPage';
import BlogPage from './pages/BlogPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gen-ai" element={<GenAIPostsPage />} />
      <Route path="/gen-ai/:id" element={<PostDetailPage />} />
      <Route path="/crypto" element={<CryptoPostsPage />} />
      <Route path="/crypto/:id" element={<PostDetailPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<PostDetailPage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
    </Routes>
  );
}

export default AppRoutes;
