import './CollectionCard.css';
import { Icons } from '../../assets/assetsExporter';

function CollectionCard({ data, variant = "one" }) {
    switch (variant) {
        case "two":
            return <CollectionCardStyleTwo data={data} />;
        case "three":
            return <CollectionCardStyleThree data={data} />;
        default:
            return <CollectionCardStyleOne data={data} />;
    }
}


function CollectionCardStyleOne({ data }) {
    return <div className="collection_card position-relative overflow-hidden">
        <img src={data.image} alt="img" />
        <div className="collection_info">
            <h3 className="fs-20 fw-normal">{data.title}</h3>
            <span className="js_link style-three">
                Shop Now
                <img
                    src={Icons.upRightArrowBlack}
                    alt="Arrow"
                />
            </span>
        </div>
        <a
            href="#"
            className="position-absolute top-0 start-0 w-100 h-100"
        />
    </div>;
}


function CollectionCardStyleTwo({ data }) {
    return <div className='collection_card style-two position-relative z-1 overflow-hidden mb-25'>
        <div className="collection_info">
            <p className="js_text_primary mb-3 lh-1">Upto 50% OFF</p>
            <h3 className="fs-20 fw-normal">BIG SALE</h3>
            <span className="js_link style-three">Shop Now <img src={Icons.upRightArrowBlack} alt="Arrow"/></span>
        </div>
        <a href="/" className="position-absolute top-0 start-0 w-100 h-100"></a>
    </div>
}


function CollectionCardStyleThree({data})
{
    return <div className='collection_card style-three position-relative z-1 overflow-hidden mb-25'>
        <img src={data.image} alt="img" />
        <div className='collection_info'>
            <p className="js_text-title mb-2">{data.info.subTitle}</p>
            <h3 className="fs-30 fw-normal">{data.info.title}</h3>
            <span className="js-link style-three">Shop Now<img src={Icons.upRightArrowBlack} alt="Arrow"/></span>
        </div>
        <a href="/" className="position-absolute top-0 start-0 w-100 h-100"></a>
    </div>
}

export default CollectionCard;