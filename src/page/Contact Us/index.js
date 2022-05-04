import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import sh from '../../image/superhero.png'
import panel from '../../image/panel.svg'
import './index.scss'

function Tos() {
    return (
        <div className="Tos">
            <div className={"top"}>
                <div className={"container"}>
                    <div className={"text"}>
                        <div className={"name"}>Terms of Service</div>
                    </div>
                </div>
            </div>
            <div className={"body"}>
                <section>
                    <div className={"heading"}>Terms of Service</div>
                    <div>
                        IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, YOU WILL NOT BE ABLE TO ORDER ANY SERVICES
                        FROM US.<br/>
                        BY NATURE OF HAVING AN ACCOUNT WITH US YOU AGREE TO BE BOUND BY THE FOLLOWING TERMS AND
                        CONDITIONS.
                    </div>
                </section>
                <section>
                    <div className={"heading"}>Eligibility to use:</div>
                    <div>
                        Should be above the age of thirteen (13), in the event you are not above the age of thirteen (13) you should have obtained the consent of your legal guardian and or parent.
                    </div>
                </section>
                <section>
                    <div className={"heading"}>Cancelletion:</div>
                    <div>
                        In order to cancel your services, you must issue a cancellation request within our billing area. Additionally, you must manually cancel any active PayPal subscriptions that were created when ordering your service. We do not have access to deduct funds from your PayPal account, and will not be held responsible for automated payments made via a subscription. If you cancel your server through the panel you must include in the "cancellation reason" that you would like to request a refund. Without stating that you would like a refund in the cancellation request we cannot provide a refund if requested later.

                    </div>
                </section>
                <section>
                    <div className={"heading"}>Refunds:</div>
                    <div>
                        Only all our shared hosting includes a 24-hour refund policy. The refunds are only given out if there is a proper valid reason. If the billing panel shows an Invalid reason, we cannot offer any refund. However, we may ask that you provide us with a refund request if we feel that you could qualify for one with the correct reasoning. If the first 24 hours have been exceeded since the first payment, we cannot offer any refunds.<br/>
                        Failure to make a payment within 2 days after an invoice is due, will result in that service being suspended. In order to re-activate your service, you will have to pay the invoice.<br/>
                        Failure to make a payment 7 days after an invoice is due, will result in a complete termination of that service. Once a service is terminated, it may not be reactivated, and data cannot be recovered.<br/>
                        Any chargebacks or reversed transactions made on your payments will result in your account being immediately terminated and banned from using our services in the future.<br/>
                    </div>
                </section>
                <section>
                    <div className={"heading"}>Service Availability:</div>
                    <div>
                        We make a large effort to ensure services are available 24 hours a day, 7 days a week for as long as you have paid for them, but sometimes, due to several reasons service will be unavailable to you. We make no representation or warranty that our services will be uninterrupted. If however, we feel a reason to provide compensation for a downtime even inside or outside of our control you will receive client credit only if asked for.<br/>
                    </div>
                </section>
                <section>
                    <div className={"heading"}>Termination of Services:</div>
                    <div>
                        We reserve the right to terminate your services at any given time for any given reason with immediate effect if such reason is related to unlawful and or malicious activities and with 3 business days' notice if such is done without due reason.<br/>
                        Where your services are terminated for unlawful reasons and or malicious activities no refund shall be applicable.<br/>
                        Where your services are terminated without due reasons we shall refund the remaining of your payment on a pro-rata rate.<br/>
                        We reserve the right to terminate your services where a payment dispute has been opened and or no payment has been made with immediate effect.<br/>
                        Where your account has terminated the content of such shall be destroyed effective immediate and as such we are not liable for such destruction as the content is in conflict without terms and conditions of services, we may help you recover lawful content ONLY however, this is not binding and is offered as an additional feature.<br/>
                    </div>
                </section>
                <section>
                    <div className={"heading"}>Services:</div>
                    <div>
                        All services are still subjected to software limitations and physical hardware limits.<br/>
                        We cannot assure that the site is completely free from exploits. If a user is caught exploiting any area of Pyrobyte, their account will be permanently terminated.<br/>
                        We reserve the right to modify any of the information on the site at any given time.<br/>
                        Pyrobyte reserves the right to disable and terminate your server if your server is regularly attacked with large-scale denial of service attacks that disturb other users' products or services.<br/>
                    </div>
                </section>
                <section>
                    <div className={"heading"}>Minecraft End User License Agreement:</div>
                    <div>
                        By using any Pyrobyte Minecraft-related service, you agree to the Minecraft End User License Agreement and any related or additional agreements, terms, or conditions specified therein, as provided by Mojang AB. Minecraft EULA: https://account.mojang.com/documents/minecraft_eula
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Tos;