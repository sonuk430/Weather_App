const TableHeading = () => {
  return (
    <table className="weather-table">
      <thead>
        <tr>
          <th>City</th>
          <th>Description</th>
          <th>Temperature (°C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
          <th>Actions</th>
        </tr>
      </thead>
    </table>
  );
};

export default TableHeading;
