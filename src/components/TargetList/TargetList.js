import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const TargetList = ({className, targetList, targetClick}) => {
    return(
<ul className={className}>
{
    targetList.map(target => (
        <li key={target.id}>
            <button 
            className="button"
            aria-label={target.name}
            role="button"
            onClick={()=> targetClick(target.id)}
            >
                {target.name}
            </button>
        </li>
    ))
}
</ul>
)
}

export const StyledTargetList = styled(TargetList)`
width: 50vw;
display: grid;
grid-template-columns: repeat(auto-fit, minmax( 300px, 1fr))
`



TargetList.propTypes = {
    targets: PropTypes.array.isRequired,
    targetClick: PropTypes.func.isRequired
  }