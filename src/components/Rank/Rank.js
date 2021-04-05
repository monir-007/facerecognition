import React  from 'react';


const Rank = ({name, entries}) => {
    return (
        <div className="">
            <div className="red f3">
                {`${name}, Your Current Entries are...`}
            </div>
            <div className='red f1'>
                {entries}
            </div>
            
        </div>
    );
}

export default Rank;