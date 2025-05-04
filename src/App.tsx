import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AuthorizedLayout from "./components/AuthorizedLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import FeedProtected from "./components/FeedProtected";
import FeedPage from "./components/FeedPage";
import AppLayout from "./components/AppLayout";
import VideoDetail from "./components/VideoDetail";

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <Routes>
          <Route element={<AuthorizedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route element={<AppLayout />}>
              <Route
                path="feed"
                element={
                  <FeedProtected>
                    <FeedPage />
                  </FeedProtected>
                }
              />
              <Route path="feed/:id" element={<VideoDetail />} />
              <Route path="create" element={<Create />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
