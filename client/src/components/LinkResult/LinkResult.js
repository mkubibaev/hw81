import React from 'react';
import {apiURL} from "../../constants";

const LinkResult = ({shortUrl}) => {
    return (
        shortUrl
            ? <div className="link-result">
                <p>Your link now looks like this:</p>
                <a href={`${apiURL}/links/${shortUrl}`}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    {apiURL}/{shortUrl}
                </a>
            </div>
            : null
    );
};

export default LinkResult;
