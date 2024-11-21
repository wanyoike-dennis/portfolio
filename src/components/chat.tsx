import reactLogo from './assets/react.svg'

export default function ChatPage(){

    return(
        <>
            <div className='p-6 m-4  max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg flex items-center gap-x-4'>
             <div className="shrink-0">
                <img className="size-12 " src="" alt="Chitchat Logo">
                </img>
             </div>
            
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
            </div>

            <div className='py-8 px-8  m-4 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:flex sm:items-center sm:space-y-0 sm:gap-x-6'>
                <img  className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' src='' alt='my face'/>
                <div className='text-center space-y-2 sm:text-left'>
                    <div className='space-y-0.5'>
                        <p className='text-lg text-black font-medium'>Dennis Njoroge</p>
                        <p className='text-slate-500 font-medium'>Software Engineer</p>
                    </div>
                    <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transpare focus:outline-none focus:ring-purple-600 focus:ring-offset-2'>Message</button>
                </div>
            </div>
        </>
     
    )
}