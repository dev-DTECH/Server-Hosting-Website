import './index.scss';
import logo from '../../image/logo.png'
import {Link} from 'react-router-dom';
import {Grid, Divider} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


function Footer() {
    const matches = useMediaQuery("(min-width:600px)");

    return (
        <div id='footer'>

            {/*<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>*/}

            {/*<div className="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="5b2e9a9cd34c990001a89301" data-style-height="50px" data-style-width="100%" data-theme="dark">*/}
            {/*    <a href="https://uk.trustpilot.com/review/www.humbleservers.com" target="_blank" rel="noopener">Trustpilot</a>*/}
            {/*</div>*/}

            <div id="flex">
                <div>
                    <img src={logo} height="100"></img>
                </div>
                <div>
                    <h2>Support</h2>
                    <Link to="/tos">Terms of Service</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <a href="https://status.humbleservers.com/">Server Status</a>
                </div>
                <div>
                    <h2>Help</h2>
                    <Link to="/tos">Terms of Service</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <a href="https://status.humbleservers.com/"> Server Status</a>
                </div>
            </div>

            <div className='cr'>Copyright © 2021. All Rights Reserved To PyroByte.</div>

        </div>
    );
}

export default Footer;