
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="bg-blue-100">
      <p className="text-center text-black py-5">
        Accelerate your teams' work with Projeet Intelligence (PI) features 🤖
        now available for all Premium and Enterprise!
      </p>
      <Link to="/blackpage">Learn more, blackpage.</Link>
    </div>
  );
}

export default LearnMore;