import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const ColdDrinks = () => {
  // const data = useStaticQuery(graphql`
  // query {
  //   allContentfulMenuItem(
  //     filter: {
  //       category: {
  //         title: {eq: "Cold Drinks"}
  //       }
  //     }
  //   ) {
  //     edges {
  //       node {
  //         title
  //         id
  //         price
  //         category{
  //           title
  //         }
  //       }
  //     }
  //   }
  // }
  // `)

  //const items = data.allContentfulMenuItem.edges;
  return (null
    // <div>
    //   <p className="sample">SAMPLE MENU</p>
    //   <ul className="menu-items-grid">
    //     {
    //       items.map(({ node }) => {
    //         return (
    //           <li key={node.id} className="menu-item">
    //             <h3>{node.title}</h3>
    //             <span>£{node.price}</span>
    //           </li>
    //         )
    //       })
    //     }
    //   </ul>
    // </div>
  )
}

export default ColdDrinks;