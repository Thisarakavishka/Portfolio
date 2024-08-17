import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>Projects</h2>
            <div>
                {
                    PROJECTS.map((project, id) => (
                        <div key={id} className='flex flex-wrap lg:justify-center'>
                            <div className='w-full lg:w-1/4'>
                                <img className="mb-6 rounded" width={150} height={150} src={project.image} alt={project.title} />
                            </div>
                            <div className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                                <p className='mb-4 text-neutral-400'>{project.description}</p>
                                {
                                    project.technologies.map((technology, index) => (
                                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>{technology}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects