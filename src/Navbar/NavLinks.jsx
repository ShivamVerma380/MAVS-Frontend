import React, { useState } from 'react'
import { links } from './MyLinks';
import './Navbar.css'
const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    console.log("links", links)
   
  return <>
  {
    
    links.map(link=>(
        <div>
            <div className="px-3 text-left md:cursor-pointer group">
                <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 navbar-links" onClick={()=>{
                    heading !== link.name ? setHeading(link.name) : setHeading("");
                    setSubHeading("");}}>
                    {link.name}
                    {link.submenu? (<span className="text-xl md:mt-1 md:ml-2 inline">
                        <ion-icon name={`${heading===link.name ? "chevron-up":"chevron-down"}`}></ion-icon>
                    </span>) :(" ")}
                    
                </h1>
                
                {link.submenu && <div> 
                    <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                        <div className="py-3">
                            <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                        </div>
                        <div className="bg-black p-3.5 grid grid-cols-3">
                            {
                                link.sublinks.map((mysublinks)=>(
                                    <div>
                                        <h1 className="text-lg font-semibold text-white">{mysublinks.Head}</h1>
                                        {mysublinks.sublink.map(slink=>(
                                            <li className="text-sm text-white my-2.5">
                                                {slink.name}
                                                {/* <Link to={slink.link}>{slink.name}</Link> */}
                                            </li>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>}
            </div>
            {/* Mobile view */}
            <div>
                {link.submenu && <div> 
                    <div className={`
                        ${heading === link.name ? 'md:hidden' : 'hidden'}
                    `}>
                            {
                                link.sublinks.map((mysublinks)=>(
                                    <div>
                                        <h1  onClick={() =>
                                            subHeading !== mysublinks.Head
                                                ? setSubHeading(mysublinks.Head)
                                                : setSubHeading("")
                                            } className="py-4 pl-7 text-white font-semibold md:pr-0 pr-5 flex justify-between md:hidden items-center">{mysublinks.Head}
                                            
                                            {link.submenu? (<span className="text-xl md:mt-1 md:ml-2 inline">
                        <ion-icon name={`${subHeading===mysublinks.Head ? "chevron-up":"chevron-down"}`}></ion-icon>
                    </span>) :(" ")}
                                            
                                            </h1>
                                        <div className={`${
                                            subHeading === mysublinks.Head ? 'md:hidden' : 'hidden'
                                        }`}>
                                            {mysublinks.sublink.map((slink)=>(
                                                <li className="py-3 pl-14 md:hidden text-white">{slink.name}</li>
                                                // <Link to={slink.link}>{slink.name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }
                        
                    </div>
                </div>}
            </div>
            {/* <div>
                
                {link.sublinks.map((slinks)=>(
                    
                        <div>
                            <div>
                                <h1>{slinks.Head}</h1>
                            </div>
                        </div>
                    
                ))}
            </div> */}
            
        </div>
        

        
    
    ))
  }
  </>
};

export default NavLinks
