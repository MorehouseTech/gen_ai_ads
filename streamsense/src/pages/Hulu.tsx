import { useParams } from 'react-router-dom';

const Hulu = () => {
    const { passed } = useParams();
    
    return (
      <div>
        <h1>{passed}</h1>
        {/* Include the Counter component here */}
        
        {/* Other About page content */}
      </div>
    );
  };
  
  export default Hulu;