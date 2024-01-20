import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function CreatePosts() {
  const { Data } = useContext(AuthContext);
  const [formData, setFormData] = useState(new FormData());

  const HandlePostInput = (e) => {
    const { name, value } = e.target;
    if (name === "postMedia") {
      formData.set([name], e.target.files[0]);
    } else {
      formData.set(name, value);
    }
  };
  // console.log(Data);

  const HandlePosts = async (e) => {
    e.preventDefault();
    if (Data.length > 0) {
      formData.set("username", Data[0].username);
    }
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/user/posts",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData(new FormData());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postContainer">
      <h1>Posts</h1>
      <form onSubmit={HandlePosts}>
        <input
          type="file"
          name="postMedia"
          value={formData.postMedia}
          placeholder="Media"
          onChange={HandlePostInput}
          multiple
        />
        <input
          type="text"
          name="caption"
          value={formData.caption}
          placeholder="Caption"
          onChange={HandlePostInput}
        />
      </form>
      <button onClick={HandlePosts} disabled={formData.postMedia === ""}>
        Post
      </button>
    </div>
  );
}
