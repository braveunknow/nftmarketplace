import Identicon from 'react-identicons'
import banner from '../assets/banner_without_bg.png'
import { setGlobalState, useGlobalState, truncate } from '../store'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }

  return (
    <div
      className=" h-screen flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto "
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-black text-5xl font-bold">
            NFT <br /> <h2 className='text-5xl '>Marketplace</h2> 
           
          </h1>
          <p className="text-black-500 font-semibold text mt-3">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam enim est, quo assumenda incidunt aspernatur ipsa sunt itaque voluptas.
          </p>
        </div>

        <div className="flex flex-row mt-5 w-full">
          <button
            className="drop-shadow-2xl rounded-2xl shadow-inner text-white
            btn-clr 
             cursor-pointer p-4 w-1/4 font-bold "
            onClick={onCreatedNFT}
          >
            Create NFT
          </button>
        </div>

      </div>

      <div
        className=" md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden"
      >
        <img
          src={banner}
          alt="NFT Art"
          className="h-100 w-full object-cover"
        />
        {/* <div className="flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-white font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : 'Connect Your Wallet'}
            </p>
            <small className="text-pink-800 font-bold">@you</small>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Hero
