// FolderViewer.js
import React, { useState } from "react";


// data.js
 const nodes = [
  {
    id: "1",
    name: "src",
    type: "folder",
    children: [
      {
        id: "2",
        name: "components",
        type: "folder",
        children: [
          { id: "3", name: "FolderViewer.js", type: "file" },
          { id: "4", name: "Header.js", type: "file" }
        ]
      },
      { id: "5", name: "App.js", type: "file" }
    ]
  },
  {
    id: "6",
    name: "package.json",
    type: "file"
  }
];


const FolderViewer = () => {
  return (
    <div>
      {nodes.map((node) => (
        <FolderItem key={node.id} node={node} />
      ))}
    </div>
  );
};

const FolderItem = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (node.type === "file") {
    return (
      <div style={{ paddingLeft: 20 }}>
        📄 {node.name}
      </div>
    );
  }

  return (
    <div>
      <div
        style={{ cursor: "pointer", paddingLeft: 20 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "📂" : "📁"} {node.name}
      </div>

      {isOpen && node.children && (
        <div style={{ marginLeft: 15 }}>
          {node.children.map((child) => (
            <FolderItem key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderViewer;