import React, { useState } from "react";
import './likeButton.css'



function LikeButton(props) {
  const [isLike,setisLike]= useState('button')
  const [Like,setLike]= useState('icon')
  const [Align,setAlign] = useState()
  // const LikeButton = () =>{
  //   setisLike('new-button')
  // }
  function LikeButton(){
    setisLike('new-button');
    setLike('new-icon');
    setAlign('new-align')
  }


    return (
      <div className="text-center mt-5">
        <button type="button" className={`${isLike}`}onClick={LikeButton}> 
          <i  className={`fa-solid fa-heart ${Like} `} onClick={LikeButton}></i>
          
          <span className={`${Align}`}onClick={LikeButton}>  like</span>

        </button>
      </div>
    );
}
export default LikeButton;