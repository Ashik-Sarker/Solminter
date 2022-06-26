import React from 'react';

const Home = () => {
    return (
        <div class="drawer drawer-mobile bg-purple-50">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class = "menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-white" >
                    <h3 className='text-center text-2xl mb-4'>Solminter</h3>
                    <button class="btn-wide rounded-full text-white py-1 font-bold bg-purple-900 border-4 border-indigo-600">CONNECT WALLET</button>
                    <li><a>Token Management</a></li>
                    <li><a>Apply for IDO</a></li>
                    <li><a>NFT</a></li>
                    <li><a>Documentation</a></li>
                    <div className='text-center mt-auto'>
                        <p>connect with us</p>
                        <div className='flex gap-4 justify-center'>
                            <p>Twitter</p>
                            <p>github</p>
                        </div>
                    </div>
                    <div className='h-px bg-gray-200'></div>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <div>
                                <p>image</p>
                            </div>
                            <div>
                                <p className='text-xs'>Powred by</p>
                                <p>SOLANA</p>
                            </div>
                        </div>
                        <div>
                            <p>@Solminter 2021</p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Home;