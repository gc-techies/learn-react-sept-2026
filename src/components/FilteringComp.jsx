import React from 'react'

const FilteringComp = ({ categories, onFilter, currentCategory }) => {
    return (
        <div>
            <h5>Filter by Category</h5>
            <ul className="list-group">
                {categories.map((category, index) => (
                    <li className={`list-group-item ${currentCategory === category ? 'active' : ''}`} key={index} onClick={() => onFilter(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilteringComp;