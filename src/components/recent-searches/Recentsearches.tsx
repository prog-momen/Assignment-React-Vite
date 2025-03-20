import { FaPlane } from 'react-icons/fa';

interface RecentProps {
  des?: string;
  des1?: string;
  des2?: string;
}

const Recent: React.FC<RecentProps> = (props) => {
  return (
    <div className="card shadow-sm" style={{ width: '600px', borderRadius: '10px' }}>
      <div className="card-body text-center">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="h5 text-primary mb-0">{props.des}</span>
          <div className="d-flex align-items-center">
            <span className="mx-2">•</span>
            ----
            <FaPlane className="text-primary mx-2" /> 
            ----
            <span className="mx-2">•</span>
          </div>
          <span className="h5 text-primary mb-0">{props.des1}</span>
        </div>
        <div className="text-muted mt-2">
          <strong>Depart On:</strong> {props.des2}
        </div>
      </div>
    </div>
  );
};

export default Recent;
