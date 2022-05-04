import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import sh from '../../image/superhero.png'
import panel from '../../image/panel.svg'
import './index.scss'
import logo from '../../image/contact.svg'

function Contact() {
    return (
        <div className="Contact">
            <div className={"top"}>
                <div className={"container"}>
                    <div className={"text"}>
                        <div className={"name"}>Contact<br/>Us</div>
                    </div>
                    <img src={logo}/>

                </div>
            </div>
            <div className={"body"}>
                <section>
                    <div className={"heading"}>Email</div>
                    <div>
                        support@pyrobyte.net<br/>
                        billing@pyrobyte.net
                    </div>
                </section>
                <section>
                    <div className={"heading"}>Location</div>
                    <div>
                        WestBengal, India
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;