import React from 'react';
import DataTable from 'react-data-table-component';

function DataTableCard() {
  const data = [
    { id: 1, name: 'John Doe', age: 28, location: 'New York' },
    { id: 2, name: 'Jane Smith', age: 35, location: 'Los Angeles' },
    { id: 3, name: 'Alice Johnson', age: 22, location: 'Chicago' },
    // Add more sample data rows here
  ];

  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Age', selector: row => row.age, sortable: true },
    { name: 'Location', selector: row => row.location, sortable: true },
  ];

  return (
    <div style={{ width: '500px', padding: '1rem', margin: '1rem', backgroundColor: 'lightblue' }}>
      <h2>Data Table</h2>
      <DataTable
        title="Last Uploaded Data"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
}

export default DataTableCard;
