import React from 'react';

const UCenter = (props) => {
  console.log(props);
  return (
    <div>UCenter:{props.match.params.id}--->{props.match.params.name}</div>
  )
}

export default UCenter