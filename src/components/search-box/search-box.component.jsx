import React from 'react';
import './search-box.component.scss';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
)