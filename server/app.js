const express = require("express");
const app = express();
const port = 3001;

let root = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        myname: {
          type: "dir",
          children: {
            "filea.txt": {
              type: "file",
            },
            "fileb.txt": {
              type: "file",
            },
            projects: {
              type: "dir",
              children: {
                mysupersecretproject1: {
                  type: "dir",
                  children: {
                    mysupersecretfile: {
                      type: "file",
                    },
                  },
                },
                mysupersecretproject2: {
                  type: "dir",
                  children: {
                    mysupersecretfile: {
                      type: "file",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
app.get("/path/:myPath*", (req, res) => {
  let node = root;
  const parents = [];
  for (const component of req.originalUrl.replace("/path/", "").split("/")) {
    node = node.children[component];
    parents.push(component);
  }

  let files = [];
  for (let [key, value] of Object.entries(node.children)) {
    files.push({ name: key, fileType: Object.values(value)[0] });
  }

  return res.json({
    parents,
    children: files,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
