import React from 'react';
import { useState } from 'react';


const Form1 = () => {
    const [s, setSize] = useState('Medium');
function onOptionChange(e)  {
setSize(e.target.value);
};

  return (
    <div>
<h3>Select Pizza Size</h3>
<form>
<input type='radio' name='ps' value='Regular' checked={s === 'Regular'} onChange={onOptionChange} />
<label>Regular</label>
<input type='radio' name='ps' value='Medium' checked={s === 'Medium'} onChange={onOptionChange} />
<label>Medium</label>
<input type='radio' name='ps' value='Large' checked={s === 'Large'} onChange={onOptionChange} />
<label>Large</label>
</form>
<p>
   Selected size <strong>{s}</strong>
</p>

    </div>
  )
}

export default Form1
