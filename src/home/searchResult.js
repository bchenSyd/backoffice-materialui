import React from 'react'

export default ({result})=>(
    <div name={result.id} className='margin-top-10'>
        <a href={result.siteUrl}>{result.siteUrl}</a>
        <div>{result.description}</div>
    </div>
    )
