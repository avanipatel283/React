import './App.css';

export const JobDetails = () => {
  const job1 = 
    {
    name: 'Front End Developer',
    company: 'Facebook',
    location: 'Mountain View, CA',
    salary: '$100,000'
    };
  const job2 =
    {
      name: 'Full Stack Developer',
      company: 'Google',
      location: 'San Francisco, CA',
      salary: '$120,000'
    };
  return (
    <div>
      <h2 className='h2'>Job Details</h2>
        <table className='table' border="1">
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
          <tr>
            <td>{job1.name}</td>
            <td>{job1.company}</td>
            <td>{job1.location}</td>
            <td>{job1.salary}</td>
          </tr>
          <tr>
            <td>{job2.name}</td>
            <td>{job2.company}</td>
            <td>{job2.location}</td>
            <td>{job2.salary}</td>
          </tr>
        </table>
    </div>
  );
};