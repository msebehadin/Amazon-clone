import React, { useState, type CSSProperties } from 'react'
import {ClipLoader} from 'react-spinners'
const override: CSSProperties = {
  
marginLeft:"550px"
  
};
const Loading: React.FC = () => {
    const [Loading, setLoading] = useState(true);
    const [color,setColor]=useState('#ffffff')
  return (
    <div>
          <ClipLoader
          color={color}
        loading={Loading}
        cssOverride={override}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
          />
    </div>
  )
}

export default  Loading