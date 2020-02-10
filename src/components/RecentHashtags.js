import React, { useState } from 'react';
import { Link } from 'react-router-dom'
function RecentHashtags(props) {
  return (
    <div className="hashtag-container">
      <ul>
        {props.listOfHashtags && props.listOfHashtags.length? props.listOfHashtags.map((item,index)=>{
          return(<li key={index}><Link to={{
            pathname:`/single`, 
            id: index, 
            item: {
                hashTag: `#${item.u}`
            }}} >#{item.u}</Link></li>)
        }):''}
      </ul>
    </div>
  );
}
export default RecentHashtags;

