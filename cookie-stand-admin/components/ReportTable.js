import React from 'react';

function ReportTable({ reports }) {
  if (reports.length === 0) {
    return <h2>No Cookie Stands Available</h2>;
  }

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Location</th>
          <th className="border border-gray-300 p-2">Min Customers</th>
          <th className="border border-gray-300 p-2">Max Customers</th>
          <th className="border border-gray-300 p-2">Avg Cookies</th>
          <th className="border border-gray-300 p-2">Total Cookies</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className="border border-gray-300 p-2">{report.location}</td>
            <td className="border border-gray-300 p-2">{report.minCustomers}</td>
            <td className="border border-gray-300 p-2">{report.maxCustomers}</td>
            <td className="border border-gray-300 p-2">{report.avgCookies}</td>
            <td className="border border-gray-300 p-2">
              {report.calculateTotalCookies()}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th className="border border-gray-300 p-2">Totals</th>
          <th className="border border-gray-300 p-2" colSpan="3"></th>
          <th className="border border-gray-300 p-2">
            {reports.reduce((total, report) => total + report.calculateTotalCookies(), 0)}
          </th>
        </tr>
      </tfoot>
    </table>
  );
}

export default ReportTable;
