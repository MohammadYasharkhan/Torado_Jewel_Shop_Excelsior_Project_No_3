import './BreadCrumbSection.css';
function BreadCrumbSection({title, linkTitle=title})
{
    return <div className='bread_crumb_section'>
        <div className='container text-center'>
            <h2 className='fw-normal mb-2'>{title}</h2>
            <ul className='bread_crumb_ul list-unstyled mb-0'>
                <li>
                    <a href="/" style={{color:"#696866"}} >Home</a>
                </li>
                <li>{linkTitle}</li>
            </ul>
        </div>
    </div>
}

export default BreadCrumbSection;