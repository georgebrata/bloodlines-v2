import React from "react";
import SampleButton from './SampleButton';

const Load = ({ handleUpload, loadBrata, loadHalfling, loadKennedy, loadShakespeare, loadTudor, loadGOT, loadKardashian, showError }) => {
  return (
    <div id='load'>
      <div>
        <section>
          <h1>Arbore genealogic 3D</h1>
          {/* <h3>Vezi familie</h3> */}
        </section>

        <section className='button-area'>
          <p>Alege familie</p>
          <SampleButton
            name={'Brata'}
            loadFile={loadBrata}
          />
          <SampleButton
            transparent
            name={'Shakespeare'}
            loadFile={loadShakespeare}
          />
          <SampleButton
            transparent
            name={'Kennedy'}
            loadFile={loadKennedy}
          />
          <SampleButton
            transparent
            name={'Kardashian'}
            loadFile={loadKardashian}
          />
          {/* <SampleButton
          name={'Halfling'}
          loadFile={loadHalfling}
          /> */}
          <SampleButton
            transparent
            name={'Tudor'}
            loadFile={loadTudor}
          />
        </section>

        <section style={{'marginTop': '3rem'}}>
          <p>sau upload fișier GEDCOM (extensia .ged)</p>
          { showError ? <p className='error'>File type not supported. Please use a .ged file.</p> : null}
          <input id='file-input' className='form-control' type='file' name='gedFile' onChange={handleUpload} />
        </section>

        <section className='links'>
          <p><a href='https://github.com/oh-kay-blanket/blood-lines'> bloodlines</a></p>
          <p><a href='https://ohkayblanket.com'> source code by ohkayblanket.com</a></p>
        </section>
      </div>
    </div>
  )
}

export default Load;
