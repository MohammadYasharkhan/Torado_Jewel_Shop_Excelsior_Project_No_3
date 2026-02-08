import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";


const plazas = [
    {
        name: "Ame Plaza",
        address: "Sunbeam St. West New York, NJ 07000",
    },
    {
        name: "Easten Plaza",
        address: "95 Water Street San Lorenzo, CA 94555",
    },
    {
        name: "Dina Plaza",
        address: "Rockledge St. Apopka, FL 32703",
    },
    {
        name: "Arican Dream",
        address: "East Corona St. Macon, GA 31234",
    },
    {
        name: "Palisades Plaza",
        address: "White Ave. Roselle, IL 601345",
    }
];


function FindAStore() {
    return <>
        <BreadCrumbSection title={"Find A Store"}></BreadCrumbSection>
        <div className="container pt-100 pb-75">
            <form action="#" className="find_store_search_form position-relative mb-30">
                <input type="text" className="border-0 fw-light js_text_para w-100" placeholder="Search here..." />
                <button type="submit" className="position-absolute bg-transparent border-0">
                    <i class="bx bx-search"></i>
                </button>
            </form>
            <div className="row">
                <div className="col-xl-8 col-md-7">
                    <div className="js-comp-map style-two mb-25">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd">
                        </iframe>
                    </div>
                </div>
                <div className="col-xl-3 offset-xl-1 col-md-5">
                    <div className="js-store-address-wrap mb-25">
                        {plazas.map((data,index)=>(
                            <div className="js-store-address-card" key={index}>
                                <h3 className="fs-20 fw-normal">{data.name}</h3>
                                <p className="mb-0">{data.address}</p>
                                <p className="mb-0">Open ⋅ Closes 8PM</p>
                                <p className="mb-0">Phone <a href="tel:016873330455" className="js_para_color">+01 687 333 0455</a></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>;
}

export default FindAStore;