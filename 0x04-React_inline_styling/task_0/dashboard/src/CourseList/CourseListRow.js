import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    // Define the inline styles based on the isHeader prop
    const rowStyle = isHeader
        ? { backgroundColor: "#deb5b545" }
        : { backgroundColor: "#f5f5f5ab" };
    
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr style={rowStyle}>
                    <th colSpan={2}>{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr style={rowStyle}>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </tr>
            );
        }
    } else {
        return (
            <tr style={rowStyle}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;