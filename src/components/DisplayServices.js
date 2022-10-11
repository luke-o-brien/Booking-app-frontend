import React from "react";

function DisplayServices() {
  
  const [services, setServices] = React.useState(undefined)
  
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/services')
      const json = await res.json()
      setServices(json)
    }
    getData()
  }, [])

  return (
    <>
      <h2>{services.serviceNumber}</h2>
    </>
  )
}

export default DisplayServices