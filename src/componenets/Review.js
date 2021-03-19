import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

const [newData,setNewData] = useState(people[0]);
const {id,name,image,job,text} =newData;

function rightClicked()
{
  let Id=id+1;
  if(Id===people.length+1)
  Id=1;
  setNewData(people.filter(e=>e.id===Id)[0]);
}

function leftClicked()
{
  let Id=id-1;
  if(Id===0)
  Id=people.length;
  setNewData(people.filter(e=>e.id===Id)[0]);
}

function randomClicked()
{
  let rad= Math.floor(Math.random()*people.length+1)
  setNewData(people.filter(e=>e.id===rad)[0]);
}

  return (
    <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
            <button className="prev-btn">
              <FaChevronLeft onClick={leftClicked} />
            </button>
            <button className="next-btn">
              <FaChevronRight onClick={rightClicked}/>
            </button>
        </div>
            <button className="random-btn" onClick={randomClicked}>
              suprise me
            </button>
    </article>
  );
};

export default Review;
