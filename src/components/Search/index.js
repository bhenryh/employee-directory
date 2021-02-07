import React from "react";
import './style.css';
function Search(props) {
    return (
        <form>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by name"
                    id="search"
                />
            </div>
        </form>
    );
}
export default Search;