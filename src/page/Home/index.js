import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import sh from '../../image/superhero.png'

function Landing() {
    return (
        <div className="Landing">
            <div>
                <div>
                    <div>
                        <div>Name</div>
                        <div>Minecraft server with superpower</div>
                    </div>
                    <img src={sh}/>
                </div>
                <Button>Order now</Button>
            </div>
        </div>
    );
}
export default Landing;