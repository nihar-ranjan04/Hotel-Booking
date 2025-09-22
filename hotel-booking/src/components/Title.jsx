import React from 'react'

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div>
      <h1 className={`text-4xl md:text-[40px]`}>
        {title}
      </h1>
      <p>
        {subTitle}
      </p>
    </div>
  )
}

export default Title
