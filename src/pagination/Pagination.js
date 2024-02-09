import { TOTAL_RESULTS_PER_PAGE } from "../CONSTANTS";
const Pagination = ({ products, total, page, setPage }) => {
  const totalPages = total / TOTAL_RESULTS_PER_PAGE;

  const handleButtonClick = (selectedPage) => {
    setPage(selectedPage);
  };
  return !!products.length ? (
    <div id='pagination' className='flex justify-center'>
      {page > 1 && (
        <button
          id='left'
          className='border p-2'
          onClick={() => handleButtonClick(page - 1)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='#000000'
            viewBox='0 0 256 256'>
            <path d='M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z'></path>
          </svg>
        </button>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          className={`border px-3 py-2 text-lg ${
            page === i + 1 ? "bg-neutral-600 text-white/85" : ""
          } `}
          key={i + 1}
          onClick={() => handleButtonClick(i + 1)}>
          {i + 1}
        </button>
      ))}
      {page < totalPages && (
        <button
          id='right'
          className='border p-2 '
          onClick={() => handleButtonClick(page + 1)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='#000000'
            viewBox='0 0 256 256'>
            <path d='M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z'></path>
          </svg>
        </button>
      )}
    </div>
  ) : null;
};

export default Pagination;
