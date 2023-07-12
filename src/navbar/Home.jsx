import React from "react";

const Home = () => {
  return (
    <div>
      <table className="border" border="2px">
        <tr>
          <th>No.</th>

          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
          <th>Department</th>
        </tr>
        <tr>
          <th>1</th>
          <td>Pitambar Bhadra</td>
          <td>pitambar.bhadra@cloudeq.com</td>
          <td>CloudEQ</td>
          <td>Software Engineer</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Sanyam Rathore</td>
          <td>sanyam.rathore@cloudeq.com</td>
          <td>CloudEQ</td>
          <td>Software Engineer</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Rudra Pratap Singh</td>
          <td>rudra.singh@cloudeq.com</td>
          <td>CloudEQ</td>
          <td>Cloud Monitoring Engineer OAC</td>
        </tr>
        <tr>
          <th>4</th>
          <td>Sachin Singh Negi</td>
          <td>sachin.singh@cloudeq.com</td>
          <td>CloudEQ</td>
          <td>Cloud Monitoring Engineer OAC</td>
        </tr>
        <tr>
          <th>5</th>
          <td>Swaranjal Singh</td>
          <td>swaranjal.singh@cloudeq.com</td>
          <td>CloudEQ</td>
          <td>Azure DevOps Engineer</td>
        </tr>
        <tr>
          <th>6</th>
          <td>Karan Kumar</td>
          <td>Karan.kumar@cloudeq.com</td>
          <td>CloudEQ</td>
          <td>Cloud Security Engineer</td>
        </tr>
        <tr>
          <td rowspan="2">Additional</td>
          <td colspan="3">Shivam</td>
          <td>App Development</td>
        </tr>
        <tr>
          <td colspan="4">This is my Assignment</td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
