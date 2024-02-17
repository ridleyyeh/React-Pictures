import React from 'react'

const Picture = ({data}) => {
  return <div className="picture">
    <p>{data.photographer} </p>
    <div className="imageContainer">
      <img src={data.src.large} alt="" />
    </div>
    <p>Click <a target='_blank' href={data.src.large} > HERE </a> to download
    </p>
  </div>
}

export default Picture