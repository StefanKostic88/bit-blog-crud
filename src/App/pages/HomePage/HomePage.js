// import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ContentWraper, PostItem } from "../../components";
import { dummyArr } from "../../../enitities/postsData/dummyPostsData";
import { getPostsData } from "../../../services/fetchFunctions/fetchFunctions";
import { Typography } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    //initialize all posts on home page
    // getPostsData(setAllPosts);
  }, []);

  //guard clause
  // if (!allPosts) return <div>Loading...</div>;

  return (
    <ContentWraper pageTitle="POSTS">
      <Typography
        variant="h5"
        gutterBottom
        sx={{ cursor: "pointer", textAlign: "right" }}
        onClick={() => navigate("/posts/new")}
      >
        Create New Post
      </Typography>
      <div>
        {dummyArr.map((post, index) => (
          <PostItem key={`${post.postTitle}-${index}`} {...post} />
        ))}
      </div>
    </ContentWraper>
  );
};

export default HomePage;
