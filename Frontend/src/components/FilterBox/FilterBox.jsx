import './FilterBox.css';
import listViewImage from '../../assets/images/icons/list-view.svg';
import grid2Image from '../../assets/images/icons/grid-2.svg';
import grid3Image from '../../assets/images/icons/grid-3.svg';
import grid4Image from '../../assets/images/icons/grid-4.svg';
import grid5Image from '../../assets/images/icons/grid-5.svg';
function FilterBox({ activeView = 'grid-3'}) {
    return <>
        <p class="search-result fs-14 js_text-title mb-3 lh-1">Showing 1-15 of 24 result</p>
        <div className='filter-box'>
            <div className='row'>
                <div className="col-md-6">
                    <ul className='nav nav-tabs list-unstyled filter-tablist d-flex align-items-center justify-content-md-between justify-content-center' role='tablist'>
                        <li className='nav-item border-0' role='presentation'>
                            <button className={`nav-link border-0 rounded-0 bg-transparent p-0 ${activeView === "list-view" ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#list-view" type='button' role='tab' aria-selected="false" tabIndex={-1}>
                                <img src={listViewImage} alt="img" />
                            </button>
                        </li>
                        <li className='nav-item border-0' role='presentation'>
                            <button className={`nav-link border-0 rounded-0 bg-transparent p-0 ${activeView === "grid-2" ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#grid-2" type='button' role='tab' aria-selected="false" tabIndex={-1}>
                                <img src={grid2Image} alt="img" />
                            </button>
                        </li>
                        <li className='nav-item border-0' role='presentation'>
                            <button className={`nav-link border-0 rounded-0 bg-transparent p-0 ${activeView === "grid-3" ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#grid-3" type='button' role='tab' aria-selected="false" tabIndex={-1}>
                                <img src={grid3Image} alt="img" />
                            </button>
                        </li>
                        <li className='nav-item border-0' role='presentation'>
                            <button className={`nav-link border-0 rounded-0 bg-transparent p-0 ${activeView === "grid-4" ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#grid-4" type='button' role='tab' aria-selected="false" tabIndex={-1}>
                                <img src={grid4Image} alt="img" />
                            </button>
                        </li>
                        <li className='nav-item border-0' role='presentation'>
                            <button className={`nav-link border-0 rounded-0 bg-transparent p-0 ${activeView === "grid-5" ? 'active' : ''}`} data-bs-toggle="tab" data-bs-target="#grid-5" type='button' role='tab' aria-selected="false" tabIndex={-1}>
                                <img src={grid5Image} alt="img" />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className='d-flex align-items-center justify-content-md-end'>
                        <span class="js_text-title fs-14 me-2">Sort by</span>
                        <select className='fs-14 js_text-para bg-white border-0 filter-default'>
                            <option value="1">Recommended</option>
                            <option value="2">Price: High to Low</option>
                            <option value="3">Price: Low to High</option>
                            <option value="4">Most Viewed</option>
                            <option value="5">Recently Added</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default FilterBox;