import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Menu = ({ chapters }) => (
    <div className="sidebar">
        <div className="sticky">
    {chapters
        .filter(chapter => chapter.node.frontmatter.title.length > 0)
        .map(({ node: chapter }) => {
          return (
            <AnchorLink className="menupunkt" to={"/#" + chapter.frontmatter.path}>
                <p className="reducedDistance">{chapter.frontmatter.title}</p>
              </AnchorLink>
          )
        })}
    </div>
    </div>
)

Menu.propTypes = {
  chapters: PropTypes.object,
}

Menu.defaultProps = {
  chapter: {},
}

export default Menu
