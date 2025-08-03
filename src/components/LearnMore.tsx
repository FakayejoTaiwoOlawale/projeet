
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="bg-blue-100 flex flex-row justify-center">
      <p className="text-center text-black py-5">
        Accelerate your teams' work with Projeet Intelligence (PI) features 🤖
        now available for all Premium and Enterprise! 
      <Link className='underline text-blue-800 ml-1' to="/blackpage">Learn more blackpage.</Link>
      </p>
    </div>
  );
}

export default LearnMore;