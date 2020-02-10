import React from 'react';
import  { useRef } from 'react';

function Search(props) {
  const inputEl = useRef(null);
  const onButtonClick = () => {
   let hashTagValue = inputEl.current.value;
   props.searchHashtag(hashTagValue);
  };
  return (
    <div className="seatch-container">
        <div className="input-container">
          <input ref={inputEl} type="text" onKeyUp={onButtonClick} className="form-input" placeholder="Enter #Hashtag" />
          <button className="button-dark"  onClick={onButtonClick}  type="button" >Search</button>
        </div>
  </div>
  );
}
export default Search;

