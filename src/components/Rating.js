import React from "react";
import PropTypes from "prop-types";

export default function Rating({value,color}) {
    return(
        <div className='rating'>
            <span>
                <i style={{color}} className={value >=1 ? 'fas fa-star' : value >=0.5 ? 'fas fa-star-half' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color}} className={value >=2 ? 'fas fa-star' : value >=1.5 ? 'fas fa-star-half' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color}} className={value >=3 ? 'fas fa-star' : value >=2.5 ? 'fas fa-star-half' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color}} className={value >=4 ? 'fas fa-star' : value >=3.5 ? 'fas fa-star-half' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color}} className={value >=5 ? 'fas fa-star' : value >=4.5 ? 'fas fa-star-half' : 'far fa-star'} />
            </span>

        </div>
    )

}

Rating.defaultProps = {
    color: '#ffc107'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    color: PropTypes.string
}