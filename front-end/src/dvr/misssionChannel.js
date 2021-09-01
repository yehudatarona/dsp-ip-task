import React from 'react';
function MissionChannel(props) {

  const item = props.item

  return (
    <React.Fragment>
      {item.channels.length > 0 ? item.channels.map((element, i) => {
        return (
          <tr key={i}>
            <td className="align-middle">{item.id}</td>
            <td className="align-middle">{item.name}</td>
            <td className="align-middle">{element.id}</td>
            <td className="align-middle">{element.ip}</td>
            <td className="align-middle">{element.port}</td>
            <td className="align-middle">{element.type}</td>
            <td className="align-middle">{item.duration}</td>
            {/* <td className="align-middle"></td> */}
          </tr>

        )
      }) : <tr>
        <td className="align-middle">{item.id}</td>
        <td className="align-middle">{item.name}</td>
        <td className="align-middle"></td>
        <td className="align-middle"></td>
        <td className="align-middle"></td>
        <td className="align-middle"></td>
        <td className="align-middle">{item.duration}</td>
        {/* <td className="align-middle"></td> */}
      </tr>}

    </React.Fragment>
  )

}

export default MissionChannel
