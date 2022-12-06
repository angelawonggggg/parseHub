import "./MainContent.css";
function MainContent({ name, fileType, onClick }) {
  return (
    <>
      <div className="content" onClick={() => onClick(name)}>
        {fileType === "file" ? (
          <div>THIS IS FILE: {name}</div>
        ) : (
          <>
            <div>{name}</div>
          </>
        )}
      </div>
    </>
  );
}

export default MainContent;
