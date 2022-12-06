import "./Breadcrumb.css";

function BreadCrumb({ directory, onClick }) {
  // console.log(directory);
  return (
    <>
      <div className="breadcrumb-part" onClick={() => onClick(directory)}>
        {directory}
        <span className="arrow">&gt;</span>
      </div>
    </>
  );
}

export default BreadCrumb;
