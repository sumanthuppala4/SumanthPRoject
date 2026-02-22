import React, { useEffect, useState } from "react";
import "./CustomDataGrid.css"; // Importing the updated CSS file
import EditButton from "./EditButton/EditButton";

// CustomGrid component
const CustomDataGrid = () => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [activeDeleteIcon, setActiveDeleteIcon] = useState(null);
  const [showEditButton, setShowEditButton] = useState(false);
  const [activeEditButton, setActiveEditButton] = useState(null);
  const [rows, setRows] = useState([
    {
      id: 1,
      image: [
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=60",
      ],
      car: "Car1",
    },
    {
      id: 2,
      image: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=500&q=60",
      ],
      car: "Car2",
    },
    {
      id: 3,
      image: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=60",
      ],
      car: "Car3",
    },
    {
      id: 4,
      image: [
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=500&q=60",
      ],
      car: "Car4",
    },
  ]);

  const [columns, setColumns] = useState([
    "Product Filter",
    "Primary Variant",
    "Variant 2",
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(null);

  const carImages = [
    "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=500&q=60",
  ];

  const getImageArray = (image) => {
    let tempArray = [];
    for (let i = 0; i < columns.length - 1; i++) {
      tempArray.push("Add Design");
    }
    return tempArray;
  };

  // Add a new row
  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      image: getImageArray(),
      car: `Car ${rows.length + 1}`,
    };
    setRows([...rows, newRow]);
  };

  // Add a new column
  const handleAddColumn = () => {
    setColumns([...columns, `Variant ${columns.length}`]);
    const newRows = rows.map((row) => ({
      ...row,
      image: [...row.image, "Add Design"],
    }));
    setRows(newRows);
  };

  // Handle adding new columns per row on button click in the last column
  const handleAddColumnToRow = (index) => {
    handleAddColumn();
  };

  // Delete row functionality
  const handleDeleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const [draggedRowIndex, setDraggedRowIndex] = useState(null);

  const handleDragStart = (index, event) => {
    setDraggedRowIndex(index);
  };

  const handleDragOver = (index, event) => {
    event.preventDefault(); // Prevent default behavior to allow drop
  };

  const handleDrop = (index, event) => {
    event.preventDefault();

    const newRows = [...rows];
    const draggedRow = newRows.splice(draggedRowIndex, 1)[0]; // Remove dragged row
    newRows.splice(index, 0, draggedRow); // Insert dragged row at the drop position
    setRows(newRows); // Update the state with the new row order
    setDraggedRowIndex(null); // Reset the dragged row index
  };

  // Open modal for selecting image
  const handleOpenPopup = (rowIndex, columnIndex) => {
    setSelectedRowIndex(rowIndex);
    setSelectedColumnIndex(columnIndex);
    setIsModalOpen(true);
  };

  // Handle image selection
  const handleSelectImage = (imageSrc) => {
    const newRows = [...rows];
    newRows[selectedRowIndex].image[selectedColumnIndex] = imageSrc;
    setRows(newRows);
    setIsModalOpen(false); // Close modal after selection
  };
  useEffect(() => {
    console.log(activeDeleteIcon);
  }, [activeDeleteIcon]);

  const handleMouseOver = (index) => {
    setShowDeleteIcon(true);
    setActiveDeleteIcon(index);
  };

  return (
    <div className="table-container">
      <table className="custom-grid-table">
        <thead>
          <tr>
            <th></th>
            <th>Product Filter</th>
            {columns.slice(1).map((col, index) => (
              <th key={index} className="variant-column">
                {col}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.id}
              draggable
              onDragStart={(event) => handleDragStart(index, event)}
              onDragOver={(event) => handleDragOver(index, event)}
              onDrop={(event) => handleDrop(index, event)}
              style={{ height: "150px" }}
            >
              <td className="row-index-cell">
                <span
                  onClick={() => handleDeleteRow(index)}
                  style={{
                    position: "absolute",
                    left: "40px",
                    cursor: "pointer",
                    color: "red",
                    display:
                      showDeleteIcon && activeDeleteIcon === row?.id
                        ? "block"
                        : "none",
                  }}
                  onMouseEnter={(e) => {
                    handleMouseOver(row.id);
                  }}
                  onMouseLeave={(e) => {
                    setShowDeleteIcon(false);
                    setActiveDeleteIcon(null);
                  }}
                  className="delete-icon"
                >
                  🗑️
                </span>
                <span
                  style={{ cursor: "grab", marginRight: "10px" }}
                  onMouseEnter={(e) => {
                    handleMouseOver(row.id);
                  }}
                  onMouseLeave={(e) => {
                    setShowDeleteIcon(false);
                    setActiveDeleteIcon(null);
                  }}
                >
                  ☰{index + 1}
                </span>
              </td>
              <td>
                <div className="product-filter">
                  <div>Tags</div>
                  <div className="product-filter-text">Contains</div>
                  <div>On sale</div>
                </div>
              </td>
              {row.image.map((image, i) => {
                if (image !== "Add Design") {
                  return (
                    <td className="variant-column">
                      <div
                        onMouseEnter={(e) => {
                          setShowEditButton(true);
                          setActiveEditButton({ row: row?.id, col: i });
                        }}
                        onMouseLeave={(e) => {
                          setShowEditButton(false);
                          setActiveEditButton(null);
                        }}
                      >
                        <img
                          src={image}
                          alt={row.car + i}
                          className="car-image"
                        />{" "}
                        {showEditButton &&
                          activeEditButton.row === row?.id &&
                          activeEditButton.col === i && (
                            <span>
                              <EditButton
                                onClickFunction={() => {
                                  handleOpenPopup(index, i);
                                  setShowEditButton(false);
                                }}
                              />
                            </span>
                          )}
                      </div>
                    </td>
                  );
                } else
                  return (
                    <td className="variant-column">
                      <button
                        className="add-design-button"
                        onClick={() => handleOpenPopup(index, i)}
                      >
                        Add Design
                      </button>
                    </td>
                  );
              })}
              <td>
                <span
                  style={{ cursor: "pointer", color: "green" }}
                  onClick={() => handleAddColumnToRow(index)}
                >
                  ➕
                </span>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <span
                style={{ cursor: "pointer", color: "green" }}
                onClick={handleAddRow}
              >
                ➕ Add Row
              </span>
            </td>
            {columns.map((col, index) => (
              <td key={index}></td>
            ))}
            <td></td>
          </tr>
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Select an Image</h3>
            <div className="image-grid">
              {carImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Design ${idx + 1}`}
                  className="selectable-image"
                  onClick={() => handleSelectImage(src)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDataGrid;
