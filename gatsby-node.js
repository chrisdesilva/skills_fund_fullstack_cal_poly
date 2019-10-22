exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
 
    createRedirect({ fromPath: 'https://calpolybootcamp.skills.fund/*', toPath: 'https://calpolyextendedbootcamp.skills.fund/:splat', isPermanent: true, force: true })
    createRedirect({ fromPath: '/go', toPath: '/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure'})
    createRedirect({ fromPath: '/accepted', toPath: '/'})
   
}