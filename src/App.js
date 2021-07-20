import React, {useState} from 'react';
import './App.css';
 
function Post({postsName, postsDate}) {
  const [likeBtn, setLikeBtn] = useState(0);
  return (
    <div>
      <h3>{postsName}</h3>
      <span>{postsDate}</span>
      <span 
        onClick={() => {
          setLikeBtn(likeBtn + 1);
        }}
      >
        &nbsp;
          👍
      </span>
      {likeBtn}

      <hr />
    </div>
  );
}

function App() {
  let posts = [
    {postsName: "스포츠 관련", postsDate: "2월 17일 발행"},
    {postsName: "리액트 스터디", postsDate: "7월 20일 발행"},
    {postsName: "책 관련", postsDate: "4월 8일 발행"}
  ];
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>Yeson's Blog</div>
      </div>
      <div className="list">
        {posts.map((current) => (
          <Post postsName={current.postsName} postsDate={current.postsDate} />
        ))}
      </div>
    </div>
  );
}


export default App;