import './App.css';
import { useState } from 'react';

function App() {
  const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};
  return (
    <section className="vh-100 gradient-custom" style={{backgroundRepeat: 'no-repeat'}}>
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form>
  
                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="text" id="firstName" className="form-control form-control-lg" />
                      <label className="form-label" for="firstName">First Name</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="text" id="lastName" className="form-control form-control-lg" />
                      <label className="form-label" for="lastName">Last Name</label>
                    </div>
  
                  </div>
                </div>
  
                
  
                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
  
                    <div className="form-outline">
                      <input type="email" id="emailAddress" className="form-control form-control-lg" />
                      <label className="form-label" for="emailAddress">Email</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
  
                    <div className="form-outline">
                      <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                      <label className="form-label" for="phoneNumber">Phone Number</label>
                    </div>
  
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
  
                    <select className="select form-control-lg">
                      <option value="1" disabled>Choose Country</option>
                      <option value="2">India</option>
                      <option value="3">Usa</option>
                      <option value="4">England</option>
                    </select>
                    <label className="form-label select-label mx-3">Choose Country</label>
  
                  </div>
                </div>

                <div className="row">
                  <div className="form-outline col-md-12 mb-4 d-flex align-items-center">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Description</span>
                    </div>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                  </div>
                  </div>
                  
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div>
                      <input type="file" id="file" multiple onChange={handleImageChange} />
                        <label htmlFor="file" className="btn btn-info justify-content-center">
                          Upload Image
                        </label>
                      <div className="result">{renderPhotos(selectedFiles)}</div>
                    </div>
                  </div>
                </div>
                
  
                <div className="text-center">
                  <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                </div>
  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default App;
