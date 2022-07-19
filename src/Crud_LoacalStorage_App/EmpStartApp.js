import React from 'react'

const EmpStartApp = () => {
  return (
    <div className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}></h1>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/home" component={Home} />
                      <Route path="/addemp" component={addEmployee} />
                  </Switch>
              </div>
          </Router>
      </div>
  )
}

export default EmpStartApp