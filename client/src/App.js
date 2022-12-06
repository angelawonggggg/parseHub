import "./App.css";
import BreadCrumb from "./components/Breadcrumb";
import MainContent from "./components/MainContent";
import { react, useEffect, useState } from "react";

function App() {
  const [directories, setDirectories] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    getData("home");
  }, []);

  const getData = (location) => {
    fetch(`/path/${location}`)
      .then((result) => result.json())
      .then((data) => {
        setDirectories(data.parents);
        setContent(data.children);
      });
  };

  const update = (data) => {
    let formatLocation = directories.join("/") + "/" + data;
    getData(formatLocation);
  };

  const updateFromBreadcrumb = (data) => {
    let dataIndex = directories.indexOf(data);
    let formatLocation = directories.slice(0, dataIndex + 1).join("/");
    getData(formatLocation);
  };

  return (
    <div className="App">
      <div className="breadcrumb">
        {directories.map((directory) => (
          <div>
            <BreadCrumb
              directory={directory}
              key={directory}
              onClick={updateFromBreadcrumb}
            />
          </div>
        ))}
      </div>

      <div className="content-box">
        {content.map((item) => (
          <MainContent
            key={item.name}
            name={item.name}
            fileType={item.fileType}
            onClick={update}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
