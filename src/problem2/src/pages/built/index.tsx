import React from 'react';
import './index.css';
import CheckIcon from '../../assets/icons/CheckIcon';
const Built = () => {
    return (
        <div id="built" className="container">
            <div className="row-2">
                <div className="built-left">
                    <h1>We’ve Built A Platform To Buy And Sell Cryptocurrency</h1>
                    <p>ICO Crypto is a platform for the destiny of investment that powering facts for the brand new equity blockchain.</p>
                    <ul className="list-style1">
                        <li className="active">
                            <CheckIcon />
                            Securee Wallet service.
                        </li>
                        <li>
                            <CheckIcon />
                            Lots Of Usefull Features.
                        </li>
                        <li>
                            <CheckIcon />
                            Trusted System.
                        </li>
                        <li>
                            <CheckIcon />
                            Blockchain Infrastructure.
                        </li>
                    </ul>
                </div>
                <div className="built-right">
                    <div className="built-img">
                        <img src="https://crypto.websitelayout.net/img/content/zigzag-02.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Built;