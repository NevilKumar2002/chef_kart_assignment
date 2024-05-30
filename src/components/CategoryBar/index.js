import React from 'react'
import './style.css'

const categories = ['Indian', 'Chinese', 'Italian', 'Korean', 'Japanese', 'Spanish', 'French', 'Thai']

const CategoryBar = () => {
  return (
        <div id='category-bar'>
        {categories.map((category, index) => {
            return (
                <div key={index} className='category'>
                    {category}
                </div>
            )
        })}
    </div>
  )
}

export default CategoryBar;