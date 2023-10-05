const PreviousRatings = () => {
  return (
    <>
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img src='https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' />
          </div>
        </div>
        <div className='chat-header'>
          Anakin
          <time className='text-xs opacity-50'>12:46</time>
        </div>
        <div className='chat-bubble bg-grey-highlight'>
          <p className='text-violet-darker'> I hate you!</p>
        </div>
        <div className='chat-footer'>{/* <Rating /> */}</div>
      </div>
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img src='https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' />
          </div>
        </div>
        <div className='chat-header'>
          Anakin
          <time className='text-xs opacity-50'>12:46</time>
        </div>
        <div className='chat-bubble bg-grey-highlight'>
          <p className='text-violet-darker'>
            Here is a longer text to see how well the bubble scales based on the
            amount of words that are put in in the tag
          </p>
        </div>
        <div className='chat-footer'>{/* <Rating /> */}</div>
      </div>
    </>
  );
};

export default PreviousRatings;
