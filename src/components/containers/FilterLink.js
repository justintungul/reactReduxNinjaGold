import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../../actions/actions';

// LESSON 22 extracting container components (FilterLink)
// functional component react 14+ method of creating components
const Link = ({
    active,
    children,
    onClick
}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href='https://#'
            onClick={e => {
                e.preventDefault();
                onClick()
            }}
        >
            {children}
        </a>
    );
};

// LESSON 29 generates container component using connect() - FilterLink
// props local to this
const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    };
};
const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

export default FilterLink;