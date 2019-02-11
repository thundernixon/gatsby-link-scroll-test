import React from 'react'
import { Link } from 'gatsby'

const ProjectLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.URLpath}>
      {post.frontmatter.designer} {post.frontmatter.project}
    </Link>
  </div>
)

export default ProjectLink
