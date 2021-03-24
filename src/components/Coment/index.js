import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

import "./style.css";

const Coment = ({ comment, likeClick }) => {
  const [thisComment, setThisComment] = useState(comment);
  const [liked, setLiked] = useState(false);

  const clickLikeHandle = (clickValue) => {
    setLiked(clickValue);

    const attr = clickValue ? +1 : -1;

    if (clickValue) {
      addIdStorage();
    } else {
      removeIdStorage();
    }

    const newComment = {
      ...thisComment,
      likes: thisComment.likes + attr,
    };

    likeClick(newComment);

    setThisComment(newComment);
  };

  useEffect(() => {
    const likedComments = getLikedComments();
    const isLiked = likedComments.includes(comment.id);
    setLiked(isLiked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLikedComments = () => {
    let likedComments;

    try {
      likedComments = JSON.parse(localStorage.getItem("likedComments"));
    }catch (e){
      likedComments = [];
    }

    if (likedComments && Array.isArray(likedComments)) {
      return likedComments;
    } else {
      return [];
    }
  };

  const setLikedComments = (arrayComments) => {
    localStorage.setItem("likedComments", JSON.stringify(arrayComments));
  };

  const removeIdStorage = () => {
    const likedComments = getLikedComments();
    const removedLikedComments = likedComments.filter(
      (commentId) => commentId !== thisComment.id
    );
    setLikedComments(removedLikedComments);
  };

  const addIdStorage = () => {
    const likedComments = getLikedComments();
    likedComments.push(thisComment.id);
    setLikedComments(likedComments);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString().split(",")[0];
  }

  return (
    <div className="comentContainer">
      <div>
        <h4>{thisComment.username}</h4>
        <p>{thisComment.comment}</p>
        <span>
          { `${thisComment.likes} curtidas -
          ${ formatDate(thisComment.createdAt)}` }
        </span>
      </div>
      {liked ? (
        <AiFillLike size={30} onClick={() => clickLikeHandle(!liked)} />
      ) : (
        <AiOutlineLike size={30} onClick={() => clickLikeHandle(!liked)} />
      )}
    </div>
  );
};

export default Coment;
