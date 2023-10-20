interface WineTastingProps{
  wine:Wine;
}
export default function WineTastingCard({wine}:WineTastingProps){

    return(
        <div className='w-64 h-[390px] xl:w-80 xl:h-[460px] p-4 px-5 bg-neutral-50 rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.45)]'>
          <img
            className='w-28 h-48 xl:w-32 xl:h-56 mx-auto rounded-3xl'
            src='http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9thjj5x6%2Fproduction%2F71547982d32314426517b39422934b6313a747d7-4085x6120.jpg&w=256&q=75'
          />
          <div className='bg-neutral-50 w-16 h-7 rounded-3xl text-center ring-black ring-1 text-black text-sm mt-4 xl:mt-6 py-1'>
            {wine.tag}
          </div>
          <div className='text-black mt-3'>
            <p className='text-xl xl:text-2xl'>{wine.name}</p>
            <p className='text-wine-red text-base xl:text-lg'>{wine.price} NOK</p>
            <div className='grid grid-cols-2 gap-x-10 gap-[2px] xl:text-base text-sm'>
              <p>Taste</p> <p>{wine.taste}</p>
              <p>Aroma</p> <p>{wine.smell}</p>
              <p>Body</p> <p>{wine.body}</p>
            </div>
          </div>
        </div>
    )
}