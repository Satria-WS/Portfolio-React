import React from "react";

function WorkExperience() {
  return (
    <div className="Work-Experience EmptyMarginBot">
      <h2 style={{ textAlign: "center" }}>Work-Experience</h2>
      <table cellSpacing={30}>
        <ul>
          <tr>
            <th>Dates</th>
            <th>Company</th>
            <th>Work</th>
          </tr>

          <tr>
            <td>2014</td>
            <td>PT Pertamina Retail</td>
            <td>IT Support, bergerak pada bidang pelayanan distributor</td>
          </tr>
          <tr>
            <td>2015</td>
            <td>PT.Petro China</td>
            <td>Staff, bergerak di sektor Industri minyak dan gas</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>PT.Steam Car Wash</td>

            <td>Admin Manager, bergerak pada bidang jasa penyucian mobil </td>
          </tr>
          <tr>
            <td>2020</td>
            <td>PT Aimtopindo Nuansa Kimia </td>

            <td>
              Staff, Pengembangan riset teknologi proses dan industri Carbon
            </td>
          </tr>
          <tr>
            <td>2021</td>
            <td>Talenta Media International</td>
            <td>Admin staff , bergerak di sektor penyelenggara acara.</td>
          </tr>
        </ul>
      </table>
    </div>
  );
}

export default WorkExperience;
