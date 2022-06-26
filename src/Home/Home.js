import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../Assets/Logo/logo.svg';
import token from '../Assets/icons/dotIcon.svg';
import apply from '../Assets/icons/apply_icon.svg';
import nft from '../Assets/icons/nft_icon.svg';
import document from '../Assets/icons/documentation_icon.svg';
import twitter from '../Assets/Social_icons/twitter.svg';
import telegram from '../Assets/Social_icons/telegram.svg';
import footerImg from '../Assets/Social_icons/footer_img.svg';

const Home = () => {
    return (
        <div class="drawer drawer-mobile bg-purple-50">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class = "menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content bg-white" >
                    {/* <h3 className='text-center text-2xl mb-4'>Solminter</h3> */}
                    <img className='w-2/4 mx-auto mb-8' src={logo} alt="" srcset="" />
                    <button style={{padding:"8px 0 8px 0", background:"#4b1d54", letterSpacing:"1px", border:"5px solid #b133cf"}} class="w-full rounded-full text-white text-sm font-bold mx-auto mb-5">CONNECT WALLET</button>
                    <div className="font-medium text-md custom">
                        <li >
                            <div className='hover:bg-purple-100 hover:text-black h-12 mb-1'>
                                <img src={token} alt="" srcset="" />
                                <a>Token management</a>
                            </div>
                        </li>
                        <li>
                            <div className='hover:bg-purple-100 hover:text-black h-12 mb-1'>
                                <img src={apply} alt="" srcset="" />
                                <a>Apply for IDO</a>
                            </div>
                        </li>
                        <li>
                            <div className='hover:bg-purple-100 hover:text-black h-12 mb-1'>
                                <img src={nft} alt="" srcset="" />
                                <a>NFT</a>
                            </div>
                        </li>
                        <li>
                            <div className='hover:bg-purple-100 hover:text-black h-12'>
                                <img src={document} alt="" srcset="" />
                                <a>Documentation</a>
                            </div>
                        </li>

                    </div>
                    <div className='text-center mt-auto mb-5'>
                        <p className='mb-3 text-xs'>Connect with us</p>
                        <div className='flex gap-3 justify-center'>
                            <a href="https://twitter.com/solminter" rel="noreferrer"  target="_blank"><img className='p-3 rounded-full' style={{background:"#f7eaf9"}} src={twitter} alt="" /></a>
                            <a href="https://t.me/solminter" rel="noreferrer"  target="_blank"><img className='p-3 rounded-full' style={{background:"#f7eaf9"}} src={telegram} alt="" /></a>
                        </div>
                    </div>
                    <div className='h-px bg-gray-100'></div>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex'>
                            <img src={footerImg} alt="" srcset="" />
                        </div>
                        <div>
                            <p className='font-serif text-sm'>© Solminter 2021</p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Home;