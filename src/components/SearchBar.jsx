import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onFocus, onBlur }) => {
    const styles = {
        searchContainer: {
            width: '100%',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
        search: {
            width: '100%',
            height: '100%',  
            padding: '0px 0px 0px 20px',
            borderRadius: '15px',
        },
        searchIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            position: 'absolute',
            right: '15px'
        },
        line: {
            width: '1px',
            borderRadius: '10px',
            height: '100%',
            backgroundColor: '#acadac',
            margin: '0 auto',
            right: '50px',
            position: 'absolute'
        }
    };

    return (
        <div style={styles.searchContainer}>
            <input 
                style={styles.search} 
                type="text" 
                placeholder="Search for your hotel"
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <div style={styles.searchIcon}>
                <div style={styles.line}></div>
                <CiSearch className='icon' style={{ width: '40px', height: '40px', color: '#acadac' }}/>
            </div>
        </div>
    );
};

export default SearchBar;
