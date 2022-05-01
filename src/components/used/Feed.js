import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  arrayUnion,
  Timestamp,
  FieldValue,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { UserAuth } from "../../utlits/AuthContext";
import {
  AiOutlineHeart,
  AiOutlineSave,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { clear } from "@testing-library/user-event/dist/clear";

const Feed = () => {
  const [postList, setPostList] = useState([]);
  const [comment, setComment] = useState("");

  const { user } = UserAuth();
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getPost();
  });

  const array = new Array();

  // const hiddin = document.getElementById("hiddin");
  // const button = document.getElementById("bitton");

  // if(hiddin.style.display = 'none'){
  //   hiddin = "block";
  // }

  const q = query(collection(db, 'posts'), where('bio', '==', 'thomas'))
  const querySnapchot = getDocs(q)

  return postList.map((post) => (
    <div>
      <div className="feed">
        <div className="feed__up">
          <div className="feed__up__name">
            <span>
              <Avatar src={post?.userAvatar} />
            </span>
            <p>{post.name}</p>
          </div>
          <i>icon</i>
        </div>
        <div className="feed__img">
          <img src={post.imageUrl} />
        </div>
        <div className="feed__img__actions">
          <div className="feed__img__actions__reacts">
            <i
              un={user.displayName}
              pb={post.bio}
              up={post.name}
              onClick={(e) => {
                const likedusername = e.currentTarget.getAttribute("un");
                const postBio = e.currentTarget.getAttribute("pb");
                const userpost = e.currentTarget.getAttribute("up");

                setDoc(
                  doc(db, "posts", userpost + " " + postBio),
                  { likes: arrayUnion(likedusername) },
                  { merge: true }
                );
              }}
              id="heart"
            >
              <AiOutlineHeart />
            </i>
            <i>
              <AiOutlineComment />
            </i>
            <i>
              <AiOutlineShareAlt />
            </i>
          </div>
          <div className="feed__img__actions__savepost">
            <i>
              <AiOutlineSave />
            </i>
          </div>
        </div>
        <div className="feed__down__like__count">
          {post.likes ? (
            <>
              <p>{post.likes?.length} Likes</p>
            </>
          ) : (
            <p>0 Likes</p>
          )}
        </div>
        <div className="feed__down__bio">
          <h4>{post.name}</h4>
          <p>{post.bio}</p>
        </div>
        <div className="feed__down__days__left"></div>
        <div className="feed__down__comments1">
          <div id="hiddin" className="dynamic__comments">
            <h4>
              {/* {postList.map((e) => {
                return (
                  <td>
                    {e.comment?.map((en) => {
                      return <p>{Object.keys(en.obj)}</p>;
                    })}
                  </td>
                );
              })} */}
              {post.comment?.map((e) => {return <p>{Object.keys(e.obj)}</p>})}
            </h4>
            <p> </p>
            {/* <p>
              {postList.map((e) => {
                return (
                  <tr>
                  {e.comment?.map((en) => {
                    return <p>{en.comment}</p>;
                  })}
                  </tr>
                  );
                })}
              </p> */}
              <p>
              {post.comment?.map((e) => {return <p>{e.comment}</p>})}
              </p>
          </div>
        </div>

        {post.comment ? <div className="showallcomments">
          <i>
            {/* {postList.map((e) => {
              return e.comment?.length;
            })} */}
            {post.comment?.length}
            comments
          </i>
          <p id="bitton">show all</p>
        </div> : null}

        <div className="feed__down__add__comment">
          <div className="feed__down__add__comment__emoji">
            <i>emoji</i>
            <input
              placeholder="Add a comment..."
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="feed__down__add__comment__post">
            <p
              un={user.displayName}
              pb={post.bio}
              up={post.name}
              current={user.displayName}
              // onClick={(e) => {

              // const current = user.displayName
              // const postBio = e.currentTarget.getAttribute("pb");
              // const userpost = e.currentTarget.getAttribute("up");

              //   setDoc(
              //     doc(db, "posts", userpost + " " + postBio),
              //     { comments:arrayUnion({comment:comment, nameOfComment:current})},
              //     { merge: true }
              //   );
              // }}

              onClick={(e) => {
                const postBio = e.currentTarget.getAttribute("pb");
                const userpost = e.currentTarget.getAttribute("up");
                const current = user.displayName;
                var obj = {};
                obj[current] = comment;
                var array = new Array();
                array.push(obj);

                setDoc(
                  doc(db, "posts", userpost + " " + postBio),
                  { comment: arrayUnion({ obj, comment }) },
                  { merge: true }
                );
              }}
            >
              Post
            </p>
          </div>
        </div>
        <p className="date">{post.date}</p>
      </div>
    </div>
  ));
};

export default Feed;
