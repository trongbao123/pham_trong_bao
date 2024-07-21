import React from 'react';
import './index.css';
import { SendOutlined } from '@ant-design/icons';
import useContact from '../../hooks/useContact';
export const Contact = () => {

    const { handleSubmit } = useContact();

    return (
        <div id="contact" className="container">
            <div className="footer-top">
                <div className="row-footer">
                    <div className='col-lg-7'>
                        <div className="content-footer-top">
                            <h2 className="text-capitalize">Don't miss out, Stay updated</h2>
                            <p className="text-capitalize-sub">Subscribe newsletter and receive update about ICOs &amp; crypto tips.</p>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <form
                            className="quform newsletter-form newsletter-custom"
                            onSubmit={handleSubmit}
                        >
                            <div className="quform-elements-footer">
                                <div className="row-footer ">
                                    <div className="col-md-12">
                                        <div className="quform-element mb-0">
                                            <div className="quform-input">
                                                <input
                                                    className="form-control border-radius-10"
                                                    id="email_address"
                                                    type="text"
                                                    name="email_address"
                                                    placeholder="Subscribe With Us"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="quform-submit-inner radius-10">
                                            <button className="btn btn-white text-primary px-3" type="submit">
                                                <SendOutlined style={{ fontSize: '25px' }} />
                                            </button>
                                        </div>
                                        <div className="quform-loading-wrap">
                                            <span className="quform-loading" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
