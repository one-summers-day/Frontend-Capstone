import React from 'react';
import { ResponseBorder, HelperStyles } from '../../../dist/RnRStyles';
import useWindowDimensions from '../../shared/useWindowDimensions';

const RnRList = function (props) {
  if (props.reviewList.length == 0) {
    return (
      <div className = "reviewItem">
      <h3>{"Nothing but us chickens here. . ."}</h3>
      <p> {"Looks like you're the first one! Why not write a review? :)"} </p>
      <HelperStyles>
          <p>Helpful? Yes | Report</p>
      </HelperStyles>
      <hr></hr>
      </div>
    )
  }
  let myArray = [];
  const { height, width } = useWindowDimensions();
    myArray = props.reviewList.map(function (listItem) {
    const starConverter =
    {0 : "☆☆☆☆☆",
    1 : "★☆☆☆☆",
    2 : "★★☆☆☆",
    3 : "★★★☆☆",
    4 : "★★★★☆",
    5 : "★★★★★"}

    if (listItem.recommend && (listItem.response === "" || listItem.response === null)) {
      return (
        <div className = "reviewItem" key = {listItem.review_id}>
        <h3>{starConverter[listItem.rating]}</h3>
        <h3>{listItem.summary}</h3>
        <p> {listItem.body} </p>
        <p> ✓ I recommend this product </p>
        <HelperStyles>
            <p>Helpful? Yes | Report</p>
        </HelperStyles>
        <hr></hr>
        </div>
      )
    }

    else if (listItem.recommend && (listItem.response !== "" && listItem.response !== null)) {
        return (
          <div className = "reviewItem" key = {listItem.review_id}>
          <h3>{starConverter[listItem.rating]}</h3>
          <h3>{listItem.summary}</h3>
          <p> {listItem.body} </p>
          <p> ✓ I recommend this product </p>
          <ResponseBorder>
          <h4>Response:</h4>
          <p> {listItem.response} </p>
          </ResponseBorder>
          <HelperStyles>
            <p>Helpful? Yes | Report</p>
          </HelperStyles>
          <hr></hr>
          </div>
        )
      }
    else if (!listItem.recommend && (listItem.response === "" || listItem.response === null)){
      return (
      <div className = "reviewItem" key = {listItem.review_id}>
      <h3>{starConverter[listItem.rating]}</h3>
      <h3>{listItem.summary}</h3>
      <p> {listItem.body} </p>
      <HelperStyles>
            <p>Helpful? Yes | Report</p>
      </HelperStyles>
      <hr></hr>
      </div>
      )
    }

    else if (!listItem.recommend && (listItem.response !== "" && listItem.response !== null)) {
        return (
          <div className = "reviewItem" key = {listItem.review_id}>
          <h3>{starConverter[listItem.rating]}</h3>
          <h3>{listItem.summary}</h3>
          <p> {listItem.body} </p>
          <ResponseBorder>
          <h4>Response:</h4>
          <p> {listItem.response} </p>
          </ResponseBorder>
          <HelperStyles>
            <p>Helpful? Yes | Report</p>
          </HelperStyles>
          <hr></hr>
          </div>
          )
      }
    }
    )

  return (
    <>
      <h2> {props.reviewList.length} reviews out of {props.maxLength} total, sorted by relevance. </h2>
      {myArray}
    </>
  )
}

export default RnRList;
