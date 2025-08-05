import React from 'react'
import { Link } from 'react-router-dom';
import type { Email } from '../schema/media.schema';

const Email:Email = () => {
  return (
    <div className=''>
      <input type="email" placeholder='Enter your email here'  className='px-2 py-1 outline-1 outline-slate-200 text-lg w-2xs mr-4'/>
      <Link
        to={"/sign"}
        className="px-4 py-2 mx-auto rounded-sm bg-blue-600 text-lg text-white hover:bg-blue-900"
      >
        Sign-up -it's free
      </Link>
    </div>
  );
}

export default Email
