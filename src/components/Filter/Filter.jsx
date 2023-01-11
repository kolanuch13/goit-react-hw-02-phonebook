import React from "react"

const Filter = ({value, onChange}) => (
    // const changeFilter = evt => {
    //     filter = evt.current.target.value;
    // }
    <div>
        <span>Search by Name</span>
        <input type="text" value={value} onChange={onChange} />
    </div>
)

export default Filter;
