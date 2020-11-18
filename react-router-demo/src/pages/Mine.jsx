import React from 'react';
import qs from 'querystring'

const Mine = (props) => {

  // const params = new URLSearchParams(props.location.search)
  // console.log(params.get("id"));
  // console.log(params.get("name"));
  const value = qs.parse(props.location.search)
  console.log(value);
  console.log(value.id);


  return (
    <div>Mine</div>
  )
}

export default Mine