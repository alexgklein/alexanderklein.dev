import React from 'react';

const VideoStatement = () => {
  return (
    <div className='py-24 h-1/2 flex flex-col items-center justify-center'>
      <div className='grid grid-cols-7 h-full'>
        <div className='col-span-2 flex items-center justify-start'>
          <div className='w-3/5'>
            <p className='text-xs text-left uppercase font-avant-book font-bold tracking-widest'>
              We exist to challenge the mundane and monotonous
            </p>
          </div>
        </div>
        <div className='col-span-3'>
          <img
            src="/assets/wink.png"
            alt="Golden"
            className="mx-auto rounded-sm"
          />
        </div>
        <div className="col-span-2 flex items-center justify-end">
          <div className="w-3/5">
            <p className="text-xs text-right uppercase font-avant-book font-bold tracking-widest">
              We exist to challenge the mundane and monotonous
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStatement; 