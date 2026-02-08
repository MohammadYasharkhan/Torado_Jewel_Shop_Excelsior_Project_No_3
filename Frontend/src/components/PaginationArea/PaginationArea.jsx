import './PaginationArea.css';

function PaginationArea({ variant = "one" }) {
    return (
        <div
            className={`js_pagination_area d-flex mt-2 ${
                variant === "two"
                    ? "justify-content-start"
                    : "justify-content-center"
            }`}
        >
            <a href="/" className='prev page_number'>
                <i className="bx bx-left-arrow-alt"></i>
            </a>
            <a href="/" className='page_number current'>1</a>
            <a href="/" className='page_number'>2</a>
            <a href="/" className='page_number'>3</a>
            <a href="/" className='page_number next'>
                <i className="bx bx-right-arrow-alt"></i>
            </a>
        </div>
    );
}

export default PaginationArea;
