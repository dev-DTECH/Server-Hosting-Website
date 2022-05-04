import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import sh from '../../image/superhero.png'
import panel from '../../image/panel.svg'
import './index.scss'

function Home() {
    return (
        <div className="Home">
            <div className={"top"}>
                <div className={"container"}>
                    <div className={"text"}>
                        <div className={"name"}>Name</div>
                        <div className={"quote"}>Minecraft server with <a className={"color"}>Superpowers</a></div>
                    </div>
                    <img src={sh}/>
                </div>
                <Button variant="contained">Order now</Button>
            </div>
            <div className={"body"}>
                <section>
                    <div className={"title"}>Our <a className={"color"}>Superpowers?</a></div>
                    <div className={"superpowers"}>
                        <div className={"superpower"}>
                            <a className={"color"}>Cheap Price</a>
                            Extremely cheap prices - comparing to what you get. Reliable and powerful hardware, which you can trust.
                        </div>
                        <div className={"superpower"}>
                            <a className={"color"}>Best Support</a>
                            Our in-house team members do their best to provide one-touch resolution, making you feel like a part of our family.
                        </div>
                        <div className={"superpower"}>
                            <a className={"color"}>Best Hardware</a>
                            Power of our hardware will surprise you, we don't hope you will not be disappointed, we know you will not.
                        </div>
                    </div>
                </section>
                <section className={"section-2"}>
                    <div className={"title"}>Cutom Panel</div>
                    <div className={"panel"}>
                        <img src={panel}/>
                        <div className={"features"}>
                            <div className={"feature"}>
                                <a className={"color"}>Cloud Backup</a>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto
                            </div>
                            <div className={"feature"}>
                                <a className={"color"}>Elegant Design</a>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto
                            </div>
                            <div className={"feature"}>
                                <a className={"color"}>Subusers</a>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto
                            </div>
                            <div className={"feature"}>
                                <a className={"color"}>Custom Features</a>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto
                            </div>
                        </div>
                    </div>

                </section>
                <section className={"section-3"}></section>
            </div>
        </div>
    );
}

export default Home;