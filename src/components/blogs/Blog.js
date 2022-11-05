import { Box } from "@mui/system";
import React from "react";
import { MdDateRange } from "react-icons/md";

var blogList = [
  {
    title: "Blog 1",
    description:
      "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?We have a list of places to do just that.Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.",
    pic: "https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Blog 2",
    description:
      "Looking to take your team away on a retreat to enjoy awesome food and take .",
    pic: "https://plus.unsplash.com/premium_photo-1663936756798-ead5c2609856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Blog 3",
    description:
      "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?We have a list of places to do just that.Looking to take your team away on a retreat to enjoy awesome.",
    pic: "https://plus.unsplash.com/premium_photo-1663936756798-ead5c2609856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Blog 4",
    description:
      "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?We have a list of places to do just that.Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.",
    pic: "https://plus.unsplash.com/premium_photo-1663936756798-ead5c2609856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Blog 5",
    description:
      "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?We have a list of places to do just that.Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.",
    pic: "https://plus.unsplash.com/premium_photo-1663936756798-ead5c2609856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

function Blog() {
  return (
    <Box className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl tracking-tight leading-10  text-center">
        Welcome to my blogs section
      </h2>
      <Box className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 lg:max-w-5xl md:max-w-3xl max-w-md mx-auto">
        <PostCard
          title={blogList[0].title}
          description={blogList[0].description}
          pic={blogList[0].pic}
        />
        <PostCard
          title={blogList[1].title}
          description={blogList[1].description}
          pic={blogList[1].pic}
        />
        <PostCard
          title={blogList[2].title}
          description={blogList[2].description}
          pic={blogList[2].pic}
        />
        <PostCard
          title={blogList[3].title}
          description={blogList[3].description}
          pic={blogList[3].pic}
        />
      </Box>
    </Box>
  );
}

export default Blog;

function PostCard({ title, description, pic }) {
  const current = new Date();
  const date = current.toDateString();
  return (
    <>
      <Box className="mt-1 ">
        <Box className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
          <Box className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={pic} alt="image1" />
          </Box>
          <Box className="p-6">
            <h3 className="mt-2 leading-7 text-xl  text-gray-900">{title}</h3>
            <p className="mt-3 text-base leading-6 text-gray-600">
              {description}
            </p>
            <Box className="mt-6 flex items-center text-gray-600">
              <Box className="flex-shrink-0 text-sm">
                <MdDateRange />
              </Box>
              <Box className="ml-2 flex flex-1 justify-between">
                <p className="text-sm leading-5 font-medium">{date}</p>
                <a href="#">Readmore +</a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
