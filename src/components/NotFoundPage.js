import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
    <h2>
        No match found go to <Link to="/">home page</Link>
    </h2>
    </div>
);

export default NotFoundPage;