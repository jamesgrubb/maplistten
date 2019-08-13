import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TargetList = ({ className, targetList, targetClick }) => {
  return (
    <>
      <h3>TargetList</h3>
      <ul className={className}>
        {targetList.map(target => (
          <li key={target.id}>
            <button
              className="button"
              aria-label={target.fields.name}
              onClick={() => targetClick(target)}
            >
              {target.fields.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const StyledTargetList = styled(TargetList)`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background: red;
`;

TargetList.propTypes = {
  targetList: PropTypes.array.isRequired,
  targetClick: PropTypes.func.isRequired
};
