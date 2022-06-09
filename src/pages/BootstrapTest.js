
const BootstrapTest = () => {
    return (
        <div className="flex-grow-1 d-flex flex-column">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-lg-10 mx-auto" id="content">
                        <div className="row">
                            <div className="col-md pt-5">

                                <section id="buttons" className="pb-2">
                                    <div className="row">
                                        <div className="col-12">

                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                                    <li className="breadcrumb-item"><a href="/">Library</a></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
                                                </ol>
                                            </nav>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="pb-3">
                                                <button type="button" className="btn btn-primary mr-1">Button</button>
                                                <button type="button" className="btn btn-outline-primary">Outline</button>
                                            </div>
                                            <div className="pb-3">

                                                <button type="button" className="btn btn-primary align-bottom btn-lg mr-1">Large</button>


                                                <button type="button" className="btn btn-primary align-bottom btn-sm mr-1">Small</button>


                                                <a href="/">Text</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 text-right">


                                            <div className="btn-toolbar d-inline-block mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                                    <button type="button" className="btn btn-outline-primary">1</button>
                                                    <button type="button" className="btn btn-primary">2</button>
                                                    <button type="button" className="btn btn-primary">3</button>
                                                    <button type="button" className="btn btn-primary">4</button>
                                                </div>
                                                <div className="btn-group mr-2" role="group" aria-label="Second group">
                                                    <button type="button" className="btn btn-primary">5</button>
                                                    <button type="button" className="btn btn-primary">6</button>
                                                    <button type="button" className="btn btn-primary">7</button>
                                                </div>
                                                <div className="btn-group" role="group" aria-label="Third group">
                                                    <button type="button" className="btn btn-primary">8</button>
                                                </div>
                                            </div>


                                            <div className="dropdown">
                                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dropdown button
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="/">Action</a>
                                                    <a className="dropdown-item" href="/">Another action</a>
                                                    <a className="dropdown-item" href="/">Something else here</a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-12 py-4">
                                            <button className="btn btn-primary mr-1 mb-1">Primary</button>
                                            <button className="btn btn-secondary mr-1 mb-1">Secondary</button>
                                            <button className="btn btn-info mr-1 mb-1">Info</button>
                                            <button className="btn btn-danger mr-1 mb-1">Danger</button>
                                            <button className="btn btn-success mr-1 mb-1">Success</button>
                                            <button className="btn btn-warning mr-1 mb-1">Warning</button>
                                            <button className="btn btn-light border mr-1 mb-1">Light</button>
                                            <button className="btn btn-dark mr-1 mb-1">Dark</button>
                                        </div>
                                    </div>
                                </section>

                                <section id="navs" className="py-3">
                                    <div className="row">
                                        <div className="col-xl-9 pb-4">


                                            <ul className="nav">
                                                <li className="nav-item">
                                                    <a className="nav-link pl-0" href="/">Link</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">Link</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">Link</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">Link</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link disabled" href="/">Disabled</a>
                                                </li>
                                            </ul>
                                            <hr />


                                            <ul className="nav nav-tabs">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="/tab1" data-toggle="tab">Tab</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/tab2" data-toggle="tab">Tab</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/tab3" data-toggle="tab">Tab</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link disabled" href="/tab4" data-toggle="tab">Disabled</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content px-1 pt-2">
                                                <div className="tab-pane active" id="tab1">
                                                    <p>
                                                        Welcome to my custom Bootstrap 4 test page that is a simple way to see various Bootstrap component examples.
                                                    </p>
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                                                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                                                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                                                            <li className="page-item"><a className="page-link" href="/">Next</a></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="tab-pane" id="tab2">2. Put a little content in your pane.</div>
                                                <div className="tab-pane" id="tab3">3. Put some more content in your pane here.</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 pb-4">


                                            <ul className="nav nav-pills flex-column mb-3">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="/" data-toggle="popover" data-trigger="hover" data-placement="top" data-title="Primary color" data-content="Links and 'active' elements always use the primary color.">Active</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">Link</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">Link</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">Link</a>
                                                </li>
                                            </ul>



                                            <div className="btn-group mb-3 w-100">
                                                <button type="button" className="btn btn-primary btn-block">Dropdown</button>
                                                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="/">Action</a>
                                                    <a className="dropdown-item" href="/">Link</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="/">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="grid" className="py-3">
                                    <p className="lead">The rows &amp; columns of the world famous Bootstrap grid speak for themselves.</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            6
                                        </div>
                                        <div className="col-6">
                                            <div className="card my-1 bg-light">6</div>
                                        </div>
                                        <div className="col-sm-5">
                                            5
                                        </div>
                                        <div className="col-7">
                                            <div className="card my-1">7</div>
                                        </div>
                                        <div className="col-sm-4">
                                            4
                                        </div>
                                        <div className="col-8">
                                            <div className="card my-1">8</div>
                                        </div>
                                        <div className="col-sm-3">
                                            3
                                        </div>
                                        <div className="col-9">
                                            <div className="card my-1">9</div>
                                        </div>
                                        <div className="col-sm-2">
                                            2
                                        </div>
                                        <div className="col-10">
                                            <div className="card my-1">10</div>
                                        </div>
                                        <div className="col-sm-1">
                                            1
                                        </div>
                                        <div className="col-11">
                                            <div className="card my-1">11</div>
                                        </div>
                                    </div>
                                </section>

                                <section id="cards" className="bg-faded py-2">
                                    <div className="d-flex my-3">


                                        <div className="jumbotron w-100 py-5 mx-auto">
                                            <h1 className="display-3">Hello, world!</h1>
                                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-4 mb-4">


                                            <div className="card border-primary h-100">
                                                <div className="card-body d-flex flex-column align-items-start">
                                                    <h4 className="card-title text-primary">Card Outline</h4>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content. This has text that may wrap to the next line.</p>
                                                    <a href="/" className="btn btn-primary mt-auto">Button</a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-xl-6 col-lg-4 mb-4">
                                            <div className="card border-primary h-100">
                                                <div className="card-body">


                                                    <div className="list-group">
                                                        <a href="/" className="list-group-item list-group-item-action active">List Group</a>
                                                        <a href="/" className="list-group-item list-group-item-action">List item</a>
                                                        <a href="/" className="list-group-item list-group-item-action">List item 2</a>
                                                        <a href="/" className="list-group-item list-group-item-action disabled">List item 3</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-4 mb-4">
                                            <div className="card bg-primary text-white h-100">
                                                <div className="card-body d-flex flex-column align-items-start">
                                                    <h4 className="card-title">Card</h4>
                                                    <p className="card-text">Watch me scale, scale. Now watch me stack, stack. Watch me scale, scale...</p>
                                                    <a href="/" className="btn btn-primary border-white mt-auto">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="forms" className="py-3">
                                    <div className="row">
                                        <div className="col-md-12">


                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-md-2 col-form-label form-control-label text-muted">First</label>
                                                    <div className="col-md-4">
                                                        <input className="form-control" type="text" value="Jane" />
                                                    </div>
                                                    <label className="col-md-1 col-form-label form-control-label text-muted">Last</label>
                                                    <div className="col-md-5">
                                                        <input className="form-control" type="text" value="Bishop" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-2 col-form-label form-control-label text-muted">Address</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" type="text" placeholder="Street" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-2 col-form-label form-control-label text-muted"></label>
                                                    <div className="col-lg-6">
                                                        <input className="form-control" type="text" placeholder="City" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <select className="form-control">
                                                            <option>State</option>
                                                            <option>AK</option>
                                                            <option>AZ</option>
                                                            <option>CA</option>
                                                            <option>CO</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row was-validated">
                                                    <label className="col-lg-2 col-form-label form-control-label text-muted">Username</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" type="text" required="" />
                                                        <div className="invalid-feedback">
                                                            Username is required.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-2 col-form-label form-control-label text-muted">Password</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" type="password" value="11111122333" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-2 col-form-label form-control-label"></label>
                                                    <div className="col-lg-10">
                                                        <input type="reset" className="btn btn-outline-secondary mr-2" value="Cancel" />
                                                        <input type="button" className="btn btn-primary mr-2" value="Submit" />
                                                        <div className="custom-control custom-checkbox d-inline">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck" checked="" />
                                                            <label className="custom-control-label" for="customCheck">Check me out</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </section>

                                <section id="more" className="py-2">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-sm">
                                                    <tbody>
                                                        <tr>
                                                            <th className="w-25">Location</th>
                                                            <th className="w-50">Date</th>
                                                            <th className="w-25">Visits</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Westfield</td>
                                                            <td>08.05.18 <span className="badge badge-primary">badge</span></td>
                                                            <td>2323</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Galway</td>
                                                            <td>08.05.18 <span className="badge badge-pill badge-primary">badge-pill</span></td>
                                                            <td>5362</td>
                                                        </tr>
                                                        <tr className="table-primary">
                                                            <td>Bern</td>
                                                            <td>08.05.18</td>
                                                            <td>153</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="w-100 my-4"></div>
                                        <div className="col-md-12">
                                            <div className="progress mb-2">
                                                <div className="progress-bar bg-primary w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">


                                            <div className="alert alert-primary alert-dismissable show fade" role="alert">
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                                <strong>Well done!</strong> You successfully read this important alert message.
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BootstrapTest;