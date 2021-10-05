const fs = require('fs') //eslint-disable-line

const path = process.argv[2]
const name = path.substr(path.lastIndexOf('/') + 1)

if (!name || name.substr(0, 1) !== name.substr(0, 1).toUpperCase()) {
  console.log(
    'Please provide a valid component name to create a new component! Component name must start with a capital letter.'
  )
  console.log('Proper CLI format: yarn run create_component <COMPONENT_NAME>')
  return
}

const basePath = `./src/${path}`
console.log(`Creating new component ${name} in ${basePath}`)

try {
  // Create new Component Directory
  fs.mkdirSync(`${basePath}`, { recursive: true })

  // Create new Component Typescript file
  fs.writeFileSync(
    `${basePath}/${name}.tsx`,
    `import React, { FC } from 'react'
import ${name}Props from './${name}.interface'

export const ${name}: FC<${name}Props> = ({ id, classList }) => {
  let className = \`se-${name.toLowerCase()}\`
  if (classList) {
    className = \`\${className} \${classList.join(' ')}\`
  }

  return (
    <div id={id} className={className}>
      {/* Add your content here */}
    </div>
  )
}
`
  )

  // Export new component from components/index.ts
  fs.appendFileSync(`./src/index.ts`, `export * from './${path}/${name}'\n`)

  // Create new Component interface file
  fs.writeFileSync(
    `${basePath}/${name}.interface.ts`,
    `export default interface ${name}Props {
  classList?: string[]
  id?: string
}
`
  )

  // Create new Component test file
  fs.writeFileSync(
    `${basePath}/${name}.spec.tsx`,
    `import React from 'react'
import { shallow } from 'enzyme'
import { ${name} } from './${name}'

describe('${name}', () => {
  const wrapper = shallow(<${name} />)
  it('Should render without crashing.', () => {
    const c = wrapper.find('#${name}')
    expect(c.length).toBe(1)
  })
})
`
  )

  // Create new Component .scss file

  fs.writeFileSync(
    `${basePath}/${name}.scss`,
    `.se-${name.toLowerCase()} {
  // add your component styles here
}
`
  )

  // Import new .scss file into styles/index.global.scss
  fs.appendFileSync(`./src/index.scss`, `@import './${path}/${name}.scss';\n`)

  console.log('Successfully created new component!')
  return
} catch (e) {
  console.error('Failed to create new component:', e)
}
